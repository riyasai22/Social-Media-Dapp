import React from "react";
import { Link } from "react-router-dom";
import { defaultImgs } from "../defaultImgs";
import "./Profile.css";

const Profile = ({account}) => {
  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img src={defaultImgs[1]} alt="" className="profileBanner" />
      <div className="pfpContainer">
        <img src={defaultImgs[0]} alt="" className="profilePFP" />
        <div className="profileName">Miksah</div>
        <div className="prfileWallet">{account.slice(0, 5) + '...' + account.slice(38, 42)}</div>
        <Link to="/settings">
          <div className="profileEdit">Edit profile</div>
        </Link>
        <div className="profileBio">Your Average Web3 Page</div>
        <div className="profileTabs">
          <div className="profileTab">Your Tweets</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
