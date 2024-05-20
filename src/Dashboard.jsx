import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./Components/SideBar";
import MainBar from "./Components/MainBar";
import ComplaintList from "./Components/ComplaintList";
// import { useTranslation } from "react-i18next";

import active from "./assets/icon/active.png";
import suspended from "./assets/icon/suspended.png";
import resolved from "./assets/icon/resolved.png";
import user from "./assets/icon/user.png";
import location from "./assets/icon/LocationIcon.png";
import articles from "./assets/icon/articles.png";

import chatbot from "./assets/images/Chatbot.png";
import CTA from "./assets/images/CTA.png";
import chart from "./assets/images/chart.png";

// const languages = [
//   { value: "", text: "Options" },
//   { value: "en", text: "English" },
//   { value: "hi", text: "Hindi" },
//   { value: "bn", text: "Bengali" },
// ];

const Dashboard = () => {
  const [complaints, setComplaints] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cybersecure.onrender.com/v1/admin/getComplaints",
          { withCredentials: true }
        );
        setComplaints(response.data.complaints);
      } catch (error) {
        console.error("Error fetching complaints", error);
      }
    };
    fetchData();
  }, []);

  

  const handleVerifyComplaint = (verifiedComplaint) => {
    setComplaints((prevComplaints) =>
      prevComplaints.filter(
        (complaint) => complaint._id !== verifiedComplaint._id
      )
    );
  };

  return (
    <div className="bg-[#F2F6FF] flex h-full">
      <SideBar />

      <div className="flex flex-col h-full">
        <MainBar />
        <div className="CenterBar flex bg-[#F2F6FF] absolute top-28 right-0 ">
          <div className="CenterLeftBar flex flex-col items-center m-6">
            <div className="flex">
              <div className="flex items-center cursor-pointer bg-white mb-6 mr-4 pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={active} alt="" />
                <div>
                  <h1>Active Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
              <div className="flex items-center cursor-pointer bg-white mb-6 mx-4 pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={suspended} alt="" />
                <div>
                  <h1>Suspended Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
              <div className="flex items-center cursor-pointer bg-white mb-6 ml-4 pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={resolved} alt="" />
                <div>
                  <h1>Resolved Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col w-full px-4 rounded-2xl">
              <div className="flex items-center justify-between px-4">
                <div className="text-xl font-bold my-6">Complaint List</div>
                <button>
                  <img className="w-24" src={CTA} alt="" />
                </button>
              </div>
              <ComplaintList
                complaints={complaints || []} // Use an empty array if complaints is null
                onVerify={handleVerifyComplaint}
              />
            </div>
            <img className="w-full h-96 pt-6" src={chart} alt="" />
          </div>
          <div className="CenterRightBar flex flex-col items-center">
            <div className="bg-white rounded-2xl flex flex-col items-center p-12 mt-6 h-2/5 w-72">
              <div className="flex flex-col items-center">
                <img className="w-24 pb-4" src={user} alt="" />
                <h1 className="text-2xl font-medium ">Dhruval Gupta</h1>
                <div className="flex items-center gap-x-1.5">
                  <img className="w-3" src={location} alt="" />
                  <h1 className="text-[#A3AED0]">Rajasthan, India</h1>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-7 mt-6 h-48 w-72">
              <img className="rounded-lg h-36" src={articles} alt="" />
              <h1 className="absolute text-3xl font-semibold text-white">
                Articles
              </h1>
            </div>

            <div className="bg-white rounded-2xl flex flex-col items-center justify-center mt-6 h-72 w-72">
              <img className="rounded-lg" src={chatbot} alt="" />
              <h1 className="absolute text-center w-64 bottom-48 text-2xl font-semibold text-white">
                Ask Your Queries from CyberMitr
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
