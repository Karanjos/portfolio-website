import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-stone-950 font-mono bg-gradient-to-r from-blue-200 to-transparent">
      <nav className="flex md:justify-center justify-end items-center py-4">
        <Link to="/">
          <div className="absolute md:top-5 top-0.5 md:left-2 left-0.5 text-2xl font-bold">
            <h1 className="text-3xl font-bold text-opacity-75  md:mx-4 p-2">
              PORTFOLIO
              <span className="animate-ping absolute top-2 left-20 inline-flex w-10 h-10 rounded-full bg-sky-400 opacity-75"></span>
            </h1>
          </div>
        </Link>

        <ul className="fixed top-5 gap-8 mx-4 font-light text-xl shadow-lg shadow-stone-900 px-12 py-5 rounded-xl bg-stone-950 text-slate-50 hidden md:flex">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <div className="fixed top-5 right-2 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-3 right-2"
          >
            <FaBars />
          </button>
          {
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } flex-col gap-4 font-light text-xl shadow-lg shadow-stone-900 px-12 py-5 rounded-xl bg-stone-950 text-slate-50 md:hidden`}
            >
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          }
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
