import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Footer from "./components/Footer";
import Landing from "./ui/Landing";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <section className="flex items-center gap-8 bg-gradient-to-r from-blue-200 to-transparent -pt-20">
        <SocialMediaLinks />
        <div className="ms-20 w-full">
          <Outlet />
        </div>
      </section>
      <Footer /> */}
      <Landing />
    </>
  );
};

export default App;
