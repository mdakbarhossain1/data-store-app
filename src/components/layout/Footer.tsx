"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import dataStoreIcon from "../../assets/data-store-icon.png";

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo + Contact */}
        <div>
          {/* Logo */}
          <Link to="/" className="flex items-center mb-4 -ml-3">
            <img src={dataStoreIcon} alt="SData Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
              SData
            </span>
          </Link>
          <ul className="space-y-2 text-sm">
            <li>Kamrangir Char, Dhaka-1211, Bangladesh </li>
            <li>mdakbarhossain16@gmail.com</li>
            <li>+01836456682</li>
          </ul>
        </div>

        {/* Column 2: About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news">DW News</Link></li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/guide">Guide</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600"><FiFacebook /></a>
            <a href="#" className="hover:text-sky-400"><FiTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FiInstagram /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 dark:border-gray-700" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Akbar. All rights reserved.
        </p>
        <p className="text-sm">Made with ❤️ using React & Tailwind</p>
      </div>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        {isChatOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden z-50"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h4 className="font-semibold text-gray-900 dark:text-white">Chat with us</h4>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <FiX />
              </button>
            </div>
            <div className="p-4 h-40 overflow-y-auto text-sm">
              <p className="text-gray-600 dark:text-gray-400">👋 Hi! How can we help you today?</p>
            </div>
            <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm rounded-l-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
              />
              <button className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
