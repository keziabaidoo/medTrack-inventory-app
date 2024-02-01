// Dashboard.js
import React from "react";
import Sidebar from "./SideNav";
import TopNav from "./Nav";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopNav />
      <div className="main-content">
        <Sidebar />
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Dashboard;
