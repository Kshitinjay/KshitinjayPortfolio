import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1sk9HbQIGO5ebwYTP1EZeL16c3uoLJq73/view?usp=sharing', '_blank');
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm z-50 transition-colors border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-secondary">
            Kshitinjay Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
              title="Download Resume"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary hover:bg-tertiary dark:hover:bg-[#2a2a2a] transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-textPrimary dark:text-white hover:bg-tertiary dark:hover:bg-[#2a2a2a] transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            <button
              className="text-textPrimary dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleResumeClick();
                  setIsOpen(false);
                }}
                className="flex items-center px-3 py-2 text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 