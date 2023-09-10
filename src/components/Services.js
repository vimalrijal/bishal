import React, { useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "./Footer";

const Services = () => {
  const child = require("../assets/child.png");
  const adult = require("../assets/adult.png");
  const parent_child = require("../assets/parent_child.png");
  const elderly = require("../assets/elder.png");
  const couple = require("../assets/couple.png");
  const services = [
    {
      name: "Child Insurance",
      price: "$1000",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      image: child,
    },
    {
      name: "Adult Insurance",
      price: "$875",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      image: adult,
    },
    {
      name: "Couple Insurance",
      price: "$1290",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      image: couple,
    },
    {
      name: "Child with Parent Insurance",
      price: "$1499",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      image: parent_child,
    },
    {
      name: "Elderly Insurance",
      price: "$780",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      image: elderly,
    },
  ];

  return (
    <>
      <h1 className="text-cyan-800 text-4xl text-center mt-10 font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-3 mt-4 gap-8">
        {services.map((service, index) => {
          return <ServicesCard data={service} />;
        })}
      </div>
    </>
  );
};

const ServicesCard = (props) => {
  const [isActive, setActive] = useState(1);

  const addClaim = () => {
    isActive
      ? alert("Are you sure you want to claim this insurance")
      : toast("Removed");
    setActive(!isActive);
  };
  const { name, price, image, description } = props.data;
  console.log(props);
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className={`max-w-sm bg-white border-2  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
            isActive ? "border-gray-200" : "border-green-300"
          }`}
        >
          <img className="rounded-t-lg" src={image} alt="" />

          <div className="p-5">
            <div className="flex justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <h1 className="text-slate-500 text-lg ml-10">{price}/year</h1>
            </div>
            <button
              onClick={addClaim}
              type="button"
              className={`${
                isActive
                  ? "text-white bg-cyan-800 hover:bg-cyan-950"
                  : "bg-red-500 text-white hover:bg-red-700"
              } px-5 py-2.5 text-center mr-2 mb-2 rounded-md`}
            >
              {isActive ? "Claim Your Insurance" : "Remove"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
