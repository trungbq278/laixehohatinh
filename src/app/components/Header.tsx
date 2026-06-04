import React from "react";
import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../imports/image.png";
import {
  CTA_BOOKING_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="38 Driver Logo"
              className="w-10 h-10 md:w-[60px] md:h-[60px] object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl text-[#0A2647]">38 DRIVER</h1>
              <p className="text-xs text-gray-600 hidden md:block">Lái Xe Hộ Hà Tĩnh</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-[#0A2647] transition-colors">
              Dịch vụ
            </a>
            <a href="#process" className="text-gray-700 hover:text-[#0A2647] transition-colors">
              Quy trình
            </a>
            <a href="#areas" className="text-gray-700 hover:text-[#0A2647] transition-colors">
              Khu vực
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#0A2647] transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Call Button */}
          <div className="flex items-center gap-3">
            <a
              href={DRIVER_PHONE_HREF}
              aria-label={DRIVER_PHONE_ARIA_LABEL}
              className="bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] px-4 md:px-6 py-2 md:py-2.5 rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-md font-semibold"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden lg:inline text-sm">{CTA_BOOKING_LABEL}</span>
              <span className="hidden sm:inline lg:hidden text-sm">0943 998 688</span>
              <span className="sm:hidden text-sm">Gọi</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#0A2647] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <nav className="px-4 py-4 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#0A2647] transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#0A2647] transition-colors"
            >
              Quy trình
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#0A2647] transition-colors"
            >
              Khu vực
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#0A2647] transition-colors"
            >
              Liên hệ
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
