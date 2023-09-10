import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import About from "./components/About";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { Footer } from "./components/Footer";

const App = () => {
  const [issubscribe, setSubscribe] = useState(0);

  const subscribe = () => {
    !issubscribe
      ? toast(
          "you have successfully subscibe to us, we will notify you all the latest news related to insurances"
        )
      : alert("are you sure you want to unsubscribe to us");
    setSubscribe(!issubscribe);
  };
  return (
    <>
      <FaBell
        className={`absolute top-10 right-8 text-xl ${
          issubscribe ? "text-red-500" : "text-slate-800"
        }`}
        onClick={subscribe}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="FAQ" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
