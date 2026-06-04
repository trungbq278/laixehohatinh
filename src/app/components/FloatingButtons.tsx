import React from "react";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function FloatingButtons() {
  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-40">
      <motion.a
        href={DRIVER_PHONE_HREF}
        aria-label={DRIVER_PHONE_ARIA_LABEL}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#4ADE80] hover:bg-[#3DC56B] rounded-full shadow-2xl flex items-center justify-center text-[#0A2647] group relative"
      >
        <Phone className="w-6 h-6" />
        <div className="absolute right-full mr-3 bg-[#0A2647] text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {CTA_BOOKING_LABEL}
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#4ADE80] rounded-full opacity-30"
        />
      </motion.a>
    </div>
  );
}
