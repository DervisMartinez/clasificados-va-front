"use client";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children, initialUser, initialToken }) => {

  const router = useRouter();

  const [user, setUser] = useState(initialUser || null);
  const [loading, setLoading] = useState(false);
  const [bootstrapping, setBootstrapping] = useState(!initialUser);
  const [hydrated, setHydrated] = useState(false);
  const [forceLogout, setForceLogout] = useState(false); // ⚡ flag crítico

  // marcar que estamos en cliente
  useEffect(() => setHydrated(true), []);

  // set token inicial si existe
  useEffect(() => {
    if (initialToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${initialToken}`;
    }
  }, [initialToken]);

  // fetch inicial user
  useEffect(() => {
    if (!initialUser) {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get("/api/user");
          setUser(data.data);
        } catch {
          setUser(null);
        } finally {
          setBootstrapping(false);
        }
      };
      fetchUser();
    }
  }, [initialUser]);

  const login = async ({ setErrors, ...payload }) => {
    setLoading(true);
    setErrors && setErrors({});
    try {
      const { data } = await axios.post("/api/login", payload);
      const token = data.data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(data.data.user);

      const intended = sessionStorage.getItem("auth_intended");
      sessionStorage.removeItem("auth_intended");
      router.replace(intended || "/");
    } catch (err) {
      if (err.response?.status === 422 && setErrors) setErrors(err.response.data.errors);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ setErrors, ...payload }) => {
    setLoading(true)
    setErrors && setErrors({});

    try {

      const { data } = await axios.post("/api/register", payload);

      const token = data.data.token;

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(data.data.user);

      router.replace("/perfil");

    } catch (err) {
      if (err.response?.status === 422 && setErrors) setErrors(err.response.data.errors);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const forgotPassword = async ({ setStatus, ...payload }) => {

    setStatus && setStatus({});

    setLoading(true);

    try {

      const { data } = await axios.post("/api/email/forgot-password", payload);

      setStatus({ type: 'success', message: data.notification.body });


    } catch (error) {
      const data = error.response.data;

      let mensaje = 'Ocurrió un error';

      if (data.errors) {
        if (Array.isArray(data.errors.notification) && data.errors.notification[1]) {
          mensaje = data.errors.notification[1];
        }
        else {
          const campo = Object.keys(data.errors)[0];
          if (campo && Array.isArray(data.errors[campo])) {
            mensaje = data.errors[campo][0];
          }
        }
      } else if (data.message) {
        mensaje = data.message;
      }

      setStatus({ type: 'danger', message: mensaje });
    } finally {

      setLoading(false);

    }



  }
  const resetPassword = async ({ setErrors, ...payload }) => {

    setErrors && setErrors({});

    setLoading(true);

    try {

      const { data } = await axios.post("/api/email/reset-password", payload);
      
      router.push('/login');

      toast.success('¡Contraseña reestablecida!')


    } catch (error) {

      if (error.response?.status === 422 && setErrors) setErrors(error.response.data.errors);
      
      throw error;

    } finally {

      setLoading(false);

    }



  }

 const checkPasswordResetToken = async (email) => {
  try {
    const { data } = await axios.post("/api/check-password-token", { email });
    return data.has_token; // true si existe, false si no
  } catch (error) {
    return false;
  }
};

  const logout = async () => {
    setLoading(true);
    setForceLogout(true);

    try {
      await axios.post("/api/logout");

      delete axios.defaults.headers.common["Authorization"];

      router.replace("/login");

    } finally {
      setUser(null);

      setForceLogout(false);

      localStorage.removeItem("auth_intended");

      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user,setUser, bootstrapping, hydrated, loading, forceLogout, login, register, logout, forgotPassword, resetPassword,checkPasswordResetToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
