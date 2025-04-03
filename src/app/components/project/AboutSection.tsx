import { Building2, ShoppingBag, Trees } from "lucide-react";

interface ProjectDetails {
  area_size: string;
  residence: string;
  employment: string;
}

interface Project {
  title: string;
  description: string;
  progress_description: string;
  details: ProjectDetails[];
}

interface AboutProjectProps {
  project: Project; // או סוג מתאים
}

const AboutSection = ({ project }: AboutProjectProps) => {
  const details = project.details[0];
  const cardsData = [
    {
      icon: Trees,
      title: "שטח הפרויקט",
      value: `${details.area_size} דונם`,
      color: "lime"
    },
    {
      icon: Building2,
      title: "מגורים",
      value: `${details.residence} מ"ר`,
      color: "blue"
    },
    {
      icon: ShoppingBag,
      title: "מסחר ותעסוקה",
      value: `${details.employment} דונם`,
      color: "gold"
    },
  ];

  return (
    <section className="md:pt-8">
      <div className="mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2">
            <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
              על הפרויקט
            </span>
            <h2 className="text-3xl font-bold">{project.title}</h2>
          </div>

          <div className="text-gray-600">
            <p className="mb-6">{project.description}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] border-2 rounded-xl p-5"
                >
                  <div className="p-6 text-center">
                    <card.icon className="w-14 h-14 mx-auto" color={card.color}/>
                    <h3 className="text-2xl text-black font-medium">
                      {card.title}
                    </h3>
                    <p className="text-3xl font-bold">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black">
                תהליך התכנון והפיתוח
              </h3>
              <div className="space-y-4">
                <p>{project.progress_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
