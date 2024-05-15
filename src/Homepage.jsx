// import React from "react";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Video from "./Components/video";
import Trends from "./Components/Trends";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

import hero from "./assets/images/Container.png";
import play from "./assets/images/play.png";
import chatbot from "./assets/icon/Chatbot.png";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Homepage = () => {
  return (
    <div className="bg-[#F2F6FF]">
      <Navbar />

      <div className="heroSection py-16 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-2/5 py-12">
            <img src={hero} />
          </div>
          <div className="flex items-center">
            <button className="bg-[#245BCA] text-white px-4 py-2 rounded-md">
              File a Complaint
            </button>
            <AnchorLink href="#Video"> <img className="w-52 px-3" src={play} /></AnchorLink> 
          </div>
        </div>
      </div>

      <div className="w-24 right-56 bottom-56 z-10 fixed">
        <img src={chatbot} alt="" />
      </div>

      <h1 className="px-52 py-8 font-bold text-2xl">Fraud Categories</h1>
      <div className="flex flex-col items-center">
        <Categories />
      </div>

      <div id="Video" className="flex py-24 justify-center ">
        <Video />
      </div>

      <Trends />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Homepage;
