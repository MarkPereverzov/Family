import React, { useState } from 'react';
import { FaHome, FaImage, FaCamera, FaClipboardList, FaTimes, FaBars, FaPhotoVideo } from 'react-icons/fa';
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
        <Link to="/home" className="sidebar-link">
          <div className="sidebar-button">
            <div className="sidebar-icon-container">
              <FaHome className="sidebar-icon" />
            </div>
            {isSidebarOpen && <div className="sidebar-title text-body-regular">Главная</div>}
          </div>
        </Link>

        <Link to="/gallery" className="sidebar-link">
          <div className="sidebar-button">
            <div className="sidebar-icon-container">
              <FaImage className="sidebar-icon" />
            </div>
            {isSidebarOpen && <div className="sidebar-title text-body-regular">Галерея</div>}
          </div>
        </Link>

        <Link to="/screenshots" className="sidebar-link">
          <div className="sidebar-button">
            <div className="sidebar-icon-container">
              <FaCamera className="sidebar-icon" />
            </div>
            {isSidebarOpen && <div className="sidebar-title text-body-regular">Скриншоты</div>}
          </div>
        </Link>

        <Link to="/plans" className="sidebar-link">
          <div className="sidebar-button">
            <div className="sidebar-icon-container">
              <FaClipboardList className="sidebar-icon" />
            </div>
            {isSidebarOpen && <div className="sidebar-title text-body-regular">Планы</div>}
          </div>
        </Link>

        <Link to="/videos" className="sidebar-link">
          <div className="sidebar-button">
            <div className="sidebar-icon-container">
              <FaPhotoVideo className="sidebar-icon" />
            </div>
            {isSidebarOpen && <div className="sidebar-title text-body-regular">Видеозаписи</div>}
          </div>
        </Link>
      </div>

      <div className="sidebar-footer"></div>
    </div>
  );
};

export default Sidebar;
