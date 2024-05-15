import { useState, useEffect,useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AdminVerify = () => {
    const navigate = useNavigate();
    const [verificationCodes, setVerificationCodes] = useState(["", "", "", ""]);
    const [userEmail, setUserEmail] = useState("");
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  
    useEffect(() => {
      // Retrieve email from local storage
      const storedEmail = localStorage.getItem("userEmail");
      setUserEmail(storedEmail);
    }, []);
  
    const handleVerify = async (e) => {
      e.preventDefault();
  
      try {
        // Concatenate verification codes into a single string
        const concatenatedOtp = verificationCodes.join("");
  
        const response = await axios.post(
          "https://cybersecure.onrender.com/v1/admin/verifyOtp",
          {
            email: userEmail,
            otp: concatenatedOtp,
          },
          {
            withCredentials: true,
          }
        );
  
        // Assuming the API returns success status
        if (response.status === 200 || response.status === 201) {
          // // Store the access token in context
          // const accessToken = response.data.accessToken;
          // setAuthData(accessToken);
  
          toast.success("Account verified successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/Dashboard");
        } else {
          toast.error("Verification failed. Please try again.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        toast.error("Error verifying account. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error("Verification Error:", error);
      }
    };
  
    const handleInputChange = (index, value) => {
      const newCodes = [...verificationCodes];
      newCodes[index] = value;
      setVerificationCodes(newCodes);
  
      // Move focus to the next input
      if (index < inputRefs.length - 1 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    };

  return (
    <>
      <Navbar />

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>{userEmail}</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                      {verificationCodes.map((code, index) => (
                        <div className="w-16 h-16" key={index}>
                          <input
                            ref={inputRefs[index]}
                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            type="text"
                            maxLength="1"
                            name={`digital${index + 1}`}
                            value={code}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        onClick={handleVerify}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didnt receive the code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminVerify;
