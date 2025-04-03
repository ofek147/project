import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-red-200 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            צור קשר
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            מעוניינים לשמוע עוד?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            השאירו פרטים ונחזור אליכם עם מידע מפורט על אפשרויות ההשקעה הזמינות
          </p>
        </div>

        <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] rounded-lg border-2">
          <div className="p-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                המומחים שלנו כאן בשבילכם
              </h3>
              <ul className="space-y-6 md:mr-30">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    קרקעות חקלאיות פרטיות הרשומות בטאבו
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    פוטנציאל לשינוי ייעוד למגרים ומסחר
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    ליווי מקצועי מלא בכל שלבי ההשקעה
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    הסכם שותפות המקל על תהליכי התכנון
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <button className="inline-flex bg-green-800 hover:bg-green-900 rounded-md cursor-pointer h-8 px-2 text-white text-sm items-center mt-4 gap-2">
                  צור קשר
                  <ArrowLeft size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
