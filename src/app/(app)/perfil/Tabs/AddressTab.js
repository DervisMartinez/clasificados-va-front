import Input from "@/components/Inputs/Base/Input"
import Select from "@/components/Inputs/Base/Select"
import TextArea from "@/components/Inputs/Base/Textarea"
import Button from "@/components/Button"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
import axios from "@/lib/axios";

import { toast } from 'react-toastify';

import { useAuth } from "@/context/AuthContext";

export default function AdddressTab({ user }) {
    
    const {setUser} = useAuth();

    const userSchema = z.object({
        
        state: z.string().nonempty("Este campo es obligatorio"),
        city: z.string().nonempty("Este campo es obligatorio"),
        municipality: z.string().nonempty("Este campo es obligatorio"),
        others: z.string().nonempty("Este campo es obligatorio"),
   
    })

    const form = useForm({
        resolver: zodResolver(userSchema),
        mode: "onTouched",
        defaultValues: {
           state: user.ubication?.state,
           city: user.ubication?.city,
           municipality: user.ubication?.municipality,
           others: user.ubication?.others,
        },
    });

    const { register, handleSubmit, formState } = form;


    const onSubmit = async (data) => {
        try {
            const payload = {ubication: {
                state: data.state,
                city: data.city,
                municipality: data.municipality,
                others: data.others
            }}

            const response = await axios.put("api/user", payload);

            setUser(response.data.data);

            toast.success(response.data.message);

        } catch (error) {

            let errors = error?.response?.data?.errors;

            if (errors) {
                Object.keys(errors).forEach((key) => {
                    form.setError(key, { type: "server", message: errors[key][0] });
                });
            }

            toast.error("Error al actualizar tu dirección, por favor verifica los campos e intentalo de nuevo.");
        }
    };


    return (
        <div className="h-full">
            <h1 className="text-2xl font-bold mb-4">Dirección</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

                <small className="col-span-full font-bold border-b text-gray-500 border-gray-300">Datos generales</small>

                <Input {...register('state')} label="Estado" hideLabel={false}/>            
                <Input {...register('city')} label="Ciudad" hideLabel={false}/>            
                <Input {...register('municipality')} label="Municipio" hideLabel={false}/>
                
                <div className="col-span-full" >

                <TextArea {...register('others')} label="Dirección" value={user.ubication?.others} hideLabel={false} />            
                </div>

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


