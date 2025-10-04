import { motion } from "framer-motion";
import { FiInfo, FiSend } from "react-icons/fi";

export default function TryFreeSection() {
  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section className="pt-4 pb-8 bg-gray-100 dark:bg-gray-900">
      <hr className="my-10 border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent" />
      <div className=" pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left text */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Try for free!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-lg text-gray-600 dark:text-gray-300"
          >
            Get limited 1 week free try our features!
          </motion.p>
        </div>

        {/* Right actions */}
        <div className=" rounded-3xl flex flex-col sm:flex-row gap-4 items-center justify-center min-w-[40%]">
          <motion.a
            href="#learn-more"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            variants={buttonVariant}
            whileHover="hover"
          >
            <FiInfo className="text-lg" /> Learn More
          </motion.a>

          <motion.a
            href="#request-demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            variants={buttonVariant}
            whileHover="hover"
          >
            <FiSend className="text-lg" /> Request Demo
          </motion.a>
        </div>
      </div>
    </section>
  );
}
