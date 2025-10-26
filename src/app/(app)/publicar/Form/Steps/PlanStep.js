
export default function PlanStep({ form, plans }) {
    const { register, watch, formState: { errors } } = form;

    const selectedPlan = watch("plan_id"); // ver qué plan está seleccionado

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
            {plans.map((plan) => {

                const isSelected = selectedPlan == plan.id;

                return (
                    <label
                        key={`${plan.id}-${plan.name}`}
                        htmlFor={`${plan.id}-${plan.name}`}
                        className={`flex flex-col h-full border rounded-md p-5 shadow-sm transition cursor-pointer text-sm ${isSelected
                            ? "border-green-500 shadow-md bg-green-50"
                            : "border-gray-200 bg-white hover:shadow-md"
                            }`}
                    >
                        <input
                            type="radio"
                            id={`${plan.id}-${plan.name}`}
                            value={plan.id}
                            className="hidden"
                            {...register("plan_id")}
                        />
                        <h2
                            className={`text-xl font-bold text-center mb-4 ${isSelected ? "text-green-600" : "text-gray-800"
                                }`}
                        >
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
                                <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                    ✔
                                </span>
                                {plan.limit_words ? `Límite de palabras: ${plan.limit_words}` : "Sin límite de palabras"}

                            </li>

                            <li className="flex items-center gap-2">
                                <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                    ✔
                                </span>
                                Duración: {plan.duration} días
                            </li>

                            <li className="flex items-center gap-2">
                                <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                    ✔
                                </span>
                                Requiere validación antes de publicarse
                            </li>

                            {plan.price > 0 && (
                                <>
                                    <li className="flex items-center gap-2">
                                        <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                            ✔
                                        </span>
                                        Precio: {plan.price} $
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className={`${isSelected ? "text-green-600" : "text-green-500"}`}>
                                            ✔
                                        </span>
                                        Luego de la validación se te notificará para que realices el pago
                                    </li>
                                </>
                            )}


                        </ul>
                        <div
                            className={`mt-6 w-full py-2 rounded-xl text-center font-semibold shadow transition ${isSelected
                                ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                                : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {isSelected ? "Plan seleccionado" : "Elegir plan"}
                        </div>
                    </label>
                );
            })}

            {errors.plan_id && (
                <div className="col-span-full">
                    <p className="text-red-500 text-sm font-medium mt-2 text-right">
                        {errors.plan_id.message}
                    </p>
                </div>
            )}
        </div>
    );
}
