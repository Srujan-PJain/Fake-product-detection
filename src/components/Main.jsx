import LoginDiv from "./loginDiv";
import "../styles/Main.css";
import { useState } from "react";

function Main() {
  const [toggler, setToggler] = useState(0);

  const handleClick = (state) => {
    setToggler(state);
  };

  const getPosition = (value) => {
    const positions = {
      0: "0%",
      1: "33.333%",
      2: "66.666%",
    };
    return positions[value];
  };

  return (
    <>
      <div className="main-container">
        <div className="main-box">
          <div className="user-box">
            <div
              className="toggler"
              style={{ left: getPosition(toggler) }}
            ></div>
            <button
              className="manubtn"
              value="0"
              onClick={() => handleClick(0)}
            >
              Manufacturer
            </button>
            <button className="supbtn" value="1" onClick={() => handleClick(1)}>
              Supplier
            </button>
            <button className="cusbtn" value="2" onClick={() => handleClick(2)}>
              Customer
            </button>
          </div>
          <div className="form-box">
            {toggler === 0 || toggler === 1 ? (
              <div className="manufacturer">
                <LoginDiv toggler={toggler} />
              </div>
            ) : null}
            {toggler === 2 ? (
              <div className="customer">
                <input
                  type="number"
                  name="serialNo"
                  id="serial"
                  placeholder="Serial Number"
                />
                <label htmlFor="qr-code">Upload QR Code</label>
                <input type="file" name="qrCode" id="qr" accept="image/*" />
                <button className="submit-btn">Submit</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
