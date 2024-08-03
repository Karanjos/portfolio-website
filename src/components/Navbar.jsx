import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow-lg shadow-gray-500/100 text-blue-200 font-mono bg-gradient-to-l from-blue-200 to-transparent">
      <nav className="flex justify-between items-center py-4">
        <Link to="/">
          <div className="text-2xl font-bold">
            <h1 className="text-3xl font-semibold text-opacity-75  mx-4 p-2">
              PORTFOLIO
              <span className="animate-ping absolute top-4 left-20 inline-flex w-10 h-10 rounded-full bg-sky-400 opacity-75"></span>
            </h1>
          </div>
        </Link>
        <ul className="flex gap-4 text-stone-900 mx-4 font-semibold text-xl">
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
