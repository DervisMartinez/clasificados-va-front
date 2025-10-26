import Drawer from "../Drawer/Drawer";
import { useNotifications } from "@/hooks/useNotifications";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

export default function NotificationDrawer({ isOpen, onClose }) {
  
  const { user } = useAuth();
  const router = useRouter();
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  const safeNotifications = Array.isArray(notifications) ? notifications : [];

  const unreadNotifications = safeNotifications.filter((n) => !n.read_at);
  const readNotifications = safeNotifications.filter((n) => n.read_at);

  const unreadCount = unreadNotifications.length;

  const renderNotification = (n) => {
    const content = (
      <div className="p-3 border rounded hover:bg-gray-50">
        <p className="text-sm font-semibold text-gray-800">{n.data.title}</p>
        <p className="text-xs text-gray-600">{n.data.message}</p>
        <span className="text-xs text-gray-500">
          {new Date(n.created_at).toLocaleString()}
        </span>
      </div>
    );

    if (n.data.action) {
      return (
        <Link
          key={n.id}
          href={n.data.action}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => markAsRead(n.id)}
          className="block cursor-pointer"
        >
          {content}
        </Link>
      );
    }

    return (
      <div key={n.id} onClick={() => markAsRead(n.id)}>
        {content}
      </div>
    );
  };

  return (
    <Drawer
      title={
        <div className="flex items-center justify-between">
          <span>Notificaciones</span>
          {unreadCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
      }
      isOpen={isOpen}
      onClose={onClose}
      side="right"
      width="w-80"
    >
      {!user ? (
        <div className="p-6 text-center">
          <p className="mb-4 text-gray-700">
            Inicia sesión para ver tus notificaciones
          </p>
          <Button href="/login" label="Iniciar sesión"/>
          
        </div>
      ) : safeNotifications.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No tienes notificaciones
        </div>
      ) : (
        <>
          {/* Sección de no leídas */}
          {unreadNotifications.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-gray-800">No leídas</h2>
                <button
                  className="text-xs text-blue-500 hover:underline"
                  onClick={markAllAsRead}
                >
                  Marcar todas como leídas
                </button>
              </div>
              <div className="space-y-3">
                {unreadNotifications.map(renderNotification)}
              </div>
            </div>
          )}

          {/* Sección de leídas */}
          {readNotifications.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold text-gray-800 mb-2">Leídas</h2>
              <div className="space-y-3">
                {readNotifications.map(renderNotification)}
              </div>
            </div>
          )}
        </>
      )}
    </Drawer>
  );
}
