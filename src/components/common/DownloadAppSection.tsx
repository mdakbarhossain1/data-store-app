import { motion, type Variants } from "framer-motion";
import downloadAppImage from "../../assets/mobile-app.png";
import { FiDownload } from "react-icons/fi";

const DownloadAppSection: React.FC = () => {
  const menuFont = "'Inter', sans-serif";

  // Motion Variants
  const containerVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariant: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="w-full bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
      style={{ fontFamily: menuFont }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 rounded-3xl shadow-lg dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)] bg-white dark:bg-gray-800 p-8 lg:p-16 transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariant}
        >
          {/* Left Text Content */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-6"
            variants={textVariant}
          >
           <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0D97FF] dark:text-[#0D97FF] leading-tight mb-10"
            variants={textVariant}
          >
            Download Our App
          </motion.h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The place to store various data that you can access at any time
              through the internet and carry it wherever you go. This very
              flexible storage area has a high level of security. To enter your
              own data, you must enter the password that you created when you
              registered in this data warehouse.
            </p>

            <motion.a
              href="#download"
              className="inline-flex justify-around items-center w-1/2 gap-2 px-6 py-3 bg-primary text-black dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              variants={buttonVariant}
              whileHover="hover"
            >
              <FiDownload className="text-lg" /> Download Now
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-center"
            variants={imageVariant}
          >
            <div className="">
              <img
                src={downloadAppImage}
                alt="Mobile App"
                className="w-72 sm:w-96 lg:w-[450px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
