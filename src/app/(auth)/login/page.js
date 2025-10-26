
"use client"


import Link from "next/link";
import AuthLogo from "@/components/Base/AuthLogo";
import AuthInput from "@/components/Inputs/Auth/Input";
import Checkbox from "@/components/Inputs/Checkbox";
import PasswordInput from "@/components/Inputs/Auth/Password";
import Button from "@/components/Button";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {


    const [errors, setErrors] = useState([])

    const { login, loading } = useAuth()

    const submitForm = event => {
        event.preventDefault()

        const formData = Object.fromEntries(new FormData(event.currentTarget))
        
        login({
            email: formData.email,
            password: formData.password,
            remember: !!formData.remember,
            setErrors
        })
    }

    return (
        <>
            {/* Left Panel */}
            <div className="hidden md:flex md:w-2/5  bg-red-600 flex-col justify-center px-8  md:rounded-l-md">
                <h2 className="text-3xl text-white font-bold mb-2">Bienvenido</h2>
                <span className="border-2 border-white w-10 mb-2 inline-block mx-auto"></span>
                <p className="text-white text-sm mb-5">
                    Inicia sesión para acceder a tu perfil y comenzar a publicar tus anuncios. ¿No te has unido?
                </p>

                <Button label="Regístrate aquí" borderColor="white" href="/registrate" />

            </div>


            {/* Right Panel */}
            <div className="md:w-3/5 w-full bg-white">
                <AuthLogo />

                <div className="py-10 px-5">
                    <h1 className="text-2xl font-semibold text-red-600 mb-2">Iniciar sesión</h1>
                    <span className="border-2 border-red-600 w-10 mb-2 inline-block"></span>
                    <p className="text-gray-500 text-sm mb-5">Ingresa tu email y contraseña</p>

                    <form onSubmit={submitForm} className="flex flex-col md:px-16 gap-4">
                        {/* Email */}
                        <AuthInput
                            id="email"
                            name="email"
                            errors={errors.email}
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            icon="LuMail"
                            label="Email"
                        />

                        {/* Password */}
                        <PasswordInput
                            id="password"
                            name="password"
                            errors={errors.password}
                            placeholder="Contraseña"
                            autoComplete="current-password"
                        />

                        <div className="flex flex-col items-end gap-2">
                            <Checkbox id="remember" name="remember" label="Recuérdame" />

                            <Link
                                className="text-sm text-gray-500 hover:underline hover:text-red-600 transition ease-in"
                                href="/recuperar-contrasena"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                          {/* Submit */}
                        <Button label="Iniciar sesión" type="submit" loading={loading} />
                    </form>
                    <div className="md:hidden mt-2">
                        <Link className="text-sm hover:underline transition ease-in-out text-gray-500"  href='/registrate'>¿No tienes cuenta? Registrate aquí</Link>
                    </div>
                </div>
            </div>
        </>

    );
}