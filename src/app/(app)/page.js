
import HeroSection from "./sections/HeroSection";
import PlanSection from "./sections/PlanSection";
import CtaSection from "./sections/CtaSection";
import FeaturedAdsSection from "./sections/FeaturedAdsSection";
import TraitsSection from "./sections/TraitsSection";
import CategoriesSection from "./sections/CategoriesSection";

import { Suspense } from "react";

import { getPlans } from "@/lib/api/utils";


export default async function Home() {

  const plans = await getPlans();

  return (
     <>
      <HeroSection />

      <TraitsSection />

      <CategoriesSection />

      <FeaturedAdsSection />

      <PlanSection plans={plans} />

      <CtaSection />
    </>
  );
}