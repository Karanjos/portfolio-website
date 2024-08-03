import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full text-stone-900">
      <div className="flex justify-between items-center h-full gap-8 ">
        <div className="flex flex-col gap-4 md:px-10">
          <div className="">
            <h1 className="text-5xl font-semibold my-2">
              Hi, I&apos;m <span className="font-extrabold">Karan Joshi</span>
            </h1>
            <p className="text-xl font-semibold">
              I&apos;m a <span className="">Full stack software developer</span>
            </p>
          </div>
          <Link to="" className="">
            <span className="flex items-center py-1 gap-2 font-bold">
              Get in touch <FaArrowRightLong />
            </span>
          </Link>
        </div>
        <div className="">
          <img src="./bg.png" alt="" className="brightness-150" width={500} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
