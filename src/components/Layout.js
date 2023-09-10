import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isActive, setActive] = useState();
  return (
    <div className="">
      <nav classNameName="bg-red-400 border-gray-200 dark:bg-gray-900 ">
        <div classNameName="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:block md:w-aut" id="navbar-default">
            <ul className="  font-medium flex flex-col text-xl justify-center mt-10   border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-cyan-800  text-3xl font-bold mr-[700px]"
                >
                  Credence Life Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-500"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-500"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
