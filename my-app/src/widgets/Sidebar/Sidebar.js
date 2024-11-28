import React, { useState } from 'react';
import { FaHome, FaImage, FaCamera, FaClipboardList, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="sidebar-icon-container" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes className="sidebar-icon" /> : <FaBars className="sidebar-icon" />}
        </div>
      </div>

      <div className="button-container">
        <div className="sidebar-button">
          <div className="sidebar-icon-container">
            <FaHome className="sidebar-icon" />
          </div>
          {isSidebarOpen && <div className="sidebar-title text-body-regular">Главная</div>}
          <Link to="/" className="sidebar-link" />
        </div>

        <div className="sidebar-button">
          <div className="sidebar-icon-container">
            <FaImage className="sidebar-icon" />
          </div>
          {isSidebarOpen && <div className="sidebar-title text-body-regular">Галерея</div>}
          <Link to="/gallery" className="sidebar-link" />
        </div>

        <div className="sidebar-button">
          <div className="sidebar-icon-container">
            <FaCamera className="sidebar-icon" />
          </div>
          {isSidebarOpen && <div className="sidebar-title text-body-regular">Скриншоты</div>}
          <Link to="/screenshots" className="sidebar-link" />
        </div>

        <div className="sidebar-button">
          <div className="sidebar-icon-container">
            <FaClipboardList className="sidebar-icon" />
          </div>
          {isSidebarOpen && <div className="sidebar-title text-body-regular">Планы</div>}
          <Link to="/plans" className="sidebar-link" />
        </div>
      </div>

      <div className="sidebar-footer"></div>
    </div>
  );
};

export default Sidebar;