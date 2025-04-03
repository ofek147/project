import { useEffect, useState } from "react";
import { ChartWrapper } from "./Wrappers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/Tabs";

const ChartSection = () => {
  const [activeTab, setActiveTab] = useState("teken32");

  useEffect(() => {
    const tabParam = new URLSearchParams(window.location.search).get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  const tabData = [
    { value: "teken32", label: "בדיקות היתכנות", content: "תקן 22 - הערכת שווי זכויות במקרקעין. המקרקעין בבואם להעריך את שווי הקרקע בשלבים השונים של התהליך התכנוני." },
    { value: "teken22", label: "תכנון ראשוני", content: "תקן 22 - הערכת שווי זכויות במקרקעין. תהליך התכנוני." },
    { value: "teken21", label: "כניסה לותמ'ל", content: "תקן 22 - הערכת שווי זכויות במקרקעין. תקן 22 הוא תקן מקצועי המגדיר את הכללים להערכת שווי של נכסי מקרקעין, כולל קרקעות חקלאיות בעלות פוטנציאל להשבחה. התקן משמש את שמאי המקרקעין בבואם להעריך את שווי הקרקע בשלבים השונים של התהליך התכנוני." },
  ];

  return (
    <div className="mx-auto px-4">
      <div className="mx-auto max-w-4xl my-16 grid md:grid-rows-2">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-center">התפתחות מחירי הקרקע</h2>
          <div className="pt-4">
            <Tabs dir="rtl" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 h-auto border-b-2 border-gray-400 bg-gray-200">
                {tabData.map(tab => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`md:py-3 cursor-pointer ${activeTab === tab.value ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabData.map(tab => (
                <TabsContent key={tab.value} className="" value={tab.value}>
                  <div>
                    <h2 className="text-xl font-medium mb-2">תקן 22 - הערכת שווי זכויות במקרקעין</h2>
                    <p>{tab.content}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        <div>
          <ChartWrapper />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;