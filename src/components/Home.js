import React from "react";
import { Footer } from "./Footer";
import Modal from "react-modal";

const Home = () => {
  const homeImage = require("../assets/Home.jpg");
  return (
    <>
      <div className="mt-10 w-screen h-screen">
        <div className="grid grid-cols-2">
          <div className="col-span-1  h-[60%] px-28 py-16">
            <h1 className="text-5xl font-semibold text-cyan-800">
              Your Future Our Commitment!
            </h1>
            <p className="mt-10 text-cyan-900">
              Welcome to CLI, your trusted partner in safeguarding your family's
              future. At CLI, we understand that life is full of uncertainties,
              and that's why we're here to provide you with peace of mind. Our
              comprehensive life insurance solutions are designed to protect
              your loved ones and secure your legacy. Explore our range of
              customizable policies, expert advice, and exceptional customer
              service that have made us a leading name in life insurance. Take
              the first step towards a more secure tomorrow with us.
            </p>
          </div>

          <div className="col-span-1 h-[60%]">
            <img src={homeImage} />
          </div>
        </div>

        <div className="w-full mt-20">
          <h1 className="text-5xl text-cyan-800 text-center font-semibold">
            Our Services
          </h1>
          <div className="flex justify-around mt-10">
            {["Child", "Adult", "Elderly", "Couple", "Parent & Child"].map(
              (item, index) => {
                return (
                  <button className="bg-cyan-800 px-14 py-6 rounded-md text-white font-medium text-xl hover:bg-white border-2 border-white hover:border-2 hover:border-cyan-800 hover:cursor-pointer hover:text-cyan-800 hover:scale-105 ease-in transition-transform">
                    {item}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
