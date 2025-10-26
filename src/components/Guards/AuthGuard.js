"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children, middleware = "auth", redirectIfAuthenticated = "/" }) {
  const { user, bootstrapping, hydrated, forceLogout } = useAuth();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!hydrated || bootstrapping) return;

    if (forceLogout) {
      router.replace("/login");
      return;
    }

    if (middleware === "auth") {
      if (!user) {
        
        localStorage.setItem("auth_intended", window.location.pathname + window.location.search);
                
        router.replace("/login");
        
        return;
      }
      setAllowed(true);
      return;
    }

    if (middleware === "guest") {
      if (user) {
        const intended = localStorage.getItem("auth_intended");

        localStorage.removeItem("auth_intended");

        router.replace(intended || redirectIfAuthenticated);
        return;
      }
      setAllowed(true);
      return;
    }

    setAllowed(true);
  }, [user, bootstrapping, hydrated, middleware, router, redirectIfAuthenticated, forceLogout]);

  if (!allowed || !hydrated || bootstrapping || forceLogout) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center animate-slide-up">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-800 font-medium">Cargando...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
