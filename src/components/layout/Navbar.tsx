import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight, FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import dataStoreIcon from "../../assets/data-store-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string>("");

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Help", href: "/help" },
    { name: "Features", href: "/features" },
    { name: "Sign Up", href: "/signup" },
  ];

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.href === location.pathname
    );
    setActiveMenu(currentItem?.name || "");
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const hoverVariant: Variants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  const sidebarVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  const menuFont = "Inter, sans-serif";

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{ fontFamily: menuFont }}
      >
        <div className="flex justify-between items-center h-16 relative z-50">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-extrabold text-black dark:text-white">
            <Link to="/" className="flex items-center">
              <img src={dataStoreIcon} alt="SData Logo" className="w-20" />
              <span>SData</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 md:gap-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                variants={hoverVariant}
                whileHover="hover"
              >
                <Link
                  to={item.href}
                  onClick={() => setActiveMenu(item.name)}
                  className={`px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                    activeMenu === item.name
                      ? "text-[#0D97FF]"
                      : "text-black dark:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.a
              href="#demo"
              variants={hoverVariant}
              whileHover="hover"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-md bg-primary text-black dark:text-white hover:shadow-lg transition-colors font-medium"
            >
              Request Demo <FiArrowRight />
            </motion.a>

            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variants={hoverVariant}
              whileHover="hover"
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun className="text-white" /> : <FiMoon />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-2xl text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-4/5 h-full bg-white dark:bg-gray-900 md:hidden shadow-xl flex flex-col px-6 py-8 space-y-4 z-50"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="md:hidden relative z-50">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-2xl text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={hoverVariant}
                  whileHover="hover"
                >
                  <Link
                    to={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMenu(item.name);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeMenu === item.name
                        ? "text-[#30FBEF]"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="#demo"
                variants={hoverVariant}
                whileHover="hover"
                className="inline-flex items-center justify-between gap-2 px-4 py-2 rounded-lg shadow-md bg-primary text-black dark:text-white hover:shadow-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Request Demo <FiArrowRight />
              </motion.a>

              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variants={hoverVariant}
                whileHover="hover"
                className="mt-2 w-full flex justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FiSun className="text-white" />
                ) : (
                  <FiMoon />
                )}
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
