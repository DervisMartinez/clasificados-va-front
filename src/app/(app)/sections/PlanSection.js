import Title from "@/components/Base/Title";

export default function PlanSection({ plans }) {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-8">

                <Title as="h2" title="Nuestros planes" align="center" />

                <div className="text-center text-xl font-light">
                    <p className="max-w-2xl mx-auto">
                        Tenemos planes que se adaptan a tus necesidades
                    </p>
                    <p className="font-bold max-w-2xl mx-auto">
                        ¡Escoge tu preferido!
                    </p>

                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-4 max-w-5xl mx-auto">
                    {plans.map((plan) => {

                        return (
                            <label
                                key={`${plan.id}-${plan.name}`}
                                htmlFor={`${plan.id}-${plan.name}`}
                                className="max-w-md flex flex-col h-full rounded-2xl p-5 shadow-xl transition cursor-pointer text-sm  bg-white hover:shadow-md"
                            >

                                <h2 className={`text-xl font-bold text-center mb-4 text-gray-800"`}>
                                    {plan.name}
                                </h2>
                                <ul className="space-y-2 text-gray-600">
                                    {/*   {plan.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                        ✔
                                    </span>
                                    {f}
                                </li>
                            ))} */}


                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">
                                            ✔
                                        </span>
                                        {plan.limit_words ? `Límite de palabras: ${plan.limit_words}` : "Sin límite de palabras"}

                                    </li>

                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">
                                            ✔
                                        </span>
                                        Duración: {plan.duration} días
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">
                                            ✔
                                        </span>
                                        Requiere validación antes de publicarse
                                    </li>

                                    {plan.price > 0 && (
                                        <>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-500">
                                                    ✔
                                                </span>
                                                Precio: {plan.price} $
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-500">
                                                    ✔
                                                </span>
                                                Luego de la validación se te notificará para que realices el pago
                                            </li>
                                        </>
                                    )}

                                </ul>

                            </label>
                        );
                    })}

                </div>

            </div>
        </section>
    )
}