import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-center gap-8 bg-gradient-to-r from-blue-200 to-transparent -pt-20">
        <SocialMediaLinks />
        <div className="ms-20 w-full">
          <Hero />
          <About />
          <Project />
          <Skills />
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Landing;
