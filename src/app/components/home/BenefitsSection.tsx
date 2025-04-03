import React from "react";
import BenefitCard from "@/app/components/home/BenefitCard";
import { Landmark, ShieldCheck, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const investmentBenefits = [
    {
      title: "נכס מוחשי בטוח",
      description: "קרקע פרטית רשומה בטאבו",
      icon: ShieldCheck,
      color: "blue",
      link: "/",
    },
    {
      title: "פוטנציאל צמיחה גבוה",
      description: "תשואות משמעותיות עם אישור שינויי ייעוד",
      icon: TrendingUp,
      color: "green",
      link: "/",
    },
    {
      title: "ליווי מקצועי מלא",
      description: "הסכם שותפות וליווי בתהליכי תכנון",
      icon: Landmark,
      color: "purple",
      link: "/",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-green-200 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            למה להשקיע איתנו?
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            יתרונות ההשקעה
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            השקעה בקרקעות מציעה הזדמנות ייחודית לתשואה משמעותית, תוך שמירה על
            בטחון ההשקעה והפוטנציאל העתידי
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentBenefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
