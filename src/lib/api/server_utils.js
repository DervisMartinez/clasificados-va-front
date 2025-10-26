import { cache } from 'react';
import { cookies } from 'next/headers';
import axios from "@/lib/axios";


// Función para obtener usuario en SSR usando la cookie auth_token
export async function getUserFromServer() {
  let initialData = { user: null, token: null };

  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;


  if (!token) return null;

  try {
    // Configuración de Axios
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      withCredentials: true, // Si necesitas enviar cookies
      // Para ignorar SSL en desarrollo (opcional)
      httpsAgent: new (await import("https")).Agent({ rejectUnauthorized: false }),
    };


    // Hacer request a Laravel
    const response = await axios.get(`/api/user`, config);

    if (response.status === 200) {
      initialData = { user: response.data, token: token };
    }

    return initialData;
  } catch (error) {

    if (error.response) {
      // Error devuelto por Laravel
      console.log("Error en respuesta:", error.response.data);
    } else {
      // Error de red, SSL, etc.
      console.error("Error fetch /api/user:", error.message);
    }
    return { user: null, token: null };
  }
}

export const getClasificado = cache(async (slug) => {

    const cookieStore = await cookies();

    const token = cookieStore.get("auth_token")?.value;

    try {
        const { data } = await axios.get(`/api/clasificado/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }, credentials: 'include'
        });
        return data;

    } catch (error) {
      
        if (error.response?.status === 404) {

            return null; // devolvemos null
        }
    }
});
export const getRelatedAds = async (slug) => {

    try {
        const { data } = await axios.get(`/api/clasificados/${slug}/relacionados-random`);

        return data.data;

    } catch (error) {      
       return []
    }
};
