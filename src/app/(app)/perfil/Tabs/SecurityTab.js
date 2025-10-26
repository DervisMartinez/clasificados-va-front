import Input from "@/components/Inputs/Base/Input"
import Select from "@/components/Inputs/Base/Select"
import Button from "@/components/Button"
import Checkbox from "@/components/Inputs/Checkbox";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import z from "zod";
import axios from "@/lib/axios";

import { toast } from 'react-toastify';

export default function SecurityTab({ user }) {

    const userSchema = z.object({
        email: z.string().email("Correo inválido"),
        password: z.string().optional(),
        password_confirmation: z.string().optional(),
    }).superRefine((data, ctx) => {
        if (data.password) {
            if (!data.password_confirmation) {
                ctx.addIssue({
                    code: "custom",
                    path: ["password_confirmation"],
                    message: "La confirmación es obligatoria si hay contraseña",
                });
            } else if (data.password !== data.password_confirmation) {
                ctx.addIssue({
                    code: "custom",
                    path: ["password_confirmation"],
                    message: "Las contraseñas no coinciden",
                });
            }
        }
    });

    const form = useForm({
        resolver: zodResolver(userSchema),
        mode: "onTouched",
        defaultValues: {
            email: user?.email || "",
        },
    });

    const { register, handleSubmit, formState } = form;


    const onSubmit = async (data) => {
        try {
            const cleanedData = Object.fromEntries(
                Object.entries(data).filter(([_, value]) => value != null)
            );

            const response = await axios.put("api/user", cleanedData);

            toast.success(response.data.message);

        } catch (error) {

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
            <h1 className="text-2xl font-bold mb-4">Información de acceso</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >


                <Input
                    errors={formState.errors.email?.message}
                    {...register("email")}
                    label="Email"
                    type="email"
                    icon="LuMail"
                    hideLabel={false}
                />
                <Input
                    errors={formState.errors.email?.message}
                    {...register("password")}
                    label="Contraseña"
                    type="password"
                    hideLabel={false}
                />
                <Input
                    errors={formState.errors.email?.message}
                    {...register("password_confirmation")}
                    label="Confirmación de contraseña"
                    type="password"
                    hideLabel={false}
                />




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


