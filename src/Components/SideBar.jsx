import { useState } from "react";
import logoFull from "../assets/icon/logoFull.png";
import home from "../assets/icon/dashboard.png";
import analysis from "../assets/icon/analysis.png";
import ComplaintsIcon from "../assets/icon/ComplaintsIcon.png";
import profile from "../assets/icon/Profile.png";
import setting from "../assets/icon/setting.png";

import dashboard_inactive from "../assets/icon/dashboard_inactive.png";
import analysisActive from "../assets/icon/analysis_active.png";
import complaintsActive from "../assets/icon/complaint_active.png";
import profileActive from "../assets/icon/profile-active.png";

import logOut from "../assets/images/log.png";

const SideBar = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getActiveIcon = (buttonName) => {
    switch (buttonName) {
      case "dashboard":
        return home;
      case "analysis":
        return analysisActive;
      case "complaints":
        return complaintsActive;
      case "profile":
        return profileActive;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white flex flex-col items-center h-screen fixed z-10">
      <div className="m-6 p-5 w-56 pb-16">
        <img src={logoFull} alt="Logo" />
      </div>
      <div className="flex flex-col space-y-8">
        <button
          className={`flex items-center justify-center gap-4 pl-4 pr-16 rounded-md py-2 ${
            activeButton === "dashboard"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => handleButtonClick("dashboard")}
        >
          <img
            className="w-6 h-6"
            src={activeButton === "dashboard" ? home : dashboard_inactive}
            alt="Dashboard Icon"
          />
          <h1 className="text-lg font-medium">Dashboard</h1>
        </button>

        <button
          className={`flex items-center gap-4 pl-4 pr-16 rounded py-2 ${
            activeButton === "analysis"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("analysis")}
        >
          <img
            className="w-6 h-6"
            src={activeButton === "analysis" ? analysisActive : analysis}
            alt="Analysis Icon"
          />
          <h1 className="text-lg font-medium ">Analysis</h1>
        </button>

        <button
          className={`flex items-center gap-4 pl-4 pr-16 rounded py-2 ${
            activeButton === "complaints"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("complaints")}
        >
          <img
            className="w-6 h-6"
            src={
              activeButton === "complaints" ? complaintsActive : ComplaintsIcon
            }
            alt="Complaints Icon"
          />
          <h1 className="text-lg font-medium ">Complaints</h1>
        </button>

        <button
          className={`flex items-center gap-4 pb-3 pl-4 pr-16 rounded py-2 ${
            activeButton === "profile"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("profile")}
        >
          <img
            className="w-6 h-5.5"
            src={activeButton === "profile" ? profileActive : profile}
            alt="Profile Icon"
          />
          <h1 className="text-lg font-medium ">Profile</h1>
        </button>

        <button
          className={`flex items-center gap-4 pl-4 pr-16 rounded py-2 ${
            activeButton === "settings"
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500"
          }`}
          onClick={() => handleButtonClick("settings")}
        >
          <img className="w-6 h-6" src={setting} alt="Settings Icon" />
          <h1 className="text-lg font-medium ">Settings</h1>
        </button>

        <a href="">
          <img
            className="absolute w-56 pl-4 bottom-8"
            src={logOut}
            alt="Logout Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
