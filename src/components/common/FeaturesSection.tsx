import {
  FiArrowRight,
  FiSearch,
  FiLock,
  FiDatabase,
  FiCloud,
  FiShield,
  FiSettings,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, type Variants } from "framer-motion";

const features = [
  {
    title: "Search Data",
    description:
      "Don't worry if your data is very large, we provide a search engine that helps you find data efficiently and save time.",
    icon: <FiSearch />,
  },
  {
    title: "Secure Storage",
    description:
      "Your data is encrypted and securely stored so that only you can access it with your credentials.",
    icon: <FiLock />,
  },
  {
    title: "Database Management",
    description:
      "Manage large volumes of data effortlessly and access it anytime with our high-performance storage solution.",
    icon: <FiDatabase />,
  },
  {
    title: "Cloud Sync",
    description:
      "Automatically sync your data across multiple devices and access it anywhere with seamless cloud integration.",
    icon: <FiCloud />,
  },
  {
    title: "Data Protection",
    description:
      "Advanced security protocols protect your data from unauthorized access, ensuring complete safety and privacy.",
    icon: <FiShield />,
  },
  {
    title: "Custom Settings",
    description:
      "Configure your storage preferences, access permissions, and optimize your workflow with custom settings.",
    icon: <FiSettings />,
  },
];

const FeaturesSection: React.FC = () => {
  const menuFont = "'Inter', sans-serif";

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

  return (
    <section
      className="w-full bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
      style={{ fontFamily: menuFont }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl shadow-lg dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)] bg-white dark:bg-gray-800 p-8 lg:p-16 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0D97FF] dark:text-[#0D97FF] leading-tight mb-10"
            variants={textVariant}
          >
            Features
          </motion.h2>

          <div className="">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {features.map((feature, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg dark:shadow-[0_10px_20px_rgba(255,255,255,0.05)] p-6 flex flex-col justify-between h-full min-h-[350px]"
                    variants={cardVariant}
                  >
                    <div className="mb-6 text-primary text-8xl text-dark dark:text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black dark:text-[#0D97FF] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      {feature.description}
                    </p>
                    <a
                      href="#learn-more"
                      className="mt-4 inline-flex items-center gap-2 font-medium text-primary hover:underline text-[#0D97FF]"
                    >
                      Learn More{" "}
                      <FiArrowRight className="text-[#0D97FF] text-xl" />
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Custom pagination and navigation container */}
              <div className="flex justify-between items-center px-4 my-5">
                {/* Dots */}
                <div className="swiper-pagination-custom"></div>

                {/* Arrows */}
                <div className="flex gap-4">
                  <div className="swiper-button-prev-custom text-black dark:text-white cursor-pointer text-2xl  hover:text-[#0D97FF]">
                    &#10094;
                  </div>
                  <div className="swiper-button-next-custom text-black dark:text-white cursor-pointer text-2xl hover:text-[#0D97FF]">
                    &#10095;
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
