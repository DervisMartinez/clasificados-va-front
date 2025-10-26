"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/lib/axios";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Base/Modal";

import Button from "@/components/Button";
import TextArea from "@/components/Inputs/Base/Textarea";
import IconButton from "@/components/IconButton";
import { toast } from "react-toastify";

export default function ReportAction({ clasificado }) {
  const [open, setOpen] = useState(false);

  const schema = z.object({
    reason: z.string().min(5, "El motivo debe tener al menos 5 caracteres"),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      reason: "",
    },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = form;

  const onSubmit = async (data) => {

    try {

      const response = await axios.post(`api/clasificado/${clasificado.slug}/report`, data);

      toast.success("Reporte enviado.");

    } catch (error) {

      toast.error('Error al enviar reporte!');

    }

    setOpen(false);

    reset();


  };

  return (
    <>

      <IconButton
        onClick={() => setOpen(true)}
        icon="LuFlag"
        textColor="text-gray-500"
        bgColor="bg-white"
        hoverBg="hover:bg-gray-50"
      />

      <Modal size="md" open={open} onClose={() => setOpen(false)}>
        <ModalHeader>
          Denunciar clasificado
        </ModalHeader>
        <ModalBody>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextArea
              label="Motivo de la denuncia"
              placeholder="Describe el motivo de tu denuncia"
              {...register("reason")}
              errors={errors?.reason?.message}
            />


          </form>
        </ModalBody>

        <ModalFooter>
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              icon="LuFlag"
              label="Enviar denuncia"
              loading={isSubmitting}
              bgColor="bg-red-500"
              hoverBg="hover:bg-red-600"
            />
          </div>
        </ModalFooter>

      </Modal>
    </>
  );
}
