import useSWR from "swr";
import { useAuth } from "@/context/AuthContext";
import axios from "@/lib/axios";

export const useNotifications = () => {
  const { user } = useAuth();

  // fetcher con axios
  const fetcher = async () => {
    const { data } = await axios.get("/api/notifications");
    // ⚡ Aseguramos que siempre devolvemos un array
    return Array.isArray(data.data) ? data.data : [];
  };

  // SWR: si no hay usuario, no hace fetch
  const { data, error, mutate } = useSWR(user ? "/api/notifications" : null, fetcher, {
    refreshInterval: 90000, // polling cada 90s
  });

  // Marcar una notificación como leída
  const markAsRead = async (id) => {
    if (!user) return;
    await axios.post(`/api/notifications/${id}/read`);
    mutate(
      data.map((n) => (n.id === id ? { ...n, read_at: new Date() } : n)),
      false
    );
  };

  // Marcar todas como leídas
  const markAllAsRead = async () => {
    if (!user) return;
    await axios.post("/api/notifications/read-all");
    mutate(data.map((n) => ({ ...n, read_at: new Date() })), false);
  };

  return { notifications: data || [], error, markAsRead, markAllAsRead };
};
