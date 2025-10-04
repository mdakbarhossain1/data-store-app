import { motion, type Variants } from "framer-motion";
import storageImage from "../../assets/data-security-personal.png";

const StorageSection: React.FC = () => {
  const menuFont = "'Inter', sans-serif"; // Modern font

  // Motion variants for staggered animation
const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariant: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 py-20"
      style={{ fontFamily: menuFont }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 rounded-3xl shadow-lg dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)] bg-white dark:bg-gray-800 p-8 lg:p-16 transition-colors duration-300"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-start overflow-hidden "
            variants={imageVariant}
          >
            <img
              src={storageImage}
              alt="Storage"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left"
            variants={textVariant}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-extrabold text-[#0D97FF] dark:text-[#0D97FF] leading-tight"
              variants={textVariant}
            >
              We are a high-level data storage bank
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300"
              variants={textVariant}
            >
              The place to store various data that you can access at any time through the internet and where you can carry it.
              This very flexible storage area has a high level of security. To enter into your own data you must enter the password
              that you created when you registered in this Data Warehouse.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorageSection;
