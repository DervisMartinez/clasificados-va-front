import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export function useQueryTrigger({ key, onMatch, cleanKeys = [key] }) {
  const params = useSearchParams();
  const router = useRouter();
  const hasRun = useRef(false);

  useEffect(() => {
    const value = params.get(key);
    if (!value || hasRun.current) return;

    hasRun.current = true;

    // Ejecutar acción
    if (typeof onMatch === "function") {
      onMatch(value);
    }

    // Limpiar los query params
    const currentParams = Object.fromEntries(params.entries());
    cleanKeys.forEach((k) => delete currentParams[k]);

    const queryString = new URLSearchParams(currentParams).toString();
    router.replace(`?${queryString}`, { scroll: false });
  }, [params, key, onMatch, cleanKeys, router]);
}