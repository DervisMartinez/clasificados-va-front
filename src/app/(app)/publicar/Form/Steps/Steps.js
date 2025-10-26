
import AdvertiserStep from "./AdvertiserStep";
import PlanStep from "./PlanStep";
import AdInfoStep from "./AdInfoStep";
import SummaryStep from "./SummaryStep";

import { advertiserSchema,adInfoSchema,planSchema } from "../Schemas/schemas";

export const formSteps = [
    {
        title: "Datos del anunciante",
        description: "Proporciona tu nombre, contacto y detalles clave para contactarte.",
        component: AdvertiserStep,
        schema: advertiserSchema,
    },
    {
        title: "Selección de plan",
        description: "Elige el tipo de publicación que mejor se adapta a tu anuncio.",
        component: PlanStep,
        schema: planSchema,
    },
    {
        title: "Detalles del anuncio",
        description: "Describe lo que ofreces, elige una categoría y añade un título atractivo.",
        component: AdInfoStep,
        schema: adInfoSchema,
    },
    {
        title: "Resumen",
        description: "Verifica que toda la información esté correcta antes de publicar tu anuncio.",
        component: SummaryStep,
    },
]; 