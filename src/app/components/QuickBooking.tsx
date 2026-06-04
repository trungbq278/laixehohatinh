import { motion } from "motion/react";
import { MapPin, Navigation, DollarSign } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function QuickBooking() {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 backdrop-blur-lg bg-white/80 -mt-20 relative z-20">
          <h2 className="text-center mb-6 text-[#0A2647]">Đặt Xe Nhanh</h2>

          <div className="space-y-4">
            {/* Pickup Location */}
            <div className="relative">
              <label className="block text-sm text-gray-700 mb-2">Điểm đón</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A2647]" />
                <input
                  type="text"
                  placeholder="Nhập địa chỉ đón bạn..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0A2647] focus:ring-2 focus:ring-[#0A2647]/20 outline-none transition-all bg-gray-50"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="relative">
              <label className="block text-sm text-gray-700 mb-2">Điểm đến</label>
              <div className="relative">
                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4ADE80]" />
                <input
                  type="text"
                  placeholder="Bạn muốn về đâu?"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0A2647] focus:ring-2 focus:ring-[#0A2647]/20 outline-none transition-all bg-gray-50"
                />
              </div>
            </div>

            {/* Estimated Price */}
            <div className="bg-gradient-to-r from-[#0A2647] to-[#205295] rounded-xl p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>Giá tạm tính</span>
              </div>
              <span className="text-xl">150.000₫ - 200.000₫</span>
            </div>

            {/* Call CTA */}
            <a
              href={DRIVER_PHONE_HREF}
              aria-label={DRIVER_PHONE_ARIA_LABEL}
              className="w-full bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center font-semibold"
            >
              {CTA_BOOKING_LABEL}
            </a>

            {/* Quick Access Locations */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Gọi để báo địa chỉ:</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={DRIVER_PHONE_HREF}
                  aria-label={DRIVER_PHONE_ARIA_LABEL}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs transition-colors"
                >
                  🏠 Nhà
                </a>
                <a
                  href={DRIVER_PHONE_HREF}
                  aria-label={DRIVER_PHONE_ARIA_LABEL}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs transition-colors"
                >
                  🏢 Công ty
                </a>
                <a
                  href={DRIVER_PHONE_HREF}
                  aria-label={DRIVER_PHONE_ARIA_LABEL}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs transition-colors"
                >
                  🏨 Khách sạn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
