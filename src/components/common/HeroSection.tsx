import heroImage from "../../assets/hero-image.png";
import { motion, type Variants } from "framer-motion";

const HeroSection: React.FC = () => {
  const menuFont = "'Inter', sans-serif"; // Modern font

  // Framer Motion Variants
  const textVariant: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant: Variants = {
    hidden: {
      scale: 1.05,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="w-full bg-white dark:bg-gray-900 transition-colors duration-300"
      style={{ fontFamily: menuFont }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Text */}
          <motion.div
            className="flex-1 text-center md:text-center lg:text-left space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            <h1 className="text-4xl sm:text-6xl font-medium text-[#0D97FF] dark:text-[#0D97FF] leading-tight">
              Save Your Data Storage Here
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 p-3 lg:p-0 lg:pr-4">
              Sdata is a data storage area that has been tested for security, so
              you can store your data here safely but not be afraid of being
              stolen by others.
            </p>
            <motion.a
              href="#learn-more"
              className="inline-flex justify-around items-center w-1/2 gap-2 px-6 py-3 bg-primary text-[#0D97FF] dark:text-[#0D97FF] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              variants={buttonVariant}
              whileHover="hover"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
          >
            <div className="overflow-hidden">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
