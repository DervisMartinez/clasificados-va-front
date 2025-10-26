"use client";

import { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Base/Modal";
import Input from "@/components/Inputs/Base/Input";
import Select from "@/components/Inputs/Base/Select";
import TextArea from "@/components/Inputs/Base/Textarea";
import Button from "@/components/Button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCategories } from "@/lib/api/utils";
import { toast } from "react-toastify";
import axios from "@/lib/axios";

export default function AppealDialog({ clasificado, setClasificado, open, setOpen, mutateData }) {

  const close = () => {
    setOpen(false);
    setClasificado(null);
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Validación con Zod
  const schema = z.object({
    title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    categories: z.array(z.number()).nonempty("Debes seleccionar al menos una categoría"),

    social_links: z.record(
      z.string(),
      z.union([z.url("URL inválida"), z.literal(""), z.undefined()]).optional()
    ).optional(),

    reason: z.string().min(5, "El motivo debe tener al menos 5 caracteres"),
  });

  // Cargar categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const cats = await getCategories();
        setCategories(cats);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Formulario react-hook-form
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      categories: [],
      social_links: [],
      reason: "",
    },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = form;

  // Reset del formulario cada vez que cambia el clasificado o se cargan las categorías
  useEffect(() => {
    if (!clasificado || categories.length === 0) return;

    reset({
      title: clasificado.title || "",
      description: clasificado.description,
      categories: clasificado.categories?.map(c => c.id) || [],
      social_links: clasificado.social_links,
      reason: "",
    });
  }, [clasificado, categories, reset]);

  // Formatear categorías para el Select
  const formattedCategories = categories.map(cat => ({
    label: cat.name,
    value: cat.id,
    isParent: cat.parent_id == null,
    children: cat.children?.map(c => ({
      label: c.name,
      value: c.id,
      parentId: cat.id,
    })) || [],
  }));

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`api/clasificado/${clasificado.id}/appeal`, data);

      mutateData();

      close();

      toast.success('Apelación enviada.');

    } catch (error) {
      toast.error('Error al enviar tu apelación');
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <Modal size="3xl" open={open} onClose={close}>
      <ModalHeader>
        Apelar
      </ModalHeader>

      <ModalBody>
        <p className="text-gray-700 mb-2 text-sm">
          Tu clasificado no pasó la revisión. Si crees que fue un malentendido y quieres ajustar algo, puedes hacerlo aquí.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Edita la información que consideres necesaria y deja un mensaje explicando tu apelación. Lo revisaremos lo antes posible.
        </p>

        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          <p className="font-medium">Motivo del rechazo:</p>
          <p className="mt-1 text-sm italic">
            {clasificado?.rejected?.rejection_reason || "No disponible"}
          </p>
        </div>

        {loading ? <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="space-y-2 mt-2">
            <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
          </div>
          <div className="space-y-2 mt-2">
            <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
          </div>
          <div className="space-y-2 mt-2">
            <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
          </div>
          <div className="space-y-2 mt-2">
            <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
          </div>
        </div> :
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
              <Input
                id="title"
                label="Título"
                value={clasificado?.title}
                placeholder="Ingresa un título para tu anuncio"
                hideLabel={false}
                {...register("title")}
                errors={errors.title?.message}
              />

              <Select
                id="categories"
                label="Categorías"
                value={watch('categories')}
                {...register("categories")}
                hideLabel={false}
                errors={errors.categories?.message}
                options={formattedCategories}
                multiple
              />

              <div className="col-span-full">
                <TextArea
                  {...register("description")}
                  hideLabel={false}
                  value={clasificado?.description}
                  label="Descripción"
                  errors={errors.description?.message}
                  rows={4}
                />
              </div>

              <Input
                {...register("social_links.video_url")}
                errors={errors.social_links?.video_url?.message}
                id="video-url"
                label="Video relacionado (YouTube)"
                placeholder="https://youtube.com/mi-video"
                icon="Youtube"
                hideLabel={false}

              />

              <Input
                {...register("social_links.instagram")}
                errors={errors.social_links?.instagram?.message}
                id="instagram"
                label="Instagram"
                placeholder="https://instagram.com/mi-perfil"
                icon="Instagram"
                hideLabel={false}

              />
              <Input
                {...register("social_links.facebook")}
                errors={errors.social_links?.facebook?.message}
                id="facebook"
                label="Facebook"
                placeholder="https://facebook.com/mi-perfil"
                icon="Facebook"
                hideLabel={false}
              />
              <Input
                {...register("social_links.tiktok")}
                errors={errors.social_links?.tiktok?.message}
                id="tiktok"
                label="TikTok"
                placeholder="https://tiktok.com/@mi-perfil"
                icon="Tiktok"
                hideLabel={false}
              />

              <div className="col-span-full">
                <TextArea
                  {...register("reason")}
                  hideLabel={false}
                  label="Mensaje para el moderador"
                  placeholder="Explica por qué crees que el rechazo fue incorrecto..."
                  errors={errors.reason?.message}
                  rows={3}
                />
              </div>
            </div>
          </form>
        }


      </ModalBody>

      <ModalFooter>
        <div className="flex justify-end gap-2">
          <Button
            bgColor="bg-gray-100"
            hoverBg="hover:bg-gray-200"
            textColor="text-gray-700"
            borderColor="border-white"
            onClick={close}
            label="Cancelar"
          />

          <Button type="submit" disabled={loading} loading={isSubmitting} label="Enviar" onClick={handleSubmit(onSubmit)} />

        </div>
      </ModalFooter>
    </Modal>
  );
}
