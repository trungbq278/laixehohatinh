import React from "react";
import { Phone, MessageCircle, Facebook, MapPin, Mail, Clock } from "lucide-react";
import { DRIVER_PHONE_ARIA_LABEL, DRIVER_PHONE_HREF } from "../constants/cta";

export function Footer() {
  return (
    <footer className="bg-[#0A2647] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4 text-[#4ADE80]">38 DRIVER</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Dịch vụ tài xế lái xe hộ chuyên nghiệp, an toàn và nhanh chóng tại Hà Tĩnh.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Hoạt động 24/7</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="mb-4 text-white">Liên Hệ Nhanh</h4>
            <div className="space-y-3">
              <a
                href={DRIVER_PHONE_HREF}
                aria-label={DRIVER_PHONE_ARIA_LABEL}
                className="flex items-center gap-3 text-white/70 hover:text-[#4ADE80] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#4ADE80]/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Hotline</div>
                  <div className="text-sm">0943 998 688</div>
                </div>
              </a>
              <a
                href="https://zalo.me/0943998688"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#4ADE80] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#4ADE80]/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Zalo</div>
                  <div className="text-sm">Chat ngay</div>
                </div>
              </a>
              <a
                href="https://facebook.com/38driver.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#4ADE80] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#4ADE80]/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Facebook</div>
                  <div className="text-sm">Fanpage</div>
                </div>
              </a>
            </div>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="mb-4 text-white">Văn Phòng</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>133 Nguyễn Du, Hà Tĩnh, Việt Nam</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>support@laixeho.vn</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Hỗ trợ: 24/7</p>
                  <p className="text-xs text-white/50">Văn phòng: 8:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-white">Thông Tin</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-[#4ADE80] transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4ADE80] transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4ADE80] transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4ADE80] transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#4ADE80] transition-colors">
                  Trở thành tài xế
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>© 2026 38 DRIVER. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
