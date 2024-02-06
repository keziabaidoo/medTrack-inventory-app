// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  CiHome,
  CiUser,
  CiLineHeight,
  CiBitcoin,
  CiLollipop,
  CiSettings,
} from "react-icons/ci";
import brand_MedTrack from "../assets/brand_MedTrack.svg";
import profile from "../images/profile.jpg";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="logo">
        <img src={brand_MedTrack} alt="newLogo" />
        {/* <span>Medtrack</span> */}
      </div>

      {/* <img className="logo" src={logo} alt="logo" /> */}
      <div className="profile">
        <img src={profile} alt="profile" />
        <h3>Ammah Kusiwaaa</h3>
        <p>Laboratory Department Head</p>
      </div>
      <ul>
        <li>
          <NavLink to="/reports">
            <CiLineHeight />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/pharmacy">
            <CiLollipop />
            Pharmacy
          </NavLink>
        </li>
        <li>
          <NavLink to="/laboratory">
            <CiBitcoin />
            Laboratory
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <CiSettings />
            Settings
          </NavLink>
        </li>

        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
