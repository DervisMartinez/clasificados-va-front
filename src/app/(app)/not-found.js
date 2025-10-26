import Title from "@/components/Base/Title";

export default function NotFound() {
  return (

    <div style={{height: 'calc(100vh - 20rem)'}} className="flex flex-col gap-5 items-center justify-center text-center px-4 my-10">

      <Title as="h1" title="Página no encontrada"  />

      <p className="text-gray-600 mb-6">No pudimos encontrar lo que buscas.</p>
    </div>

  );
}