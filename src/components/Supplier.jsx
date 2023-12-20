import React, { useState } from "react";
import "../styles/Sup.css";

function Supplier() {
  const [verifyState, setVerifyState] = useState(0);

  const handleVerify = () => {
    setVerifyState(1);
  };

  return (
    <>
      <div>
        <div className="sup-container">
          <div className="sup-inner-container">
            <div className="sup-form-1">
              <label htmlFor="serial-number">Enter Product Serial Number</label>
              <input
                type="number"
                name="seria-number"
                id="s-number"
                disabled={verifyState === 1}
              />
              <label htmlFor="qr-code">Upload QR Code</label>
              <input
                type="file"
                name="qr-code"
                id="sup-qr"
                disabled={verifyState === 1}
              />
              <button className="verify-btn" onClick={handleVerify}>
                Verify
              </button>
            </div>
            <div className="error-msg"></div>
            {verifyState === 1 && (
              <div className="sup-form-2">
                <label htmlFor="shop-name">Shop Name</label>
                <input type="text" name="shop-name" id="s-name" />
                <label htmlFor="shop-addr">Shop Address</label>
                <input type="text" name="shop-addr" id="s-addr" />
                <button className="add-sup-details">Add Details</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplier;
