// Dashboard.js
import React from "react";
import Sidebar from "./SideNav";
import TopNav from "./Nav";
import { Outlet } from "react-router-dom";

// import LabForm from "../page/LabForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopNav />
      <div className="main-content">
        <Sidebar />
        {/* Add your main content here */}
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
