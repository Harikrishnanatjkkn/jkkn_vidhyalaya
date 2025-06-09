import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  title: string;
  link?: string;
  submenu?: { title: string; link: string }[];
}

const navItems: NavItem[] = [
  { title: 'Home', link: '/' },
  {
    title: 'About Us',
    submenu: [
      { title: 'Welcome to JKKN', link: '/about/welcome' },
      { title: 'Vision and Mission', link: '/about/vision-mission' },
      { title: 'Why JKKN', link: '/about/why-jkkn' },
      { title: 'Management', link: '/about/management' },
      { title: "Chairman's Message", link: '/about/chairmans-message' },
    ],
  },
  {
    title: 'Academics',
    submenu: [
      { title: 'Curriculum', link: '/academics/curriculum' },
      { title: 'Academic Calendar', link: '/academics/calendar' },
      { title: 'Timings', link: '/academics/timings' },
      { title: 'Clubs', link: '/academics/clubs' },
    ],
  },
  {
    title: 'Admission',
    submenu: [
      { title: 'Admission Process', link: '/admission/process' },
    ],
  },
  { title: 'Mandatory Public Disclosure', link: '/disclosure' },
  { title: 'Infrastructure', link: '/infrastructure' },
  { title: 'Life @ JKKN', link: '/life-at-jkkn' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/jkkn_logo.png"
              alt="JKKN Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className={`px-3 py-2 transition-colors duration-200 flex items-center space-x-1 
                      ${location.pathname === item.link 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{item.title}</span>
                    {item.submenu && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                )}
                {item.submenu && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.link}
                        className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600
                          ${location.pathname === subItem.link 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-gray-700'}`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.link ? (
                      <Link
                        to={item.link}
                        className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600
                          ${location.pathname === item.link 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-gray-700'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.title ? null : item.title
                            )
                          }
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                          {item.submenu && (
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.title ? 'transform rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </button>
                        {item.submenu && activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-gray-50 py-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.link}
                                className={`block px-8 py-2 text-sm hover:bg-blue-50 hover:text-blue-600
                                  ${location.pathname === subItem.link 
                                    ? 'text-blue-600 bg-blue-50' 
                                    : 'text-gray-600'}`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 