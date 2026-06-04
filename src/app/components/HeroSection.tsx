import React from "react";
import { motion } from "motion/react";
import { Car, MapPin, Clock, Shield } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  CTA_EMERGENCY_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295] pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607642857266-88f5f03e66c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Professional driver"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Đặt Tài Xế Lái Xe Hộ
              <br />
              <span className="text-[#4ADE80]">Trong 30 Giây</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              An toàn - Nhanh chóng - Có mặt 24/7
            </p>
          </motion.div>

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-xl opacity-60 animate-pulse" />
            <a
              href={DRIVER_PHONE_HREF}
              aria-label={DRIVER_PHONE_ARIA_LABEL}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 md:px-12 py-5 md:py-6 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto flex items-center justify-center gap-3 group"
            >
              <span className="text-xl md:text-2xl font-semibold">
                {CTA_EMERGENCY_LABEL}
              </span>
            </a>
            <p className="text-white/80 mt-3 text-sm md:text-base">
              Đừng lái xe khi đã uống rượu bia - Chúng tôi đưa bạn về nhà an toàn
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#4ADE80]">
              <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
              <span className="text-sm">12 tài xế đang sẵn sàng trong bán kính 3km</span>
            </div>
          </motion.div>

          {/* Regular Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <a
              href={DRIVER_PHONE_HREF}
              aria-label={DRIVER_PHONE_ARIA_LABEL}
              className="bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] px-10 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 text-lg inline-flex items-center gap-2 font-semibold"
            >
              <Car className="w-5 h-5" />
              {CTA_BOOKING_LABEL}
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Clock className="w-8 h-8 text-[#4ADE80] mx-auto mb-2" />
              <p className="text-white/90 text-sm">24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Shield className="w-8 h-8 text-[#4ADE80] mx-auto mb-2" />
              <p className="text-white/90 text-sm">Bảo hiểm</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <MapPin className="w-8 h-8 text-[#4ADE80] mx-auto mb-2" />
              <p className="text-white/90 text-sm">GPS</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
