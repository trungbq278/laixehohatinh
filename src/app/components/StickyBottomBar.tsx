import { Car } from "lucide-react";
import {
  CTA_BOOKING_LABEL,
  CTA_EMERGENCY_LABEL,
  DRIVER_PHONE_ARIA_LABEL,
  DRIVER_PHONE_HREF,
} from "../constants/cta";

export function StickyBottomBar() {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 p-3 max-w-md mx-auto">
          <a
            href={DRIVER_PHONE_HREF}
            aria-label={DRIVER_PHONE_ARIA_LABEL}
            className="flex flex-col items-center justify-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-2 rounded-xl transition-all active:scale-95 shadow-lg text-center"
          >
            <span className="text-[10px] leading-tight font-semibold">
              {CTA_EMERGENCY_LABEL}
            </span>
          </a>
          <a
            href={DRIVER_PHONE_HREF}
            aria-label={DRIVER_PHONE_ARIA_LABEL}
            className="flex flex-col items-center gap-1.5 bg-[#4ADE80] hover:bg-[#3DC56B] text-[#0A2647] py-3 rounded-xl transition-all active:scale-95 shadow-lg"
          >
            <Car className="w-5 h-5" />
            <span className="text-[10px] leading-tight font-semibold text-center">
              {CTA_BOOKING_LABEL}
            </span>
          </a>
        </div>
        <div className="h-safe-area-inset-bottom" />
      </div>

      {/* Spacer for bottom bar */}
      <div className="md:hidden h-20" />
    </>
  );
}
