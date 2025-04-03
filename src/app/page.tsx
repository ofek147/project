"use client";

import { Inter } from "next/font/google";
import HeroSection from "@/app/components/home/HeroSection";
import StatsSection from "@/app/components/home/StatsSection";
import BenefitsSection from "@/app/components/home/BenefitsSection";
import UniquePartnershipSection from "@/app/components/home/UniquePartnershipSection";
import ContactUs from "./components/home/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div>
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <UniquePartnershipSection />
        <ContactUs />
      </div>
    </main>
  );
}
