"use client";

import SharedHero from "../components/SharedHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";

const ContactPage = () => {
  return (
    <main>
      <SharedHero
        title="צור קשר"
        subtitle="צוות המומחים שלנו זמין לענות על כל השאלות שלכם"
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactMap />
      </div>
    </main>
  );
};

export default ContactPage;
