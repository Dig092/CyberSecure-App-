// import React from "react";
import text from "../assets/images/Text.png";
import icon from "../assets/icon/Logo.png";
import facebook from "../assets/icon/facebook.png";
import twitter from "../assets/icon/twitter.png";
import linkedin from "../assets/icon/linkedin.png";
import email from "../assets/icon/emaill.png";
import phone from "../assets/icon/phone.png";
import location from "../assets/icon/location.png";

// const cyb-her = require("../assets/pdfs/cyb-her-handbook.pdf");

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full flex justify-center">
        <div className="w-3/4 py-12 flex justify-between">
          <div className="flex flex-col">
            <img className="w-12 pb-6" src={icon} />
            <a className="flex pb-4">
              <img className="w-6" src={email} alt="" />
              <h1 className="font-semibold">hello@CyberSecure.com</h1>
            </a>
            <a className="flex pb-4">
              <img className="w-6" src={phone} alt="" />
              <h1 className="font-semibold">+91 9058 958 389</h1>
            </a>
            <a className="flex">
              <img className="w-6" src={location} alt="" />
              <h1 className="font-semibold">Jaipur, Rajasthan</h1>
            </a>
          </div>

          <div className="flex gap-24">
            <div className="flex flex-col">
              <a className="font-bold pb-2" href="">
                Home
              </a>
              <a href="">Fraud Categories</a>
              <a href="">Latest Scam Trends</a>
              <a href="">Our FAQ</a>
            </div>
            <div className="flex flex-col">
              <a className="font-bold pb-2" href="">
                About us
              </a>
              <a href="">Resources</a>
              <a href="">Cyber HandBook</a>
              {/* <a href={cyb-her} target="_blank" rel="noopener noreferrer"> HandBook </a> */}
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold pb-2">Social Profiles</h1>
              <div className="flex gap-4">
                <img className="w-12 h-12" src={facebook} alt="" />
                <img className="w-12 h-12" src={twitter} alt="" />
                <img className="w-12 h-12" src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-6 flex justify-center">
        <img className="w-64" src={text} alt="" />
      </div>
    </>
  );
};
export default Footer;
