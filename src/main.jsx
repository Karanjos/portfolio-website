import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Project from "./components/Project.jsx";
// import Skills from "./components/Skills.jsx";
// import Contact from "./components/Contact.jsx";
// import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
