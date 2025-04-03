import React from "react";
import { Landmark, CheckCircle2 } from "lucide-react";

const UniquePartnershipSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-green-100 rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] p-8 border-2">
        <div className=" md:p-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white rounded-full p-6 shadow-sm">
              <Landmark className="w-16 h-16 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                הסכם שותפות ייחודי
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-6">
                אנו מציעים הסכם שותפות ייחודי המעניק לכם יתרונות משמעותיים
                בתהליך שינוי הייעוד והפיתוח העתידי של הקרקע. ההסכם מבטיח את
                זכויותיכם ומקל על התהליכים הבירוקרטיים המורכבים.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "ליווי מקצועי לאורך כל הדרך",
                  "נציגות מול רשויות התכנון",
                  "גישה למידע עדכני על התקדמות התהליכים",
                  "חלוקת סיכונים והזדמנויות",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniquePartnershipSection;
