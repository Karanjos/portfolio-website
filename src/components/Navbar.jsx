import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-stone-900 font-mono bg-gradient-to-r from-blue-200 to-transparent">
      <nav className="flex justify-center items-center py-4">
        <Link to="/">
          <div className="absolute top-6 left-2 text-2xl font-bold">
            <h1 className="text-3xl font-semibold text-opacity-75  mx-4 p-2">
              PORTFOLIO
              <span className="animate-ping absolute top-4 left-20 inline-flex w-10 h-10 rounded-full bg-sky-400 opacity-75"></span>
            </h1>
          </div>
        </Link>
        <ul className="flex gap-8 mx-4 font-semibold text-xl shadow-lg shadow-slate-700 px-12 py-5 rounded-xl bg-gradient-to-r from-slate-400 to-slate-400">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
