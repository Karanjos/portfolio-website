import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="w-full md:px-16 px-1 py-8 mt-10" id="projects">
      <h1 className="md:text-4xl text-2xl font-bold text-stone-950">
        Projects
      </h1>
      <p className="md:text-lg text-md text-stone-900 mt-1">
        Here are some of my projects:
      </p>
      {/* shadow-lg shadow-slate-700*/}
      <ul className="grid md:grid-cols-2 grid-cols-1 md:py-12 py-6 md:px-12 px-6 md:gap-16 gap-6 rounded-2xl my-5 bg-stone-950 text-slate-50">
        <li className="rounded-xl shadow-lg shadow-slate-100 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">Placement Portal ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-100 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">E-Commerce Website ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">Weather App ( Reactjs Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} Reactjs, Node.js, Express,
            Tailwind CSS.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-100 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">Password Generator Website ( JavaScript Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            JavaScript, Tailwind CSS.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-100 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">Blog App ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-100 p-4">
          <h2 className="text-2xl font-bold my-4">
            <Link to="">E-Auth App ( MERN Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="">Description of the project goes here.</p>
          </figure>
        </li>
      </ul>
    </div>
  );
};
export default Project;
