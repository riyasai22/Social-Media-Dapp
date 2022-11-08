import React, { useRef, useState } from "react";
import "./Setting.css";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp1.png";
import pfp4 from "../images/pfp2.png";
import pfp5 from "../images/pfp1.png";
import { defaultImgs } from "../defaultImgs";

const Setting = () => {
  const pfps = [pfp1, pfp2];
  const [selectedPFP, setSelectedPFP] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const onBannerClick = () => {
    inputFile.current.click();
  };
  const changeHandler = (e) => {
    const img = e.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };
  return (
    <>
      <div className="pageIdentify">Settings</div>
      <div className="settingsPage">
        <input type="text" name="nameChange" placeholder="Name" />
        <input type="text" name="bioChange" placeholder="Bio" />
        <div className="pfp">
          Profile Image (Your NFTs)
          <div className="pfpOptions">
            {pfps.map((e, i) => {
              return (
                <>
                  <img
                    src={e}
                    className={
                      selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                    }
                    alt=""
                    onClick={() => {
                      setSelectedPFP(pfps[i]);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="pfp">
          Profile Banner
          <img
            src={selectedFile}
            onClick={onBannerClick}
            className="banner"
            alt=""
          />
          <input
            type="file"
            name="file"
            ref={inputFile}
            onChange={changeHandler}
            style={{ display: "none" }}
          />
        </div>
        <div className="save">Save</div>
      </div>
    </>
  );
};

export default Setting;
