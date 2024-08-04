import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-stone-950 font-mono bg-gradient-to-r from-blue-200 to-transparent">
      <nav className="flex justify-center items-center py-4">
        <Link to="/">
          <div className="absolute top-5 left-2 text-2xl font-bold">
            <h1 className="text-3xl font-bold text-opacity-75  mx-4 p-2">
              PORTFOLIO
              <span className="animate-ping absolute top-2 left-20 inline-flex w-10 h-10 rounded-full bg-sky-400 opacity-75"></span>
            </h1>
          </div>
        </Link>
        <ul className="fixed top-5 flex gap-8 mx-4 font-light text-xl shadow-lg shadow-stone-900 px-12 py-5 rounded-xl bg-stone-950 text-slate-50">
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
      </nav>
    </header>
  );
};
export default Navbar;
