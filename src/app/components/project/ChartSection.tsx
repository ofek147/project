import { useEffect, useState } from "react";
import { ChartWrapper } from "./Wrappers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";

const ChartSection = () => {
  const [activeTab, setActiveTab] = useState("teken32");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  return (
    <div className="mx-auto px-4">
      <div className="mx-auto max-w-4xl my-16 grid md:grid-rows-2">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-center">
            התפתחות מחירי הקרקע
          </h2>

          <div className="pt-4">
            <div>
              <Tabs dir="rtl" value={activeTab} onValueChange={setActiveTab} className="">
                <div className="flex justify-center">
                  <TabsList className="flex bg-gray-200 w-fit">
                    <div className="gap-1">
                      <TabsTrigger className="" value="teken32">בדיקות היתכנות</TabsTrigger>

                      <TabsTrigger className="" value="teken22">תכנון ראשוני</TabsTrigger>

                      <TabsTrigger className="" value="teken21">כניסה לותמ״ל</TabsTrigger>
                    </div>
                  </TabsList>
                </div>

                <TabsContent className="" value="teken32">
                  <div>
                    <h2 className="text-xl font-medium mb-2">
                      תקן 22 - הערכת שווי זכויות במקרקעין
                    </h2>
                    <p>
                      המקרקעין בבואם להעריך את שווי הקרקע בשלבים השונים של
                      התהליך התכנוני.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent className="" value="teken22">
                  <div>
                    <h2 className="text-xl font-medium mb-2">
                      תקן 22 - הערכת שווי זכויות במקרקעין
                    </h2>
                    <p>תהליך התכנוני.</p>
                  </div>
                </TabsContent>

                <TabsContent className="" value="teken21">
                  <div>
                    <h2 className="text-xl font-medium mb-2">
                      תקן 22 - הערכת שווי זכויות במקרקעין
                    </h2>
                    <p>
                      תקן 22 הוא תקן מקצועי המגדיר את הכללים להערכת שווי של נכסי
                      מקרקעין, כולל קרקעות חקלאיות בעלות פוטנציאל להשבחה. התקן
                      משמש את שמאי המקרקעין בבואם להעריך את שווי הקרקע בשלבים
                      השונים של התהליך התכנוני.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
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
