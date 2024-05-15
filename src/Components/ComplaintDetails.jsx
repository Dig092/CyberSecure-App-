import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ComplaintDetails = ({ selectedComplaint, onClose }) => {
  const [readConfirmation, setReadConfirmation] = useState(false);
  const [showDenyPopup, setShowDenyPopup] = useState(false);
  const [dismissalReason, setDismissalReason] = useState("");

  const handleCheckboxChange = () => {
    setReadConfirmation(!readConfirmation);
  };

  // const handleVerifyClick = async () => {
  //   if (readConfirmation) {
  //     try {
  //       // Prepare data for the API request
  //       const requestData = {
  //         acknowledgementNumber: selectedComplaint.acknowledgementNumber,
  //         verificationStatus: true,
  //         dismissalStatus: false,
  //         dismissalReason: "Reason for dismissal",
  //         actionTaken: "Resolved",
  //         bankName: selectedComplaint.bankName,
  //         holderName: selectedComplaint.holderName,
  //         accountNumber: selectedComplaint.accountNumber,
  //         branch: selectedComplaint.branch,
  //         freezeReason: selectedComplaint.freezeReason,
  //       };

  //       // Make the API request
  //       const response = await axios.post(
  //         "https://cyber-secure.onrender.com/v1/admin/verifyComplaint",
  //         requestData,
  //         { withCredentials: true }
  //       );
  //       onClose();
  //     } catch (error) {
  //       console.error("Error verifying complaint:", error);
  //       // Handle error as needed
  //     }
  //   }
  // };

  const handleDismissalReasonChange = (e) => {
    setDismissalReason(e.target.value);
  };

  const handleDenyConfirm = async () => {
    try {
      // Prepare data for the API request
      const requestData = {
        acknowledgementNumber: selectedComplaint.acknowledgementNumber,
        verificationStatus: false,
        dismissalStatus: true,
        dismissalReason: dismissalReason,
        actionTaken: "suspended",
        bankName: selectedComplaint.bankName,
        holderName: selectedComplaint.holderName,
        accountNumber: selectedComplaint.accountNumber,
        branch: selectedComplaint.branch,
        freezeReason: selectedComplaint.freezeReason,
      };

      // Make the API request
      const response = await axios.post(
        "https://cyber-secure.onrender.com/v1/admin/verifyComplaint",
        requestData,
        { withCredentials: true }
      );

      // Log the response (adjust as needed)
      console.log("Verification response:", response.data);

      // Close the details modal
      onClose();
    } catch (error) {
      console.error("Error verifying complaint:", error);
      // Handle error as needed
    }
    setShowDenyPopup(false);
  };

  const handleDenyCancel = () => {
    setShowDenyPopup(false);
  };

  return (
    <div className="absolute top-6 left-6 w-full h-full overflow-y-auto p-4 bg-white rounded-3xl z-4">
      <div className="flex flex-col pl-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={onClose}
        >
          Close Details
        </button>
        <h1 className="font-bold text-2xl py-4">Complaint Details</h1>
        <div className="flex gap-x-20">
          <div className="">
            <img
              className="w-64 h-32 object-contain"
              src={selectedComplaint.nationalIdImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1>
              
              <span className="font-semibold text-lg">Name</span> :
              {selectedComplaint.user.name}
            </h1>
            <h1>
              
              <span className="font-semibold text-lg">Gender</span> :
              {selectedComplaint.gender}
            </h1>
            <h1>
              
              <span className="font-semibold text-lg">Country</span> :
              {selectedComplaint.country}
            </h1>
            <h1>
              
              <span className="font-semibold text-lg">State</span> :
              {selectedComplaint.state}
            </h1>
            <h1>
              
              <span className="font-semibold text-lg">District</span> :
              {selectedComplaint.district}
            </h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1>
              <span className="font-semibold text-lg">House No.</span> :
              {selectedComplaint.houseNo}
            </h1>
            <h1>
              <span className="font-semibold text-lg">Street Name</span> :
              {selectedComplaint.streetName}
            </h1>
            <h1>
              <span className="font-semibold text-lg">
                Nearest Poice Station
              </span>
              : {selectedComplaint.nearestPoliceStation}
            </h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl py-4">Incident Details</h1>
        <div className="flex flex-col gap-y-2">
          <h1>
            
            <span className="font-semibold text-lg">Category</span> :
            {selectedComplaint.user.category}
          </h1>
          <h1>
            
            <span className="font-semibold text-lg">Sub-Category</span> :
            {selectedComplaint.subcategory}
          </h1>
          <h1>
            
            <span className="font-semibold text-lg">Date</span> :
            {selectedComplaint.date}
          </h1>
          <h1>
            
            <span className="font-semibold text-lg">Time</span> :
            {selectedComplaint.time}
          </h1>
        </div>
        <h1 className="font-semibold text-2xl py-4">
          Evidence / Important Documents
        </h1>
        <div className="importantDocuments">
          {selectedComplaint.importantDocumentsUrl.map((documentUrl, index) => (
            <div key={index} className="my-4">
              <img
                src={documentUrl}
                alt={`Document ${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-2 my-4">
          <input
            type="checkbox"
            id="readConfirmation"
            checked={readConfirmation}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      {showDenyPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50">
          <h1 className="text-xl font-bold mb-4">Reason for Dismissal</h1>
          <textarea
            rows="4"
            cols="50"
            value={dismissalReason}
            onChange={handleDismissalReasonChange}
            placeholder="Enter reason here..."
            className="border rounded p-2 mb-4"
          ></textarea>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 mr-2"
              onClick={handleDenyConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400"
              onClick={handleDenyCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ComplaintDetails.propTypes = {
  selectedComplaint: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired, // Add missing prop types
      // Add more missing prop types as needed
    }),
    gender: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    houseNo: PropTypes.string.isRequired,
    streetName: PropTypes.string.isRequired,
    nearestPoliceStation: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    acknowledgementNumber: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    holderName: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    freezeReason: PropTypes.string.isRequired,
    nationalIdImageUrl: PropTypes.string.isRequired,
    importantDocumentsUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onVerify: PropTypes.func.isRequired,
};

export default ComplaintDetails;
