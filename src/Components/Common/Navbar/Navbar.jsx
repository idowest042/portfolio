import { AlignJustify, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../../Hooks/useTheme';

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="z-[1000] mx-auto sticky top-4 flex items-center justify-between py-4 px-4 w-11/12 border rounded-xl dark:bg-dark-lite dark:border-none bg-white">
      <div>
        <Link to="/">
          <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
            <span className="text-primary1">
              <span>&lt;</span>I
            </span>
            dowu
            <span className="text-primary2">/&gt;</span>
          </p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="space-x-8 hidden lg:flex">
        <li>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-me" className="nav">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="nav">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-me" className="nav">
            Contact Me
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* <ThemeToggle /> */}
        <button onClick={toggleTheme} className="p-2 rounded-full bg-white dark:bg-gray-700">
          {theme === 'dark' ? <Moon size={24} color="#38BD67" /> : <Sun size={24} color="#38BD67" />}
        </button>

        {/* Resume Button */}
        <div className="max-sm:hidden space-x-3">
          <a className="button" target="_blank" href="https://docs.google.com/document/d/1Yq8v-buO1_gXCxHkQI9KaMqLL_ydmUXz/edit?usp=drivesdk&ouid=118175293247694295744&rtpof=true&sd=true">
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <AlignJustify className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
      </div>

      {/* Dropdown Menu */}
      <aside
        className={`absolute top-[65px] right-0 w-full md:w-4/12 rounded-md transition-transform duration-300 transform bg-white dark:bg-dark-lite p-4 text-center shadow-md ${
          mobileSidebarOpen ? 'translate-y-0 opacity-100 z-[2000]' : 'translate-y-[-200px] opacity-0 z-[-1]'
        }`}>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-me" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/skills" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact-me" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>
              Contact Me
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
