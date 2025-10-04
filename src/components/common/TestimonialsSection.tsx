import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, type Variants } from "framer-motion";
import image1 from "../../assets/profile1.png";
import image2 from "../../assets/profile2.png";
import image3 from "../../assets/profile3.png";
import image4 from "../../assets/profile4.png";
import image5 from "../../assets/profile5.png";

// Dummy testimonial data
const testimonials = [
  {
    name: "John Fran",
    role: "Web Designer",
    rating: 5,
    image: image1,
    review:
      "This platform helped me organize my workflow and store my data securely. Highly recommended!",
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    rating: 4,
    image: image2,
    review:
      "Amazing service with excellent cloud syncing. The UI is very user-friendly.",
  },
  {
    name: "Mike Ross",
    role: "UI/UX Designer",
    rating: 5,
    image: image3,
    review:
      "The interface is smooth and intuitive. Managing my data has never been easier!",
  },
  {
    name: "Sara Lee",
    role: "Software Engineer",
    rating: 4,
    image: image4,
    review:
      "Fast, secure, and reliable. I love the cloud sync feature for my projects.",
  },
  {
    name: "David Kim",
    role: "Entrepreneur",
    rating: 5,
    image: image5,
    review:
      "Excellent customer support and great platform! My team uses it daily for project data.",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#0D97FF] dark:text-[#0D97FF] mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          Testimonials
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-testimonial",
            prevEl: ".swiper-button-prev-testimonial",
          }}
          pagination={{
            el: ".swiper-pagination-testimonial",
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-[0_10px_20px_rgba(255,255,255,0.05)] p-6 flex gap-6 min-h-[250px]"
                variants={cardVariant}
              >
                {/* Left image */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 mb-2">
                      {t.role}
                    </p>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full border-2 ${
                            i < t.rating
                              ? "bg-[#0D97FF] border-[#0D97FF]"
                              : "border-[#0D97FF] dark:border-[#0D97FF]"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t.review}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Pagination & navigation */}
          <div className="flex justify-between items-center px-4 my-5">
            <div className="swiper-pagination-testimonial"></div>
            <div className="flex gap-4">
              <div className="swiper-button-prev-testimonial cursor-pointer text-2xl text-black dark:text-white hover:text-[#0D97FF]">
                &#10094;
              </div>
              <div className="swiper-button-next-testimonial cursor-pointer text-2xl text-black dark:text-white hover:text-[#0D97FF]">
                &#10095;
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
