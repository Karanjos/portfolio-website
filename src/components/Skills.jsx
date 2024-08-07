import { FaArrowRightLong } from "react-icons/fa6";

const Skills = () => {
  return (
    <div
      className="flex justify-center items-center w-full md:px-16 px-1 py-8 mt-10"
      id="skills"
    >
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-stone-950">
          Skills
        </h1>
        <p className="md:text-lg text-md text-stone-900 mt-1">
          Here are some of my skills:
        </p>

        <ul className="grid md:grid-cols-2 grid-cols-1 md:py-12 py-6 md:px-12 px-6 md:gap-16 gap-6 rounded-2xl my-5 bg-stone-950 text-slate-50">
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              React.js {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              JavaScript Library for building UI components and Single Page
              Applications.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              Node.js {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              JavaScript runtime built on Chrome&apos;s V8 JavaScript engine.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold  gap-2">
              Express.js {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              Fast, unopinionated, minimalist web framework for Node.js.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              MongoDB {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              NoSQL database program, using JSON-like documents with optional
              schemas.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              Tailwind CSS {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              Utility-first CSS framework for rapidly building custom designs.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              JavaScript {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              High-level, interpreted programming language that conforms to the
              ECMAScript specification.
            </h4>
          </li>
          {/** write skills like c, c++, c# , java , java development , SQL*/}
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold text-stone-700 gap-2">
              C {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              C is a general-purpose, procedural computer programming language
              supporting structured programming.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              C++ {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              C++ is a general-purpose programming language created as an
              extension of the C programming language.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              C# {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              C# is a general-purpose, multi-paradigm programming language
              developed by Microsoft.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              Java {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              Java is a high-level, class-based, object-oriented programming
              language.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              Java Development {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              Java Development is the process of developing applications using
              the Java programming language.
            </h4>
          </li>
          <li className="rounded-xl shadow-lg shadow-slate-100 p-8">
            <h2 className="flex text-2xl font-bold gap-2">
              SQL {<FaArrowRightLong className="mt-2" />}
            </h2>
            <h4 className="flex items-center gap-2">
              SQL is a domain-specific language used in programming and designed
              for managing data held in a relational database management system.
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
