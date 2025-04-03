import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">פרטי התקשרות</h2>
      <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),_0_4px_6px_-2px_rgba(0,0,0,0.05)] rounded-lg border-2 border-grey-400">
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center min-w-10 h-10 bg-green-100 rounded-full">
                <Phone className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">טלפון</h3>
                <p className="text-gray-600">073-1234567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center min-w-10 h-10 bg-green-100 rounded-full">
                <Mail className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">דוא״ל</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center min-w-10 h-10 bg-green-100 rounded-full">
                <Clock className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">שעות פעילות</h3>
                <p className="text-gray-600">ראשון - חמישי: 9:00 - 18:00</p>
                <p className="text-gray-600">שישי: 9:00 - 13:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center min-w-10 h-10 bg-green-100 rounded-full">
                <MapPin className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">כתובת</h3>
                <p className="text-gray-600">רח&apos; אחד העם 9, תל אביב</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
