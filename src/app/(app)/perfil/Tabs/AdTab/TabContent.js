import { useState } from "react";
import { useQueryTrigger } from "@/hooks/useQueryTrigger";

import ActionDropdown from "./ActionDropdown";
import AppealDialog from "./AppealDialog";
import FallbackDialog from "./FallbackDialog";

export default function TabContent({ estado, anuncios,mutateData }) {

  const [clasificado, setClasificado] = useState();

  const [openAppeal, setOpenAppeal] = useState(false);

  const [openFallback,setOpenFallback] = useState(false);

  useQueryTrigger({
    key: "apelar",
    onMatch: (id) => {
      const clasificado = anuncios.find((item) => item.id === Number(id));

      if (clasificado) {

        setClasificado(clasificado);
        
        if(!clasificado.appeal)
        {
          setOpenAppeal(true);
        }else{
          setOpenFallback(true);
        }
      }

    },
    cleanKeys: ["apelar"],
  });


  if (!anuncios || anuncios.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 rounded-lg border-1 border-gray-400 border-dashed">
        <p className="text-gray-500">
          No hay anuncios en <span className="font-semibold">{estado.title}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md  rounded-lg ">
      <table className="min-w-full bg-white  overflow-hidden">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">ID</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Título</th>
            {/* <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Descripción</th> */}
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Categorías</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Plan</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Duración</th>
            <th className="px-4 py-3 text-left text-gray-600 whitespace-nowrap font-medium uppercase text-sm">Fecha inicio</th>
            <th className="px-4 py-3 text-left text-gray-600 whitespace-nowrap font-medium uppercase text-sm">Fecha fin</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium uppercase text-sm">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {anuncios.map((a) => (

            <tr key={a.id} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-4 py-2 text-gray-700">{a.id}</td>
              <td className="px-4 py-2 text-gray-800 font-semibold whitespace-nowrap">{a.title}</td>
              {/*  <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{a.description}</td> */}
              <td className="px-4 py-2">
                <div className="flex gap-1">
                  {a.categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-2 text-gray-700">{a.plan.name}</td>

              <td className="px-4 py-2 text-gray-700">{a.duration + ' días'}</td>

              <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{a.date_start ? new Date(a.date_start).toISOString().slice(0, 10) : 'Pendiente'}</td>

              <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{a.date_end ? new Date(a.date_end).toISOString().slice(0, 10) : 'Pendiente'}</td>

              <td className="px-4 py-2 text-gray-600 flex justify-center">
                <ActionDropdown
                  actions={[
                    {
                      label: "Ver anuncio",
                      href: `/clasificado/${a.slug}`,
                      target: "_blank",
                    },
                    ...(a.state === "rejected"
                      ? [
                        {
                          label: "Apelar",
                          variant: "danger",
                          onClick: () => {
                            setClasificado(a);   // guardamos el clasificado actual
                            if(!a.appeal){
                              setOpenAppeal(true);       // abrimos modal
                            }else{
                              setOpenFallback(true);
                            }
                          }
                        },
                      ]
                      : []),
                  ]}
                />

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <FallbackDialog clasificado={clasificado} setClasificado={setClasificado} open={openFallback} setOpen={setOpenFallback}  />
      
      <AppealDialog clasificado={clasificado} setClasificado={setClasificado} open={openAppeal} setOpen={setOpenAppeal} mutateData={mutateData} />


    </div>
  );
}