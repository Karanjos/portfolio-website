const About = () => {
  return (
    <div className="flex flex-col ms-10 mt-12 py-16 md:px-24" id="about">
      <div className="border-e-2 w-96 pe-10">
        <h2 className="text-3xl font-bold my-4 text-stone-900">About Me</h2>
        <p className="text-lg text-stone-700">
          I am a BTech graduate in 2024 expertise in Full Stack Web Developer
          with a background in Computer Science and a passion for technology. I
          have experience in building full stack applications using JavaScript,
          React, Node.js, and Express. I am a quick learner and a problem solver
          who is always looking for ways to improve my skills and knowledge.
        </p>
      </div>
      <div className="w-full flex justify-end">
        <div className="border-s-2 ps-10 mt-10 justify-self-end">
          <h2 className="text-3xl font-bold my-4 text-blue-300">Education</h2>
          <ul>
            <li className="text-lg text-blue-200">
              <h3>Dronacharya Group of Institutions</h3>
              <p>Bachelor of Technology in Computer Science & Engineering</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
