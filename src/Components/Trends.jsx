import React from "react";

import img from "../assets/images/Image.png";
import archive from "../assets/icon/archive-add.png";

const Trends = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-3/4 flex flex-col ">
        <h1 className="text-2xl font-bold pb-4">Latest Scam trends</h1>
        <div className="flex justify-between">
          <h1 className="w-3/4">
            Your ally in navigating the digital world safely! Sharing insights
            on the latest scams, blending tech wisdom with everyday know-how.
            Committed to your online well-being and growth.
          </h1>
          <button className="bg-white px-4 py-2 rounded-lg">View All</button>
        </div>
      </div>

      <div className="cardHolder mt-12 w-3/4 flex justify-center">
        <div className="card w-2/4 m-4 rounded-md flex flex-col items-center bg-white">
          <div className="w-11/12 mt-6">
            <img src={img} />
          </div>
          <div className="flex gap-72 py-4">
            <div className="flex gap-4">
              <h1>29 March 2024</h1>
              <h1>14:31</h1>
            </div>
            <img className="w-6" src={archive} alt="" />
          </div>
          <h1 className="w-11/12 font-semibold py-2">"Deepfakes": The Scary New Scam Using Artificial Intelligence</h1>
          <h1 className="w-11/12 text-sm">
            Deepfakes, which are increasingly utilized in scams, are phony
            computer-generated audio or video representations of a genuine
            person. It might be compared to a fusion of animation and
            photorealistic art.
          </h1>
          <button className="bg-[#F7F7F8] py-2 px-52 mt-4 mb-6">Read Now</button>
        </div>

        <div className="card w-2/4 m-4 flex flex-col items-center bg-white">
          <div className="w-11/12 mt-6">
            <img src={img} />
          </div>
          <div className="flex gap-72 py-4">
            <div className="flex gap-4">
              <h1>29 March 2024</h1>
              <h1>14:31</h1>
            </div>
            <img className="w-6" src={archive} alt="" />
          </div>
          <h1 className="w-11/12 font-semibold py-2">"Deepfakes": The Scary New Scam Using Artificial Intelligence</h1>
          <h1 className="w-11/12 text-sm">
            Deepfakes, which are increasingly utilized in scams, are phony
            computer-generated audio or video representations of a genuine
            person. It might be compared to a fusion of animation and
            photorealistic art.
          </h1>
          <button className="bg-[#F7F7F8] py-2 px-52 mt-4 mb-6">Read Now</button>
        </div>
      </div>
    </div>
  );
};
export default Trends;
