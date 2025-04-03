"use client";

import Link from "next/link";
import { Phone, Mail, Home, Clock } from "lucide-react";

interface FooterLink {
  name: string;
  url: string;
}

const Footer = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  const menuLinks: FooterLink[] = [
    { name: "בית", url: "/" },
    { name: "פרויקטים", url: "/projects" },
    { name: "מדריך השקעה", url: "/information" },
    { name: "כתבות", url: "/articles" },
    { name: "צור קשר", url: "/contact" },
  ];

  return (
    <footer
      className={`${className} bg-green-800 text-white py-12 relative w-full`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">קרקעות להשקעה</h3>
            <p className="text-sm leading-5 mt-0 mb-4">
              השקעה בטוחה בקרקעות עם פוטנציאל למגורים ומסחר
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <nav className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="text-white hover:text-green-600 text-sm no-underline leading-6 "
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone />
                <span>טלפון: 073-1234567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail />
                <span>דוא״ל: info@example.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Home />
                <span>כתובת: רח&apos; אחד העם 9, תל אביב</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock />
                <div>
                  <p>ראשון - חמישי: 9:00 - 18:00</p>
                  <p>שישי: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-8 pt-8 border-t border-white/20 text-sm text-center">
          © {currentYear} קרקעות להשקעה - כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
};

export default Footer;
