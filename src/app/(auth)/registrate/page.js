
"use client"
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

import AuthLogo from "@/components/Base/AuthLogo";
import AuthInput from "@/components/Inputs/Auth/Input";
import AuthSelect from "@/components/Inputs/Auth/Select";
import PasswordInput from "@/components/Inputs/Auth/Password";
import Button from "@/components/Button";
import Link from "next/link";
import Checkbox from "@/components/Inputs/Checkbox";


export default function RegisterPage() {


    /* Form schema */
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [document, setDocument] = useState('')
    const [documentType, setDocumentType] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState({})
    const [acceptTerms,setAcceptTerms] = useState(false)

    const { register, loading } = useAuth()

    const submitForm = event => {
        event.preventDefault()

        

        register({
            name,
            last_name: lastName,
            email,
            gender,
            document,
            document_type: documentType,
            password,
            password_confirmation: passwordConfirmation,
            accept_terms: acceptTerms,
            setErrors,
        })
    }

    return (
        <>
            <div className="hidden md:flex md:w-2/5 bg-red-600 md:rounded-l-md flex-col justify-center px-8">
                <h2 className="text-3xl text-white font-bold mb-2">¡Bienvenido!</h2>
                <span className="border-2 border-white w-10 mb-2 inline-block mx-auto"></span>
                <p className="text-white text-sm mb-5">
                   Regístrate para comenzar a explorar y publicar tus anuncios. ¿Ya eres miembro?
                </p>

                <Button label="Inicia sesión" borderColor="white" href="/login" />
            </div>

            <div className=" md:w-3/5 w-full bg-white">
                <AuthLogo />

                <div className="py-10 px-5">
                    <h1 className="text-2xl font-semibold text-red-600 mb-2">Registrate</h1>
                    <span className="border-2 border-red-600 w-10 mb-2 inline-block"></span>
                    <div className="max-w-sm mx-auto">
                    <p className="text-gray-500 text-sm">Asegúrate de leer los <Link className="underline" target="_blank" href="/terminos-y-condiciones">términos y condiciones</Link> y <Link className="underline" target="_blank" href="/politicas-de-publicacion">política de publicación</Link></p>
                    <p className="text-gray-500 text-sm mb-5">Completa tus datos</p>
                    </div>

                    <form onSubmit={submitForm} className="flex flex-col md:px-16 gap-4">
                        <div className="flex gap-2">
                            <div className="w-16">
                                <AuthSelect
                                    id="document_type"
                                    label="Tipo"
                                    value={documentType}
                                    errors={errors.document_Type}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                    placeholder="-"
                                    options={[
                                        { value: "V", label: "V" },
                                        { value: "E", label: "E" },
                                        { value: "J", label: "J" },
                                    ]}
                                />
                            </div>

                            <div className="flex-1">
                                <AuthInput
                                    id="cedula"
                                    value={document}
                                    errors={errors.document}
                                    onChange={(e) => setDocument(e.target.value)}
                                    type="text"
                                    placeholder="Ingresa tu cedula"
                                    numericOnly
                                    label="Cedula"
                                />
                            </div>
                        </div>

                        <div className="gap-4 flex flex-col md:flex-row">


                            <AuthInput
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder={(documentType == 'V' || documentType == 'E') ? 'Nombre' : 'Razón social'}
                                label={(documentType == 'V' || documentType == 'E') ? 'Nombre' : 'Razón social'}
                                errors={errors.name}
                            />
                            {(documentType == 'V' || documentType == 'E') &&
                                <AuthInput
                                    id="last_name"
                                    value={lastName}
                                    errors={errors.last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    placeholder="Apellido"
                                    label="Nombre"

                                />
                            }
                        </div>

                        {(documentType == 'V' || documentType == 'E') &&

                            <div className="gap-4 flex flex-col md:flex-row">

                                <AuthSelect
                                    id="document_type"
                                    label="Tipo"
                                    placeholder="Genero"
                                    errors={errors.gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    options={[
                                        { value: "M", label: "Masculino" },
                                        { value: "F", label: "Femenino" },
                                        { value: "O", label: "Otro" },
                                    ]}
                                />

                            </div>
                        }


                        {/* Email */}
                        <AuthInput
                            id="email"
                            value={email}
                            errors={errors.email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            icon="LuMail"
                            label="Email"
                        />


                        {/* Password */}
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
                            errors={errors.password_Confirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            placeholder="Confirma tu contraseña"
                            autoComplete="current-password"
                        />
                        
                        <Checkbox id="accept_terms" errors={errors.accept_terms} value={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} 
                        label="Acepto los términos y condiciones"/>

                        {/* Submit */}
                        <Button loading={loading} label="Registrate" type="submit" />
                    </form>

                    <div className="md:hidden mt-2">
                        <Link className="text-sm hover:underline transition ease-in-out text-gray-500" href='/login'>¿Ya eres miembro? Inicia sesión</Link>
                    </div>


                </div>
            </div>
        </>

    );
}