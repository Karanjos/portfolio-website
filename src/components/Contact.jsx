// import nodemailer from "nodemailer";

import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // Use `true` for port 465, `false` for all other ports
  //   auth: {
  //     user: "maddison53@ethereal.email",
  //     pass: "jn7jnAPss4f63QBp6D",
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };
  return (
    <div className="flex justify-center items-center gap-20 w-full px-16 py-8 mt-10">
      <div className="">
        <h1 className="text-4xl font-bold text-stone-900">
          Let&apos;s connect!
        </h1>
        <p className="text-lg text-stone-700 mt-1">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="my-5">
        <h1 className="flex gap-2 items-center text-2xl font-bold text-stone-900 my-10">
          Contact Me {<FaArrowRightLong />}
        </h1>
        <form className="grid grid-cols-2 gap-16 text-stone-950 w-1/3 text-nowrap">
          <div className="flex flex-col gap-12 font-semibold text-lg">
            <label htmlFor="name">Name :</label>
            <label htmlFor="email">Email :</label>
            <label htmlFor="message">Message :</label>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name here..."
              className="w-72 px-2 py-3 rounded-full outline-none bg-gradient-to-r from-slate-300 to-slate-200"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here..."
              className="w-72 px-2 py-3 rounded-full outline-none bg-gradient-to-r from-slate-300 to-slate-200"
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message here..."
              className="w-72 px-2 py-3 rounded-3xl outline-none bg-gradient-to-r from-slate-300 to-slate-200"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-40 col-start-2 py-2 bg-stone-950 text-stone-50 rounded-full font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
