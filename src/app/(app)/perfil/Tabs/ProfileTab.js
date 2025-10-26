import Input from "@/components/Inputs/Base/Input"
import Select from "@/components/Inputs/Base/Select"
import Button from "@/components/Button"
import Checkbox from "@/components/Inputs/Checkbox";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";


import z, { set } from "zod";
import axios from "@/lib/axios";

import { toast } from 'react-toastify';

export default function ProfileTab({ user }) {

    const {setUser} = useAuth();

    const userSchema = z.object({
        name: z.string().min(1, "Este campo es obligatorio"),
        last_name: z.string().optional(),
        phone_number: z.string().min(7, "Teléfono inválido"),
        document_type: z.string().nonempty("Seleccione un tipo de documento"),
        document: z.string().min(5, "Documento inválido"),
        birth_date: z.string().nullable().optional().transform((value) => (value === '' ? null : value)),
        gender: z.any().optional(),
        receive_newsletter: z.any().optional(),
        social_links: z.record(
            z.string(),
            z.union([z.url("URL inválida"), z.literal(""), z.undefined(), z.null()]).optional()
        ).optional(),
    }).refine((data) => {
        if (data.document_type === 'J') {
            return true;
        }
        return !!data.last_name;
    }, {
        message: "Este campo es obligatorio",
        path: ['last_name'],
    }).refine((data) => {
        if (data.document_type === 'J') {
            return true;
        }
        return !!data.birth_date;
    }, {
        message: "Este campo es obligatorio",
        path: ['birth_date'],
    });


    const form = useForm({
        resolver: zodResolver(userSchema),
        mode: "onTouched",
        defaultValues: {
            name: user?.name || "",
            last_name: user?.last_name || "",
            document: user?.document || "",
            document_type: user?.document_type || "",
            phone_number: user?.phone_number || "",
            gender: user?.gender,
            birth_date: user.birth_date ? new Date(user?.birth_date).toISOString().split("T")[0] : null,
            social_links: user?.social_links || { facebook: "", instagram: "", tiktok: "" },
            receive_newsletter: user?.receive_newsletter ?? false,
        },
    });

    const { register, handleSubmit, formState } = form;


    const onSubmit = async (data) => {
        try {
            const cleanedData = Object.fromEntries(
                Object.entries(data).filter(([_, value]) => value != null)
            );

            const response = await axios.put("api/user", cleanedData);

            setUser(response.data.data)
            

            toast.success(response.data.message);

        } catch (error) {

            console.log(error);
            
            let errors = error?.response?.data?.errors;

            if (errors) {
                Object.keys(errors).forEach((key) => {
                    form.setError(key, { type: "server", message: errors[key][0] });
                });
            }

            toast.error("Error al actualizar tu perfil, por favor verifica los campos e intentalo de nuevo.");
        }
    };


    return (
        <div className="h-full">
            <h1 className="text-2xl font-bold mb-4">Perfil de usuario</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

                <small className="col-span-full font-bold border-b text-gray-500 border-gray-300">Datos generales</small>

                <Input {...register("name")} errors={formState.errors.name?.message} label="Nombre" hideLabel={false} />


                {form.getValues('document_type') != 'J' &&

                    <>
                        <Input {...register("last_name")} errors={formState.errors.last_name?.message} label="Apellido" hideLabel={false} />


                        <Select
                            {...register("gender")}
                            value={form.getValues('gender')}
                            errors={formState.errors.gender?.message}
                            label="Género"
                            hideLabel={false}
                            options={[
                                { label: "Masculino", value: "M" },
                                { label: "Femenino", value: "F" },
                                { label: "Otro", value: "O" },
                            ]}


                        />
                        <Input {...register("birth_date")} type="date" errors={formState.errors.birth_date?.message} label="Fecha de nacimiento" hideLabel={false} />
                    </>
                }

                <Select
                    {...register("document_type")}
                    value={form.getValues('document_type')}
                    disabled
                    errors={formState.errors.document_type?.message}
                    label="Tipo de documento"
                    hideLabel={false}
                    options={[
                        { label: "V", value: "V" },
                        { label: "E", value: "E" },
                        { label: "J", value: "J" },
                    ]}
                />
                <Input
                    {...register("document")}
                    errors={formState.errors.document?.message}
                    label="Cédula"
                    hideLabel={false}
                    numericOnly
                />



                <small className="col-span-full font-bold border-b text-gray-500 border-gray-300">Contacto y redes sociales</small>

                <Input
                    {...register("phone_number")}
                    errors={formState.errors.phone_number?.message}
                    label="Número de teléfono"
                    type="tel"
                    icon="LuPhone"
                    hideLabel={false}
                    placeholder="0412-XXXXXXX"
                    numericOnly
                />

                <Input
                    {...register("social_links.instagram")}
                    errors={formState.errors.social_links?.instagram?.message}
                    id="instagram"
                    label="Instagram"
                    placeholder="https://instagram.com/mi-perfil"
                    icon="Instagram"
                    hideLabel={false}
                    numericOnly
                />
                <Input
                    {...register("social_links.facebook")}
                    errors={formState.errors.social_links?.facebook?.message}
                    id="facebook"
                    label="Facebook"
                    placeholder="https://facebook.com/mi-perfil"
                    icon="Facebook"
                    hideLabel={false}
                />
                <Input
                    {...register("social_links.tiktok")}
                    errors={formState.errors.social_links?.tiktok?.message}
                    id="tiktok"
                    label="TikTok"
                    placeholder="https://tiktok.com/@mi-perfil"
                    icon="Tiktok"
                    hideLabel={false}
                />

                <Checkbox {...register("receive_newsletter")} value={form.getValues('receive_newsletter')} label="Recibir newsletter" />


                <div className="col-span-full ml-auto mt-2">
                    <Button
                        loading={formState.isSubmitting}
                        type="submit"
                        label="Actualizar datos"
                        bgColor="bg-black"
                        hoverBg="hover:bg-gray-900"
                        borderColor=""
                    />
                </div>
            </form>
        </div>
    );
}


