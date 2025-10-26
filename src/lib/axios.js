import Axios from 'axios';
import https from 'https';

// Crear un agente HTTPS seguro
const httpsAgent = new https.Agent({
  keepAlive: false,          // Fuerza nuevo handshake en cada petición
  rejectUnauthorized: true,  // Verifica certificados (true en producción)
  minVersion: 'TLSv1.2',     // TLS mínimo 1.2
});

// Crear instancia de Axios con configuración global
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API, // tu backend
  withCredentials: true,                        // cookies / CSRF
  httpsAgent,                                   // aplica el agente a todas las peticiones
});

export const getCsrf = async () => {
  await axios.get('/sanctum/csrf-cookie'); 
};

export default axios
