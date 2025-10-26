"use client";

import { useRouter } from "next/navigation";

export default function CategoriesBox({ slug, subslug, categories }) {
  const router = useRouter();

  // categoria padre
  const parent = categories.find(cat => cat.slug === slug);

  if (!parent) return null;

  // hijos
  const children = parent.children || [];

  const handleSelect = (childSlug) => {
    if (childSlug === subslug) {
      // si hago click sobre el mismo, lo quito
      router.push(`/categoria/${slug}`);
    } else {
      router.push(`/categoria/${slug}/${childSlug}`);
    }
  };

  return (
    <div className="mb-3">
      <h3 className="font-semibold text-gray-800 mb-2">
        {parent.name}
      </h3>

      <div className="flex flex-wrap gap-2">
        {children.map(child => (
          <span
            key={child.id}
            onClick={() => handleSelect(child.slug)}
            className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium 
              ${child.slug === subslug 
                ? "bg-red-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {child.name}
          </span>
        ))}
      </div>
    </div>
  );
}
