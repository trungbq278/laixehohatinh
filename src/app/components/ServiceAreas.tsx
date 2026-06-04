import React from "react";
import { motion } from "motion/react";
import { MapPin, CheckCircle } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

const cities = [
  { name: "Hà Tĩnh", drivers: 150, active: true },
  { name: "Nghệ An", drivers: 45, active: true },
  { name: "Đà Nẵng", drivers: 80, active: true },
  { name: "TP Hồ Chí Minh", drivers: 200, active: true },
  { name: "Hải Phòng", drivers: 35, active: true },
  { name: "Cần Thơ", drivers: 40, active: false },
  { name: "Nha Trang", drivers: 50, active: false },
  { name: "Vũng Tàu", drivers: 30, active: false },
];

export function ServiceAreas() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0A2647] mb-4">Khu Vực Hoạt Động</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dịch vụ của chúng tôi đang có mặt tại các thành phố lớn trên toàn quốc
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589394857527-07c9c14fc87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Vietnam cities"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 text-center">
                <MapPin className="w-20 h-20 text-[#4ADE80] mx-auto mb-4" />
                <h3 className="text-white text-2xl mb-2">8+ Thành Phố</h3>
                <p className="text-white/80">Đang mở rộng</p>
              </div>

              {/* Animated Dots */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#4ADE80] rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#4ADE80] rounded-full animate-ping delay-75" />
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#4ADE80] rounded-full animate-ping delay-150" />
            </div>
          </motion.div>

          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl border ${
                  city.active
                    ? "bg-white border-[#4ADE80] shadow-md"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {city.active ? (
                      <CheckCircle className="w-5 h-5 text-[#4ADE80]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    )}
                    <div>
                      <h4 className="text-[#0A2647]">{city.name}</h4>
                      {city.active && (
                        <p className="text-xs text-gray-500">{city.drivers} tài xế</p>
                      )}
                    </div>
                  </div>
                  {city.active && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
                      <span className="text-xs text-gray-500">Hoạt động</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#0A2647] to-[#205295] rounded-2xl p-6 md:p-8 text-center text-white"
        >
          <h3 className="mb-2">Sắp có mặt tại thành phố của bạn!</h3>
          <p className="text-white/80 mb-4">
            Đăng ký để nhận thông báo khi dịch vụ mở rộng đến khu vực bạn
          </p>
          <a
            href={DRIVER_PHONE_HREF}
            aria-label={DRIVER_PHONE_ARIA_LABEL}
            className="inline-block bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] px-8 py-3 rounded-xl transition-all hover:scale-105 font-semibold"
          >
            {CTA_BOOKING_LABEL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
