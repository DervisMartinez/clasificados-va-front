"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Modal from "@/components/Base/Modal/Modal";
import Button from "@/components/Button";
import TextArea from "@/components/Inputs/Base/Textarea";
import Input from "@/components/Inputs/Base/Input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function MessageAction({ clasificado }) {

    const { user } = useAuth();

    const [open, setOpen] = useState(false);

    const schema = z.object({
        name: z.string().min(1, "El nombre o razón social es obligatorio"),
        last_name: z.string().optional(),
        email: z.email("Email inválido"),
        message: z.string().min(1, "El mensaje no puede estar vacío"),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            name: user?.name || "",
            last_name: user?.last_name || "",
            email: user?.email || "",
            message: "",
        },
    });

    const { register, handleSubmit, formState: { errors } } = form

    const onSubmit = (data) => {
        const subject = encodeURIComponent(`Mensaje sobre tu clasificado`);
        const body = encodeURIComponent(
            `Hola ${clasificado.user.name},\n\n${data.mensaje}\n\nDe: ${data.nombre} ${data.apellido || ""}\nEmail: ${data.email}`
        );
        window.location.href = `mailto:${clasificado.user.email}?subject=${subject}&body=${body}`;
    };



    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className="w-full"
                icon="LuMail"
                label="Enviar mensaje"
                bgColor="bg-black"
                borderColor=""
                hoverBg="hover:bg-gray-800"
            />

            <Modal size="xl" open={open} onClose={() => setOpen(false)}>
                <h2 className="text-lg font-semibold mb-4">
                    Enviar mensaje a {clasificado.user.name}
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input errors={errors?.name?.message} {...register('name')} hideLabel={false} label={user?.document_type == 'J' ? 'Razón social' : 'Nombre'} />

                    {(!user || user?.document_type !== "J") && (
                        <Input
                            errors={errors?.last_name?.message}
                            {...register('last_name')}
                            hideLabel={false}
                            label="Apellido"
                            name="apellido"
                        />
                    )}


                    <Input errors={errors?.email?.message} {...register('email')} hideLabel={false} label="Correo electrónico" />

                    <div className="col-span-full">
                        <TextArea errors={errors?.message?.message} {...register('message')} className="col-span-full" label="Mensaje" placeholder="Escribe tu mensaje" />
                    </div>
                </form>

                <div className="mt-4 flex justify-end">

                    <Button
                        onClick={handleSubmit(onSubmit)}
                        icon="LuMail"
                        label="Enviar mensaje"
                        bgColor="bg-black"
                        borderColor=""
                        hoverBg="hover:bg-gray-800"
                    />
                </div>

            </Modal>
        </>
    );
}
