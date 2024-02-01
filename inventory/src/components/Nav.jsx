// TopNav.js
import React from "react";
// import "./TopNav.css";
import profile from "../images/profile.jpg";
import { CiSearch, CiBellOn } from "react-icons/ci";

const TopNav = () => {
  return (
    <>
      <div className="nav">
        <div className="top-nav">
          <h2>Dashboard</h2>
          <div className="profile-wrap">
            <div className="bellprofile">
              <div className="icon">
                <CiSearch />
                <CiBellOn />
              </div>
              <div>
                <img className="profile" src={profile} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
