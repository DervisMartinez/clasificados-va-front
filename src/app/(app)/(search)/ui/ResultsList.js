// components/ResultsList.js
import { getCategories, getSearchResults } from "@/lib/api/utils";
import CategoriesBox from "./CategoriesBox";
import AdComponent from "./AdComponent";

export default async function ResultsList({ queryParams }) {  
  
  const categories = await getCategories();

  const { results, meta } = await getSearchResults(queryParams);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        
        <div className="text-gray-700 text-sm sm:text-base">
          <h2 className="font-semibold">Resultados para {" "}{queryParams?.title || "todos"}</h2>
        </div>
        


        <div className="mt-2 sm:mt-0 text-gray-500 text-sm sm:text-base">
          Mostrando <span className="font-medium">{results.length}</span>{" "}
          {results.length === 1 ? "resultado" : "resultados"} de {meta?.total_results}
        </div>

      </div>

      <CategoriesBox slug={queryParams?.category} subslug={queryParams?.subcategory} categories={categories} />

      <ul className="space-y-8">
        {results.length > 0 ? (
          results.map((item) => (
            <AdComponent key={item.id} item={item} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No se encontraron resultados</p>
        )}
      </ul>
    </>
  );
}