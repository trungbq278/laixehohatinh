import { motion } from "motion/react";
import { MapPin, Navigation, CheckCircle, Car } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Chọn điểm đón",
    description: "Nhập hoặc chọn vị trí hiện tại",
  },
  {
    icon: Navigation,
    title: "Chọn điểm đến",
    description: "Nhập địa chỉ bạn muốn đến",
  },
  {
    icon: CheckCircle,
    title: "Xác nhận giá",
    description: "Kiểm tra và đồng ý giá cước",
  },
  {
    icon: Car,
    title: "Tài xế đến hỗ trợ",
    description: "Theo dõi tài xế trên bản đồ",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0A2647] mb-4">Quy Trình Sử Dụng</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chỉ 4 bước đơn giản để có tài xế chuyên nghiệp lái xe hộ bạn
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2647] via-[#205295] to-[#4ADE80] -translate-y-1/2" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-full flex items-center justify-center shadow-xl relative z-10 border-4 border-white">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-[#0A2647] mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-[#0A2647] to-[#205295] my-2" />
                )}
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-[#0A2647] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
