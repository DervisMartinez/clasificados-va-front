"use client"

import { use } from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { useAuth } from "@/context/AuthContext"
import PasswordInput from "@/components/Inputs/Auth/Password"
import Button from "@/components/Button"
import AuthLogo from "@/components/Base/AuthLogo"

export default function ResetPasswordPage({ params }) {
    
    const { token } = use(params)
    const searchParams = useSearchParams()
    const email = searchParams.get("email") ?? ""
    
    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [valid, setValid] = useState(null)

    const { resetPassword, loading,checkPasswordResetToken } = useAuth()

    useEffect(() => {
        
        if (!token || !email) {
            setValid(false)
            return
        }

        const validate = async () => {
            const exists = await checkPasswordResetToken(email);
            setValid(exists);
        };

        validate();
    }, [token, email,checkPasswordResetToken]);

    const submitForm = (event) => {

        event.preventDefault()

        resetPassword({
            email,
            token,
            password,
            password_confirmation: passwordConfirmation,
            setErrors
        })

    }

    return (
        <div className="w-full bg-white">
            <AuthLogo />

            <div className="pb-10 px-5">
                <h1 className="text-2xl font-semibold text-red-600 mb-2">
                    Reestablecer contraseña
                </h1>
                <span className="border-2 border-red-600 w-10 mb-2 inline-block"></span>
                <p className="text-gray-500 text-sm mb-5">
                    Ingresa tu nueva contraseña
                </p>

                <form onSubmit={submitForm} className="flex flex-col md:px-4 gap-4">
                    {valid === null ? (
                        // Loader pequeño mientras valida
                        <Button label="Validando..." loading={true} type="button" />
                    ) : valid ? (
                        <>
                            <PasswordInput
                                id="password"
                                value={password}
                                errors={errors.password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                autoComplete="current-password"
                            />
                            <PasswordInput
                                id="password_confirmation"
                                value={passwordConfirmation}
                                errors={errors.password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                placeholder="Confirma tu contraseña"
                                autoComplete="current-password"
                            />

                            <Button label="Enviar" type="submit" loading={loading} />
                        </>
                    ) : (
                        // Token inválido → mostrar mensaje + botón
                        <div className="text-center">
                            <p className="text-red-600 mb-4">
                                Token inválido o expirado. Solicita un nuevo enlace.
                            </p>
                            <Button
                                label="Reestablecer contraseña"
                                href="/recuperar-contrasena"
                            />
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
