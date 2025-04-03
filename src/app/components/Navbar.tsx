"use client";

import { useState, useEffect, useRef, useCallback, JSX } from "react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  FileText,
  Building2,
  Info,
  Mail,
//   Newspaper,
  LucideIcon,
} from "lucide-react";

interface MenuItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface HeaderProps {
  className?: string;
}

const menuItems: MenuItem[] = [
  // אם אני מוסיף עוד לינק max-w-4xl :לשנות
  { name: "בית", url: "/", icon: FileText },
  { name: "פרויקטים", url: "/projects", icon: Building2 },
  { name: "מדריך השקעה", url: "/information", icon: Info },
  //   { name: "כתבות", url: "/articles", icon: Newspaper },
  { name: "צור קשר", url: "/contact", icon: Mail },
];

function Header({ className }: HeaderProps): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActivePage = useCallback(
    (itemUrl: string): boolean => {
      return pathname === itemUrl;
    },
    [pathname]
  );

  return (
    <header
      ref={headerRef}
      className={`bg-white fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-3" : "py-4"
      } ${isScrolled ? "shadow-md" : "shadow-sm"} ${className}`}
    >
      {/* אם אני מוסיף עוד לינק max-w-4xl :לשנות  */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-green-800 no-underline"
          >
            קרקעות להשקעה
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={`${
                      isActivePage(item.url) ? "text-green-800" : "text-black"
                    } hover:text-green-800 flex items-center gap-2 text-base font-medium transition-colors duration-200 no-underline py-0.5`}
                  >
                    <item.icon className="w-4 h-4 stroke-2" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <button className="flex items-center gap-2 transition-all duration-200 cursor-pointer px-3 py-2 rounded-sm border border-gray-300 bg-transparent text-sm font-medium h-10 leading-4">
                <Phone className="w-4 h-4 stroke-2" />
                073-1234567
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-100 border-t border-gray-300 pt-4 pb-2 mt-4"
                : "max-h-0 border-none mt-0 pt-0 pb-0"
            }`}
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`${
                    isActivePage(item.url) ? "text-green-900" : "text-black"
                  } hover:text-green-900 flex items-center gap-2 text-base font-medium no-underline py-3 transition-colors duration-200`}
                >
                  <item.icon className="w-5 h-5 stroke-2" />
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center justify-center gap-2 text-black transition-all duration-200 cursor-pointer px-3 py-2 rounded-sm border border-gray-300 bg-transparent text-sm font-medium h-10 leading-4 w-full mt-4">
                <Phone className="w-4 h-4 stroke-2" />
                073-1234567
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
