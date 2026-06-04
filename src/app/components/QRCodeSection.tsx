import { motion } from "motion/react";
import { Smartphone, QrCode, ArrowRight, Phone } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  CTA_EMERGENCY_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function QRCodeSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-[#0A2647] mb-4">Gọi Để Đặt Xe Nhanh</h2>
            <p className="text-gray-600 mb-8">
              Không cần tải ứng dụng - Gọi hotline và có tài xế ngay lập tức
            </p>

            {/* QR Code Display */}
            <div className="relative inline-block">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.4)",
                    "0 0 0 20px rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-[#4ADE80]"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <QrCode className="w-32 h-32 text-[#0A2647]" />

                  {/* Scanning Animation */}
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#4ADE80] to-transparent"
                  />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#4ADE80]" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#4ADE80]" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#4ADE80]" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#4ADE80]" />
              </motion.div>

              <a
                href={DRIVER_PHONE_HREF}
                aria-label={DRIVER_PHONE_ARIA_LABEL}
                className="mt-4 inline-flex bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 font-semibold text-sm"
              >
                {CTA_EMERGENCY_LABEL}
              </a>
            </div>
          </motion.div>

          {/* Right: Mobile App Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0A2647] mb-2">Mở Trên Điện Thoại</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Chuyển ngay sang điện thoại để trải nghiệm tốt nhất
                  </p>
                  <a
                    href={DRIVER_PHONE_HREF}
                    aria-label={DRIVER_PHONE_ARIA_LABEL}
                    className="bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] px-6 py-2.5 rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    {CTA_BOOKING_LABEL}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-2xl p-6 text-white">
              <h3 className="mb-4">Lợi Ích Khi Sử Dụng</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#0A2647]">✓</span>
                  </div>
                  <span className="text-sm">Đặt xe chỉ trong 30 giây</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#0A2647]">✓</span>
                  </div>
                  <span className="text-sm">Theo dõi tài xế realtime</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#0A2647]">✓</span>
                  </div>
                  <span className="text-sm">Thanh toán tiện lợi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#0A2647]">✓</span>
                  </div>
                  <span className="text-sm">Lưu địa chỉ thường dùng</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-sm text-amber-900">
                💡 <strong>Mẹo:</strong> Lưu trang web vào màn hình chính để truy cập nhanh hơn!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
