"use client";
import axios from '@/lib/axios';

import Title from "@/components/Base/Title";
import ProgressIndicator from "./Steps/ProgressIndicator";
import Button from "@/components/Button";
import Loader from './Loader';

import { useAuth } from '@/context/AuthContext';
import { getCategories, getPlans } from '@/lib/api/utils';
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { formSteps } from "./Steps/Steps";

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';


export default function PostForm() {

    const router = useRouter();

    const { user } = useAuth();

    const [categories, setCategories] = useState([]);
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [cats, pls] = await Promise.all([getCategories(), getPlans()]);
                setCategories(cats);
                setPlans(pls);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const {
        currentStepIndex,
        currentStep,
        steps,
        isFirstStep,
        isLastStep,
        next,
        prev,
    } = useMultistepForm(formSteps);

    const StepComponent = currentStep.component;

    const form = useForm({
        resolver: currentStep.schema ? zodResolver(currentStep.schema) : undefined,
        mode: "onTouched",
        defaultValues: {
            plan_id: '',
            title: "",
            categories: [],
            description: "",
            phone: "",
            ubication: "",
            social_links: {},
            images: [],
        },
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                if (key !== "images" && key !== "social_links") {
                    if (Array.isArray(data[key])) {
                        data[key].forEach((item, i) => {
                            formData.append(`${key}[${i}]`, item);
                        });
                    } else {
                        formData.append(key, data[key]);
                    }
                }
            });

            if (data.images && data.images.length > 0) {
                Array.from(data.images).forEach((file, index) => {
                    formData.append(`images[${index}]`, file);
                });
            }

            Object.entries(data.social_links || {}).forEach(([key, value]) => {
                formData.append(`social_links[${key}]`, value ?? "");
            });

            const response = await axios.post("/api/clasificados", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            router.push(`perfil?tab=anuncios&estado=pending`);
            toast.success("Clasificado publicado!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error al publicar");
        }
    };


    return (
        <div className="flex flex-col md:flex-row gap-8 px-8 md:px-18 py-8">
            {/* Sidebar Steps */}
            <div className="w-full md:max-w-1/3">
                <Title className="mb-8" as="h1" size="2xl" title="Publicar" align="left" />

                <ProgressIndicator steps={steps} />
            </div>

            {/* Main Form Area */}
            <div className="bg-white w-full p-5 shadow-md rounded flex flex-col flex-1 gap-2 min-h-[320px]">

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2 className="font-bold text-xl">{currentStep.title}</h2>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 space-y-4">
                            <div
                                key={currentStepIndex}
                                className="min-h-[320px] transition-opacity duration-300 ease-in-out animate-fade-in"
                            >
                                <StepComponent form={form} user={user} categories={categories} plans={plans} />
                            </div>

                            <div className="border-b border-gray-100 flex-grow" />

                            <div className="flex justify-between items-center mt-4">
                                {/* Botón Anterior */}
                                {!isFirstStep ? (
                                    <button
                                        type="button"
                                        onClick={prev}
                                        className="flex flex-row-reverse items-center cursor-pointer py-2 px-3 rounded-full hover:bg-gray-50 transition"
                                    >

                                       <span className='font-light'>Anterior</span>
                                        <LuChevronLeft className="w-6 h-6" />
                                    </button>
                                ) : (
                                    <div className="w-12 h-12" />
                                )}

                                {/* Botón Siguiente / Publicar */}
                                {!isLastStep ? (
                                    <button
                                        type="button"
                                        onClick={async () => {
                                            const valid = await form.trigger();

                                            if (valid) next();
                                        }}
                                            className="flex items-center py-2 px-3 cursor-pointer  rounded-full hover:bg-gray-50 transition"
                                    >

                                        <span className='font-light'>Siguiente</span>
                                        <LuChevronRight className="w-6 h-6" />
                                    </button>
                                ) : (
                                    <Button
                                        type="submit"
                                        label="Publicar clasificado"
                                        loading={form.formState.isSubmitting}
                                        bgColor="bg-black"
                                        hoverBg="hover:bg-gray-800"
                                        borderColor=""
                                        className="h-12"
                                    />
                                )}

                            </div>
                        </form>
                    </>

                )}
            </div>
        </div>
    );
}
