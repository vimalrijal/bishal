import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const homeImage = require("../assets/about.jpg");
  const history = require("../assets/history.jpg");

  return (
    <div className="mt-10 w-screen h-screen">
      <div className="grid grid-cols-2">
        <div className="col-span-1  h-[60%] px-28 py-16">
          <h1 className="text-5xl font-semibold text-cyan-800">About Us</h1>
          <p className="mt-10 text-slate-500">
            We’ve been here for nearly 80 years. Learn about our corporate
            governance, annual results and what we stand for
          </p>
          <button
            onClick={() => navigate("/services")}
            className="border-2 border-cyan-800 px-3 py-2 mt-2 rounded-md hover:bg-cyan-800 hover:text-white"
          >
            Explore Insurances
          </button>
        </div>

        <div className="col-span-1 h-[60%]">
          <img src={homeImage} />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-10">
        <div className="col-span-1 h-[60%]">
          <img src={history} />
        </div>
        <div className="col-span-1  h-[60%] px-28 py-16">
          <h1 className="text-5xl font-semibold text-cyan-800">Our History</h1>
          <p className="mt-10 text-slate-500">
            At CLI, our journey through time has been marked by a deep
            commitment to securing futures and protecting what matters most. Our
            history is a testament to our unwavering dedication to our
            customers, innovation, and the pursuit of financial security. As we
            take you through our remarkable journey, you'll discover the
            milestones that have shaped us into the trusted life insurance
            provider we are today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
