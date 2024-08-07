import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const SocialMediaLinks = () => {
  return (
    <div className="md:text-4xl text-lg fixed md:left-2 left-1 top-64">
      <ul className="flex flex-col gap-4 shadow-md shadow-slate-700 px-2 py-5 rounded-md bg-stone-950 text-slate-50">
        <Link to="https://github.com/Karanjos" target="_blank">
          <li>
            <FaGithub />
          </li>
        </Link>
        <Link
          to="https://www.linkedin.com/in/karan-joshi-8b3910213/"
          target="_blank"
        >
          <li>
            <FaLinkedin />
          </li>
        </Link>
        <Link to="https://x.com/KaranJoshi0901" target="_blank">
          <li>
            <FaTwitter />
          </li>
        </Link>
        <Link
          to="https://www.instagram.com/jo_sh_i_kar_an/?next=%2F"
          target="_blank"
        >
          <li>
            <AiFillInstagram />
          </li>
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100017075889060"
          target="_blank"
        >
          <li>
            <AiFillFacebook />
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default SocialMediaLinks;
