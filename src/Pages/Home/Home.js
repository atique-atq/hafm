import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../../assets/home-img.png";
import logo from "../../assets/HOME-ARC-BD-LOGO.svg"

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between md:justify-between mt-0 md:mt-12 p-5 mx-2 md:mx-20"
      style={{ minHeight: "100vh" }}
    >
      <div className="mr-6 text-center md:text-left">
        <h1 className="text-slate-900 text-xl font-medium tracking-tight pt-12 mt-8 md:mt-18">
          <TypeAnimation
            sequence={["Welcome to", 2200, "Home Arc BD", 2000]}
            //  Continuing previous Text
            style={{ fontSize: "2em" }}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          .
        </h1>
        <h2 className="text-slate-600 mt-6 text-xl  italic">
          Let’s make our dream come true, <span className="text-transparent bg-clip-text font-bold bg-gradient-to-br from-[#024B37] to-[#1C7C3B]">Together.</span>
        </h2>
        <br />
        <Link to="/services">
          <div className="mt-4 w-32  text-xl font-bold text-info border border-2 border-info rounded-lg px-2 py-1 hover:bg-blue-500 hover:text-black hover:cursor-pointer">
            See Details
          </div>
        </Link>
      </div>

      <div className="w-full md:w-6/12 mt-20 flex justify-center  md:mt-1 md:ml">
        <img className="h-72 md:h-96 rounded-xl" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
