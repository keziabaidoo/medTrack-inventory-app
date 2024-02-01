// Sidebar.js
import React from "react";
import {
  CiHome,
  CiUser,
  CiLineHeight,
  CiBitcoin,
  CiLollipop,
  CiSettings,
} from "react-icons/ci";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <CiHome />
          Home
        </li>
        <li>
          <CiLineHeight />
          Reports
        </li>
        <li>
          <CiLollipop />
          Inventory
        </li>
        <li>
          <CiBitcoin />
          Departments
        </li>

        <li>
          <CiUser />
          Users
        </li>
        <li>
          <CiSettings />
          Settings
        </li>

        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
