import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="w-full px-16 py-8 mt-10">
      <h1 className="text-4xl font-bold text-stone-900">Projects</h1>
      <p className="text-lg text-stone-700 mt-1">
        Here are some of my projects:
      </p>
      {/* shadow-lg shadow-slate-700*/}
      <ul className="grid grid-cols-2  py-8 px-12 gap-16 rounded-lg my-5">
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">Placement Portal ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">E-Commerce Website ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">Weather App ( Reactjs Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} Reactjs, Node.js, Express,
            Tailwind CSS.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">Password Generator Website ( JavaScript Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            JavaScript, Tailwind CSS.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">Blog App ( Full Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
        <li className="rounded-xl shadow-lg shadow-slate-900 p-4 bg-gradient-to-r from-stone-500 to-blue-200">
          <h2 className="text-2xl font-bold my-4 text-stone-700">
            <Link to="">E-Auth App ( MERN Stack Project )</Link>
          </h2>
          <h4 className="flex items-center gap-2 text-stone-700">
            Technologies used {<FaArrowRightLong />} React, Node.js, Express,
            MongoDB, Tailwind CSS, and Render for deployment.
          </h4>
          <figure>
            <img src="./bg.png" alt="" className="rounded-lg" width={200} />
            <p className="text-stone-900">
              Description of the project goes here.
            </p>
          </figure>
        </li>
      </ul>
    </div>
  );
};
export default Project;
