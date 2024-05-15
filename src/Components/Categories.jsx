// import React from "react";

import fin from "../assets/icon/fin.png";
import breach from "../assets/icon/breach.png";
import crypto from "../assets/icon/crypto.png";
import women from "../assets/icon/women.png";
import social from "../assets/icon/social.png";
import emerging from "../assets/icon/emerging.png";

import job from "../assets/icon/Job Fraud.png";
import denial from "../assets/icon/denial.png";
import loan from "../assets/icon/Loan Fraud.png";
import insurance from "../assets/icon/Insurance Fraud.png";
import shopping from "../assets/icon/Online Shopping Fraud.png";

import lottery from "../assets/icon/lottery.png";
import email from "../assets/icon/email.png";
import sim from "../assets/icon/Sim Swapping.png";
import costumer from "../assets/icon/Customer care.png";
import tower from "../assets/icon/tower.png";
import ransomware from "../assets/icon/Ransomware.png";

const Categories = () => {
    return (
        <div className="flex flex-col items-center justify-around bg-white w-3/4 rounded-lg">
            <div className="flex w-full justify-around pt-8">
                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={fin} alt="" />
                    <h1>Financial Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={breach} alt="" />
                    <h1>Data Breach</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={crypto} alt="" />
                    <h1>Crypto Scam</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={women} alt="" />
                    <h1>Women/child</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={social} alt="" />
                    <h1 className="w-24 text-center leading-5">Social Media Crimes</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={emerging} alt="" />
                    <h1>Emerging Threats</h1>
                </a>
            </div>

            <div className="w-11/12 py-10 flex justify-around items-center">
                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={job} alt="" />
                    <h1>Job Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={denial} alt="" />
                    <h1>Denial of Service</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={loan} alt="" />
                    <h1>Loan Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={insurance} alt="" />
                    <h1>Insurance Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={shopping} alt="" />
                    <h1 className="w-32 text-center leading-5">Online Shopping Fraud</h1>
                </a>
            </div>

            <div className="flex w-full justify-around pb-8">
                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={lottery} alt="" />
                    <h1 className="w-24 text-center leading-5">Lottery/Prize Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={email} alt="" />
                    <h1>Email Hacking</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={sim} alt="" />
                    <h1 className="w-28 text-center leading-5" >Sim Swapping Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={costumer} alt="" />
                    <h1 className="w-28 text-center leading-5" >Costumer Care Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={tower} alt="" />
                    <h1 className="w-32 text-center leading-5">Tower Installation Fraud</h1>
                </a>

                <a className="flex items-center hover:cursor-pointer">
                    <img className="w-10 px-2" src={ransomware} alt="" />
                    <h1 className="w-24 text-center leading-5">Ransomware Attack</h1>
                </a>
            </div>
        </div>
    )
};
export default Categories;