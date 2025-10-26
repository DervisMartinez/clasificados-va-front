
import Input from "@/components/Inputs/Base/Input";
import Select from "@/components/Inputs/Base/Select";
import TextArea from "@/components/Inputs/Base/Textarea";
import AddressSelect from "@/components/Inputs/Base/AddressSelect";
import { useState } from "react";

export default function AdInfoStep({ form, categories, plans }) {

    const { register, getValues, formState: { errors } } = form;



    const limit = plans.find(plan => plan.id == getValues('plan_id')).limit_words;

    const previews = Array.from(form.watch("images") || []).map(file =>
        file instanceof File ? URL.createObjectURL(file) : file
    );

    const formattedCategories = categories.map(cat => ({
        label: cat.name,
        value: cat.id,
        isParent: cat.parent_id == null,
        children: cat.children?.map(c => ({
            label: c.name,
            value: c.id,
            parentId: cat.id
        })) || []
    }));

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const dt = new DataTransfer();
        files.forEach(file => dt.items.add(file));
        form.setValue("images", dt.files, { shouldValidate: true });
    };


    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">

            <div className="col-span-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Imágenes
                </label>

                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                        const files = Array.from(e.target.files);

                        // Límite de 2 imágenes
                        const currentFiles = form.getValues("images") || [];
                        const totalFiles = currentFiles.length + files.length;
                        if (totalFiles > 2) {
                            toast.error("Solo puedes subir hasta 2 imágenes");
                            files.splice(2 - currentFiles.length); // conservar solo hasta el límite
                        }

                        // Hacer merge con archivos actuales
                        form.setValue("images", [...currentFiles, ...files], { shouldValidate: true });
                    }}
                    className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {errors.images && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.images.message}
                    </p>
                )}

                {/* Previews */}
                {form.watch("images")?.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Array.from(form.watch("images")).map((file, index) => (
                            <div
                                key={index}
                                className="relative w-full h-28 rounded-lg overflow-hidden border border-gray-200 shadow-sm"
                            >
                                <img
                                    src={file instanceof File ? URL.createObjectURL(file) : file}
                                    alt={`preview-${index}`}
                                    className="w-full h-full object-cover"
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        const newFiles = Array.from(form.getValues("images")).filter((_, i) => i !== index);
                                        form.setValue("images", newFiles, { shouldValidate: true });
                                    }}
                                    className="absolute top-1 right-1 bg-red-600/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md hover:bg-red-700"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Input
                id="name"
                label="Título"
                placeholder="Ingresa un título para tu anuncio"
                hideLabel={false}
                {...register("title")}
                errors={errors.title?.message}
            />
            <Select
                id="categories"
                label="Categorías"
                value={form.watch("categories")}
                {...register("categories")}
                hideLabel={false}
                errors={errors.categories?.message}
                options={formattedCategories}
                multiple
            />

            <AddressSelect {...register('ubication')} label="Dirección" errors={errors.ubication?.message} />

            <div className="col-span-full">
                <TextArea {...register("description")} hideLabel={false} value={getValues().description} label="Descripción" errors={errors.description?.message}  {...limit ? { limit: limit } : {}} />
            </div>
        </div>
    )
}