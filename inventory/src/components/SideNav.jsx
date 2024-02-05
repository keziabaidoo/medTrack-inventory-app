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
import logo from "../images/logo.jpg";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <img className="logo" src={logo} alt="logo" />

      <ul>
        <li>
          <NavLink to="/">
            <CiHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports">
            <CiLineHeight />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory">
            <CiLollipop />
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink to="/departments">
            <CiBitcoin />
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <CiUser />
            Users
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
