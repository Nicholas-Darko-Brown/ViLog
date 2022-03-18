import React from 'react';
import './DashboardPage.css';
import Navbar from './Dashboard Components/Navbar/Navbar';
import Sidebar from './Dashboard Components/Sidebar/Sidebar';

const DashboardPage = () => {
  return (
    <div className="dashboard_page_container">
      <Navbar />
      <div className="sidebar_container">
        <Sidebar />
        <div className="main_container">Hello world</div>
      </div>
    </div>
  );
};

export default DashboardPage;
