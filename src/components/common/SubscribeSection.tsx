"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert(`Subscribed with: ${email}`); // Replace with API call
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:gap-0 gap-3 md:flex-row items-center justify-between">
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Subscribe !
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-lg text-gray-600 dark:text-gray-300"
          >
            Join our newsletter to never miss any latest news.
          </motion.p>
        </div>
        <div className="p-2 rounded-4xl shadow-lg dark:shadow-[0_10px_20px_rgba(255,255,255,0.05)] dark:bg-gray-800 md:min-w-5/12 ">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=" md:my-auto flex flex-row justify-center items-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your e-mail address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full rounded-full px-5 py-3 border bg-transparent border-transparent
                       focus:outline-none focus:ring-0 focus:ring-transparent 
                         text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 bg-blue-600 text-white font-semibold 
                       hover:bg-blue-700 transition shadow-md"
            >
              Join Us
            </button>
          </motion.form>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-red-500 text-sm"
            >
              {error}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
