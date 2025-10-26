
"use client"


import Link from "next/link";
import AuthLogo from "@/components/Base/AuthLogo";
import AuthInput from "@/components/Inputs/Auth/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Alert from "@/components/Base/Alerts";

export default function ForgotPasswordPage() {


    const [status, setStatus] = useState({ type: '', message: '' })


    const { forgotPassword, loading } = useAuth()

    const submitForm = event => {
        event.preventDefault()

        const formData = Object.fromEntries(new FormData(event.currentTarget))

        forgotPassword({
            email: formData.email,
            setStatus
        })
    }

    return (
        <>

            {/* Right Panel */}
            <div className="w-full bg-white">
                <AuthLogo />

                {status.message && (
                    <div className="px-5 my-5">
                        <Alert
                            type={status.type}
                            message={status.message}
                            onClose={() => setStatus({ type: '', message: '' })}
                        />
                    </div>
                )}


                <div className="pb-10 px-5">
                    <h1 className="text-2xl font-semibold text-red-600 mb-2">Recuperar acceso</h1>
                    <span className="border-2 border-red-600 w-10 mb-2 inline-block"></span>
                    <p className="text-gray-500 text-sm mb-5">¿Olvidaste tu contraseña?</p>
                    <p className="text-gray-500 text-sm mb-5">Ingresa tu email para recuperar acceso a tu cuenta</p>

                    <form onSubmit={submitForm} className="flex flex-col md:px-4 gap-4">
                        {/* Email */}
                        <AuthInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            icon="LuMail"
                            label="Email"
                        />

                        {/* Password */}

                        <Button label="Enviar" type="submit" loading={loading} />
                    </form>

                </div>
            </div>
        </>

    );
}