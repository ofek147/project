"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-172 flex items-center justify-center bg-cover bg-center bg-blend-overlay bg-[url(/images/home.jpg),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))] py-8 md:py-0">
      <div className="w-full max-w-7xl mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            השקעה בטוחה בקרקעות
            <br />
            עם פוטנציאל אדיר
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-6">
            קרקעות להשקעה באזורים אסטרטגיים עם פוטנציאל שינוי ייעוד למגורים
            ומסחר. הזדמנות להשקעה בטוחה עם אפשרות לתשואה משמעותית.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mx-5">
            <Link href="/projects" className="w-full md:w-auto">
              <button className="bg-green-800 hover:bg-green-900 rounded-md cursor-pointer h-12 px-8 text-white text-lg flex items-center gap-2">
                גלה את הפרויקטים שלנו
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/information" className="w-full md:w-auto">
              <button className="text-white hover:bg-white hover:text-green-800 rounded-md cursor-pointer h-12 px-8 text-lg border-2 border-white flex items-center">
                מדריך להשקעה בקרקעות
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
