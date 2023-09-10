import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Footer } from "./Footer";

const Contact = () => {
  const [error, setError] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({
    textColor: "",
    text: "",
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
      setError(0);
      setEmail("");
      toast("we have sent a message!");
      setMessage({
        textColor: "text-green-500",
        text: "We have sent you an email with all the details",
      });
    } else {
      setError(1);
      setEmail("");
      toast("Invalid email id!");

      setMessage({
        textColor: "text-red-600",
        text: "Invalid Email ID",
      });
    }
  };
  return (
    <>
      <div className="mt-10 bg-cyan-800  h-screen">
        <div className="flex flex-col justify-center h-[90%] items-center">
          <p className="text-white font-light italic">
            enter your email id, we will soon provide you all the details
          </p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className={`${
              error ? "placeholder:text-red-600" : ""
            } w-[50%] p-10 rounded-xl placeholder:text-3xl mt-2`}
            placeholder={`${
              error
                ? "Wrong Email:  example: john@gmail.com"
                : "Enter your Email..."
            }`}
          />
          <button
            className=" bg-green-300 mt-10 px-10 py-4 rounded-md text-xl font-semibold hover:bg-green-500 hover:text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {/* <p className={`${message.textColor}`}>{message.text}</p> */}
        </div>
        {/* <ToastContainer /> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
