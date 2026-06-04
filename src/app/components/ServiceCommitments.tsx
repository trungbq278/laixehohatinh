import { motion } from "motion/react";
import { Shield, Clock, DollarSign, MapPin, IdCard } from "lucide-react";

const commitments = [
  {
    icon: IdCard,
    title: "Tài xế xác thực CCCD",
    description: "100% tài xế được xác minh danh tính đầy đủ",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Hoạt động 24/7",
    description: "Luôn sẵn sàng phục vụ mọi lúc mọi nơi",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Bảo hiểm chuyến đi",
    description: "Mọi chuyến đi đều được bảo hiểm toàn diện",
    color: "from-green-500 to-green-600",
  },
  {
    icon: DollarSign,
    title: "Giá minh bạch",
    description: "Không phụ thu, không phí ẩn",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "Theo dõi GPS",
    description: "Theo dõi hành trình realtime trên bản đồ",
    color: "from-teal-500 to-teal-600",
  },
];

export function ServiceCommitments() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0A2647] mb-4">Cam Kết Dịch Vụ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm an toàn và chuyên nghiệp nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${commitment.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <commitment.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0A2647] mb-2">{commitment.title}</h3>
                <p className="text-sm text-gray-600">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl md:text-4xl text-[#0A2647] mb-2">10k+</div>
            <div className="text-sm md:text-base text-gray-600">Chuyến đi</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl md:text-4xl text-[#0A2647] mb-2">500+</div>
            <div className="text-sm md:text-base text-gray-600">Tài xế</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl md:text-4xl text-[#0A2647] mb-2">4.9★</div>
            <div className="text-sm md:text-base text-gray-600">Đánh giá</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
