import React, { useState } from "react";
import "../styles/Man.css";
import QRCode from "qrcode.react";

function Manufacturer() {
  const [randomText, setRandomText] = useState();
  const [qrPressed, setQrPressed] = useState();
  const [serialNumber, setSerialNumber] = useState();
  const handleGenSerial = (e) => {
    setSerialNumber(Math.floor(Math.random() * 100000));
  };

  const handleQrPressed = (e) => {
    const randomString = Math.random().toString(36).substring(2, 10);
    setRandomText(randomString);
    setQrPressed(1);
  };

  return (
    <>
      <div className="man-container">
        <div className="inner-container">
          <div className="inner-container1">
            <div className="serial-container">
              <p>Serial Number</p>
              <button className="serial-gen-btn" onClick={handleGenSerial}>
                Generate Serial Number
              </button>
            </div>
            <div className="serial-number">{serialNumber}</div>
            <div className="prod-details">
              <label htmlFor="prod-name">Name of Product</label>
              <input type="text" name="prod-name" id="p-name" />
              <label htmlFor="prod-descr">Product Description</label>
              <input
                type="text"
                name="prod-descr"
                id="p-descr"
                className="text-box"
              />
              <label htmlFor="man-loc">Manfacturer Location</label>
              <input type="text" name="man-loc" id="m-loc" />
              <label htmlFor="supplier">Supplier</label>
              <input type="text" name="supplier" id="s-name" />
            </div>
            <div className="prod-btns">
              <button>Add Product</button>
            </div>
          </div>
          <div className="QR-code">
            <button onClick={handleQrPressed}>Generate QR Code</button>
            {qrPressed === 1 && (
              <>
                <div className="qr-image">
                  <QRCode value={randomText} />
                </div>{" "}
                <button className="download-btn">Download QR code</button>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manufacturer;
