import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Nguyễn Văn Anh",
    location: "Đại Nài, Hà Tĩnh",
    rating: 5,
    comment: "Dịch vụ tuyệt vời! Tài xế rất chuyên nghiệp và lái xe an toàn. Tôi đã sử dụng dịch vụ sau khi đi tiệc và rất hài lòng.",
    avatar: "👨‍💼",
  },
  {
    name: "Trần Thị Mai",
    location: "Hà Huy Tập, Hà Tĩnh",
    rating: 5,
    comment: "Nhanh chóng, tiện lợi. Chỉ mất vài phút là đã có tài xế đến. Giá cả rất hợp lý và minh bạch.",
    avatar: "👩‍💼",
  },
  {
    name: "Lê Hoàng Nam",
    location: "Hồng Lĩnh, Hà Tĩnh",
    rating: 5,
    comment: "Tôi thường xuyên sử dụng dịch vụ này khi đi nhậu. An toàn hơn rất nhiều so với tự lái xe. Highly recommended!",
    avatar: "👨",
  },
  {
    name: "Phạm Thu Hà",
    location: "Can Lộc, Hà Tĩnh",
    rating: 5,
    comment: "Ứng dụng rất dễ sử dụng, tài xế lịch sự, xe sạch sẽ. Cảm ơn đội ngũ đã mang đến dịch vụ tốt như vậy!",
    avatar: "👩",
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0A2647] mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn khách hàng hài lòng đã tin tưởng sử dụng dịch vụ của chúng tôi
          </p>
        </motion.div>

        {/* Mobile: Single Card Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
          >
            <Quote className="w-10 h-10 text-[#4ADE80] mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              {reviews[currentIndex].comment}
            </p>
            <div className="flex items-center gap-4">
              <div className="text-4xl">{reviews[currentIndex].avatar}</div>
              <div className="flex-1">
                <h4 className="text-[#0A2647]">{reviews[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{reviews[currentIndex].location}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#0A2647] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-8 h-8 text-[#4ADE80] mb-3" />
              <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-4">
                {review.comment}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="text-3xl">{review.avatar}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm text-[#0A2647] truncate">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
