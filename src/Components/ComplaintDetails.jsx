import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ComplaintDetails = ({ selectedComplaint, onClose, onVerify }) => {
  const [readConfirmation, setReadConfirmation] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [actionType, setActionType] = useState("");
  const [reason, setReason] = useState("");

  const handleCheckboxChange = () => {
    setReadConfirmation(!readConfirmation);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleActionClick = (type) => {
    setActionType(type);
    setShowPopup(true);
  };

  const handleConfirmAction = async () => {
    try {
      const requestData = {
        acknowledgementNumber: selectedComplaint.acknowledgementNumber,
        verificationStatus: actionType === "confirm",
        dismissalStatus: actionType === "reject",
        dismissalReason: reason,
        actionTaken: actionType === "confirm" ? "resolved" : "suspended",
        bankName: selectedComplaint.bankName,
        holderName: selectedComplaint.holderName,
        accountNumber: selectedComplaint.accountNumber,
        branch: selectedComplaint.branch,
        freezeReason: selectedComplaint.freezeReason,
      };

      const response = await axios.post(
        "https://cybersecure.onrender.com/v1/admin/verifyComplaint",
        requestData,
        { withCredentials: true }
      );

      console.log("Action response:", response.data);
      onClose();
    } catch (error) {
      console.error("Error performing action:", error);
    }
    setShowPopup(false);
  };

  const handleCancelAction = () => {
    setShowPopup(false);
    setReason("");
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
          <div>
            <img
              className="w-64 h-32 object-contain"
              src={selectedComplaint.nationalIdImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1>
              <span className="font-semibold text-lg">Name</span>:
              {selectedComplaint.user.name}
            </h1>
            <h1>
              <span className="font-semibold text-lg">Gender</span>:
              {selectedComplaint.gender}
            </h1>
            <h1>
              <span className="font-semibold text-lg">Country</span>:
              {selectedComplaint.country}
            </h1>
            <h1>
              <span className="font-semibold text-lg">State</span>:
              {selectedComplaint.state}
            </h1>
            <h1>
              <span className="font-semibold text-lg">District</span>:
              {selectedComplaint.district}
            </h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1>
              <span className="font-semibold text-lg">House No.</span>:
              {selectedComplaint.houseNo}
            </h1>
            <h1>
              <span className="font-semibold text-lg">Street Name</span>:
              {selectedComplaint.streetName}
            </h1>
            <h1>
              <span className="font-semibold text-lg">Nearest Police Station</span>:
              {selectedComplaint.nearestPoliceStation}
            </h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl py-4">Incident Details</h1>
        <div className="flex flex-col gap-y-2">
          <h1>
            <span className="font-semibold text-lg">Category</span>:
            {selectedComplaint.user.category}
          </h1>
          <h1>
            <span className="font-semibold text-lg">Sub-Category</span>:
            {selectedComplaint.subcategory}
          </h1>
          <h1>
            <span className="font-semibold text-lg">Date</span>:
            {selectedComplaint.date}
          </h1>
          <h1>
            <span className="font-semibold text-lg">Time</span>:
            {selectedComplaint.time}
          </h1>
        </div>
        <h1 className="font-semibold text-2xl py-4">Evidence / Important Documents</h1>
        <div className="importantDocuments">
          {selectedComplaint.importantDocumentsUrl.map((documentUrl, index) => (
            <div key={index} className="my-4">
              <img
                src={documentUrl}
                alt={`Document ${index + 1}`}
                className="w-[50%] h-[30%]"
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
          <label htmlFor="readConfirmation" className="text-lg">
            I have read and understood the complaint details
          </label>
        </div>
        <div className="flex gap-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
            onClick={() => handleActionClick("confirm")}
            disabled={!readConfirmation}
          >
            Confirm
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            onClick={() => handleActionClick("reject")}
            disabled={!readConfirmation}
          >
            Reject
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50">
          <h1 className="text-xl font-bold mb-4">
            {actionType === "confirm" ? "Confirm Action" : "Reason for Rejection"}
          </h1>
          <textarea
            rows="4"
            cols="50"
            value={reason}
            onChange={handleReasonChange}
            placeholder="Enter reason here..."
            className="border rounded p-2 mb-4"
          ></textarea>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 mr-2"
              onClick={handleConfirmAction}
            >
              Confirm
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400"
              onClick={handleCancelAction}
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
      category: PropTypes.string.isRequired,
    }).isRequired,
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
