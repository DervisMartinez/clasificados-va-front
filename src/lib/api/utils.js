import axios from '@/lib/axios';
import { cache } from 'react'



export const getCategories = async () => {
  try {
    const { data } = await axios.get('/api/categories');
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
export const getAuthor = cache(async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}/clasificados`);
    return data.data;
  } catch (error) {
    console.error("Error fetching author:", error);
    return [];
  }
})

export const getPlans = async () => {
  try {
    const { data } = await axios.get('/api/plans/active'); // ajusta la ruta si es necesario
    return data.data; // depende de cómo tu backend devuelva las categorías
  } catch (error) {
    console.error('Error fetching plans:', error);
    return [];
  }
};



export const getSearchResults = async (params) => {

  try {
    const { data } = await axios.get('api/clasificados', { params })

    return {
      meta: {
        current_page: data.data.current_page,
        last_page: data.data.last_page,
        total_results: data.data.total,
        links: data.data.links,
      },
      results: data.data.data,
    };

  } catch (error) {
    console.error('Error fetching results', error)
    return [];
  }
}



