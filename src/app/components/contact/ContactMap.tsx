import { MapPin } from "lucide-react";

const ContactMap = () => {
  const officeLocation = {
    title: "המשרד הראשי",
    coordinates: { lat: 32.0853, lng: 34.7818 },
    address: "רח' אחד העם 9, תל אביב",
    description: "משרדי החברה ממוקמים במרכז תל אביב, בקרבת הפרויקטים שלנו",
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">מפת הגעה</h2>
      <div className="w-full h-96 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{officeLocation.title}</h3>
          <p>{officeLocation.address}</p>
          <p className="mt-4 max-w-md mx-auto">{officeLocation.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
