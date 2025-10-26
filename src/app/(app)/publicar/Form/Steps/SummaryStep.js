
function findCategoryName(categories, id) {
  for (const cat of categories) {
    if (cat.id === id) return cat.name;
    if (cat.children && cat.children.length) {
      const child = findCategoryName(cat.children, id);
      if (child) return child;
    }
  }
  return null;
}

export default function SummaryStep({ form, categories, plans }) {
  const { getValues } = form;

  const values = getValues();

  const selectedPlan = plans.find(plan => plan.id == values.plan_id);

  const sections = [
    {
      title: "Datos del anunciante",
      items: [
        { label: "Teléfono", value: values.phone },
        { label: "Facebook", value: values.social_links?.facebook },
        { label: "Instagram", value: values.social_links?.instagram },
        { label: "TikTok", value: values.social_links?.tiktok },
      ],
    },
    {
      title: "Plan seleccionado",
      items: [
        { label: "Plan", value: selectedPlan.name },
        { label: "Precio", value: selectedPlan.price + ' $' }],
    },
    {
      title: "Detalles del anuncio",
      items: [
        { label: "Ubicación", value: values.ubication },
        { label: "Título", value: values.title },
        {
          label: "Categorías",
          value: Array.isArray(values.categories) && values.categories.length
            ? values.categories
              .map(catId => findCategoryName(categories, catId))
              .filter(Boolean)
              .join(", ")
            : "No seleccionadas",
        },
        { label: "Descripción", value: values.description },
        { label: "Duración", value: selectedPlan.duration + ' días' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-md font-semibold text-gray-700 border-b pb-1">
            {section.title}
          </h3>
          <ul className="divide-y divide-gray-100">
            {section.items.map(({ label, value }) => (
              <li key={label} className="py-2 flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-900 font-medium text-right max-w-[60%] break-words">
                  {value || "—"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="pt-6 border-t">
        <p className="text-sm text-gray-500">
          Verifica que toda la información esté correcta antes de continuar.
        </p>
      </div>
    </div>
  );
}