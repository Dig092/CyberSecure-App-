import { useState } from "react";

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAnswer = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="flex justify-center items-center w-full py-24">
      <div className="flex justify-around w-3/4 rounded-lg bg-white">
        <div className="p-12 w-2/4">
          <h2 className="font-semibold w-72 lg:text-3xl text-3xl lg:leading-9 md:leading-7 leading-9">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
            <p className="font-normal w-48 text-sm leading-6 lg:w-8/12 md:w-9/12">
              Still have any questions? Contact our Team via
              support@CyberSecure.com
            </p>
          </div>
          <button className="bg-[#4E82EA30] px-4 py-2 rounded-md my-8">
            View All
          </button>
        </div>

        <div className="flex md:flex-row flex-col w-2/4 md:space-x-8 md:mt-16 mt-8">
          {/* Example Section */}
          <div className=" w-3/4 md:mt-0 sm:mt-14 mt-10">
            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-lg leading-5 text-gray-800">
                  How does identity theft occur ?
                </h3>
                <button
                  aria-label="Toggle Shipping Answer"
                  className="text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => toggleAnswer(1)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path1"
                      className=""
                      d="M10 4.1665V15.8332"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="para1"
                className={`${
                  openSection === 1 ? "block" : "hidden"
                } font-normal dark:text-gray-700 text-sm leading-6 text-gray-600 mt-4 w-11/12 lowercase`}
              >
                1. fraudsters MAY CALL YOU ON THE PHONE, CLAIMING TO BE FROM A
                BANK OR ASKING FOR money. <hr />
                2. SCAMMER MAY SEND DECEPTIVE MALICIOUS E-MAILS TO STEAL YOUR
                CREDENTIALS. <hr />
                3. OFFENDERS CAN CLONE YOUR CREDIT/DEBIT CARD INFORMATION
              </p>
            </div>

            <hr className="my-7 bg-gray-200" />

            {/* Returns Section */}
            <div className="md:w-7/12 lg:w-full w-full md:mt-0 sm:mt-14 mt-10">
              <div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-semibold text-lg leading-5 text-gray-800">
                    How to protect yourself from identity theft ?
                  </h3>
                  <button
                    aria-label="Toggle Returns Answer"
                    className="text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleAnswer(2)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="path1"
                        className=""
                        d="M10 4.1665V15.8332"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16602 10H15.8327"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <p
                  id="para2"
                  className={`${
                    openSection === 2 ? "block" : "hidden"
                  } font-normal dark:text-gray-700 text-sm leading-6 text-gray-600 mt-4 w-11/12 lowercase`}
                >
                  1. CREATE UNIQUE, COMPLEX PASSWORDS THAT INCLUDE A DOZEN
                  LETTERS, NUMBERS, AND SYMBOLS. <hr />
                  2. ENABLE TWO-FACTOR AUTHENTICATION. <hr />
                  3. CHECK YOUR FINANCIAL ACCOUNTS OFTEN. <hr />
                  4. SET UP ALERTS ON YOUR BANKING AND CREDIT CARD ACCOUNTS.{" "}
                  <hr />
                  5. DON T CLICK LINKS FROM UNTRUSTED SOURCES. <hr />
                  6. NEVER GIVE OUT YOUR PERSONAL INFORMATION. <hr />
                  7. SHRED DOCUMENTS BEFORE THROWING THEM AWAY. <hr />
                  8. CHOOSE PAPERLESS BILLING METHOD
                </p>
              </div>
            </div>

            <hr className="my-7 bg-gray-200" />

            {/* Exchange Section */}
            <div className="md:w-7/12 lg:w-full w-full md:mt-0 sm:mt-14 mt-10">
              <div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-semibold text-lg leading-5 text-gray-800">
                    How to defeat a troll ?
                  </h3>
                  <button
                    aria-label="Toggle Exchange Answer"
                    className="text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleAnswer(3)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="path1"
                        className=""
                        d="M10 4.1665V15.8332"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16602 10H15.8327"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <p
                  id="para3"
                  className={`${
                    openSection === 3 ? "block" : "hidden"
                  } font-normal dark:text-gray-400 text-sm leading-6 text-gray-600 mt-4 w-11/12 lowercase`}
                >
                  1. DONT FEED THE TROLLS, IGNORE THE STATEMENTS OR REMARKS MADE BY THE TROLL.  <hr />
                  2. IF SPAMMED BY SUCH TROLLS, YOU CAN OPT
                  TO REPORT THEM. THEY CAN BE SUSPENDED OR BANNED DEPENDING ON THE SITES POLICIES.  <hr />
                  3. NEVER TAKE TROLLS SERIOUSLY AS EXCITEMENT DEPENDS ON BRINGING PEOPLE DOWN EMOTIONALLY AND MENTALLY.
                </p>
              </div>
            </div>

            <hr className="my-7 bg-gray-200" />

            {/* Tracking Section */}
            <div className="md:w-7/12 lg:w-full w-full md:mt-0 sm:mt-14 mt-10">
              <div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-semibold text-lg leading-5 text-gray-800">
                    How hacking can be harmful ?
                  </h3>
                  <button
                    aria-label="Toggle Tracking Answer"
                    className="text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleAnswer(4)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="path1"
                        className=""
                        d="M10 4.1665V15.8332"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16602 10H15.8327"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <p
                  id="para4"
                  className={`${
                    openSection === 4 ? "block" : "hidden"
                  } font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12`}
                >
                  Information about tracking orders. Explain how customers can
                  track their orders and any relevant details about the tracking
                  process.
                </p>
              </div>
            </div>

            <hr className="my-7 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
