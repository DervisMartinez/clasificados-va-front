"use client";
import { useTab } from "@/hooks/useTab";
import useSWR from "swr";
import axios from "@/lib/axios";
import TabContent from "./TabContent";

import { useSearchParams, useRouter } from "next/navigation";

const estados = [
  { title: "Pendientes", key: "pending" },
  { title: "Aprobados", key: "approved" },
  { title: "Rechazados", key: "rejected" },
  { title: "Finalizados", key: "canceled" },
];

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function AdTab() {

  const router = useRouter();

  const params = useSearchParams();

  const queryObject = Object.fromEntries(params.entries());

  const { activeTab, setActiveTabIndex, tabs } = useTab(estados, queryObject.estado);

  const { data: anunciosData = {}, error, isLoading, mutate } = useSWR(
    "/api/user/clasificados",
    fetcher,
    {
      revalidateOnFocus: true, // no revalida al volver a la ventana
      //dedupingInterval: 300000, // 5 minutos en ms
    }
  );

  const handleEstadoChange = (index) => {
    const estadoKey = estados[index].key;

    const currentParams = Object.fromEntries(params.entries());

    const updatedParams = {
      ...currentParams,
      estado: estadoKey,
    };

    const queryString = new URLSearchParams(updatedParams).toString();

    router.push(`?${queryString}`, { scroll: false });
    setActiveTabIndex(index);
  };



  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-6">Mis anuncios</h1>

      {/* Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {estados.map((estado) => {
          const count = (anunciosData[estado.key] || []).length;
          return (
            <div
              key={estado.key}
              className="p-4 bg-white rounded-md shadow border border-gray-400"
            >
              <p className="text-xl font-semibold">{count}</p>
              <p className="text-sm text-gray-500">{estado.title}</p>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto mb-6">
        <div className="flex space-x-4 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={tab.index}
              onClick={() => handleEstadoChange(index)}
              className={`relative pb-2 font-medium transition flex-shrink-0 ${activeTab.index === index
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500"
                }`}
            >
              {tab.title}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-transform duration-300 origin-left ${activeTab.index === index
                  ? "bg-gray-900 scale-x-100"
                  : "bg-transparent scale-x-0"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Contenido del tab */}
      {isLoading ? (
        <div className="flex items-center justify-center h-48">
          <p className="text-gray-500">Cargando anuncios...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-48">
          <p className="text-red-500">Error cargando anuncios</p>
        </div>
      ) : (
        <TabContent
          estado={activeTab}
          anuncios={anunciosData[activeTab.key] || []}
          mutateData={mutate}
        />
      )}
    </div>
  );
}
