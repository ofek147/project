import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "1,500+", label: "דונם קרקע בניהול" },
    { number: "₪500M+", label: "שווי נכסים" },
    { number: "150+", label: "משקיעים מרוצים" },
    { number: "15+", label: "שנות ניסיון" },
  ];

  return (
    <section className="bg-green-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </p>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
