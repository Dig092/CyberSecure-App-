// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png"

const Navbar = () => {
    return(
        <>
        <div className="NavBar flex justify-center items-center">
            <div className="logo w-72 px-8 py-4">
                <img src={logo} />
            </div>
            <div className="centerBar px-8 py-4">
                <a className="px-4" href="">Home</a>
                <a className="px-4" href="">About Us</a>
                <a className="px-4" href="">Track Your Complaint</a>
                <a className="px-4" href="">Cyber Comics</a>
                <a className="px-4" href="">Contact Us</a>
            </div>
            <div className="buttons px-8 py-4">
                <button className="px-4">User Login</button>
                <Link to="/AdminLogin"> <button className="bg-[#245BCA] text-white px-4 py-2 rounded-md">Admin Login</button> </Link>
            </div>
        </div>
        </>         
    )
};
export default Navbar;