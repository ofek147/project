import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
      React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  link: string;
}

interface Props {
  benefit: Benefit;
}

const BenefitCard = ({ benefit }: Props) => {
  const Icon = benefit.icon; // Use the icon component dynamically

  return (
    
    <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] border-2 rounded-lg p-8 ">
      <div className="flex flex-col items-center gap-4 mb-6">
        <div
          className={`rounded-full p-4 flex items-center justify-center shadow-sm ${
            benefit.color === "blue"
              ? "bg-blue-100"
              : benefit.color === "green"
              ? "bg-green-100"
              : "bg-purple-100"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${
              benefit.color === "blue"
                ? "text-blue-700"
                : benefit.color === "green"
                ? "text-green-700"
                : "text-purple-700"
            }`}
          />
        </div>
        <h3 className="text-xl font-semibold">{benefit.title}</h3>
        <p className="text-gray-600 text-base">{benefit.description}</p>
        <div>
          <Link href={benefit.link}>
            <button className="inline-flex items-center text-sm underline-offset-4 hover:underline text-green-800 hover:text-green-900 cursor-pointer gap-2">
              למידע נוסף
              <ArrowLeft className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
