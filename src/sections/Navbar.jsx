import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    onClick && onClick();
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-6 sm:gap-8 items-center font-semibold text-lg tracking-wide">
      <li className="nav-li">
        <a
          className="nav-link relative text-neutral-300 hover:text-white transition-all duration-300 font-medium tracking-wider after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link relative text-neutral-300 hover:text-white transition-all duration-300 font-medium tracking-wider after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          href="#about"
          onClick={(e) => handleClick(e, '#about')}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link relative text-neutral-300 hover:text-white transition-all duration-300 font-medium tracking-wider after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          href="#work"
          onClick={(e) => handleClick(e, '#work')}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link relative text-neutral-300 hover:text-white transition-all duration-300 font-medium tracking-wider after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40 shadow-md">
      <div className="mx-auto c-space max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo / Brand */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight transition-colors text-white hover:text-gray-300 font-serif"
          >
            Qasim
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt="menu toggle"
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-primary/90 backdrop-blur-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <nav className="pb-6 pt-4">
            <Navigation onClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;