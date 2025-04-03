"use client";

import { Tabs, TabsList, TabsTrigger } from "../Tabs";

const TabsSection = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <Tabs dir="rtl">
        <TabsList className="grid grid-cols-4 h-auto">
          <TabsTrigger
            value="all"
            className="md:py-3 hover:bg-gray-200 cursor-pointer"
          >
            כל הפרויקטים
          </TabsTrigger>
          <TabsTrigger
            value="short"
            className="md:py-3 hover:bg-gray-200 cursor-pointer"
          >
            טווח קצר
          </TabsTrigger>
          <TabsTrigger
            value="medium"
            className="md:py-3 hover:bg-gray-200 cursor-pointer"
          >
            טווח בינוני
          </TabsTrigger>
          <TabsTrigger
            value="long"
            className="md:py-3 hover:bg-gray-200 cursor-pointer"
          >
            טווח ארוך
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabsSection;
