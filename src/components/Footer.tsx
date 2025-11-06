const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#2a2a2a] py-8 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-textSecondary dark:text-[#8892b0] mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary dark:text-[#8892b0] hover:text-teal-600 dark:hover:text-secondary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 