import React, { useState } from 'react';
import { HiOutlineCheck } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import './DropDown.css';

const DropDown = ({ title, description, isCompleted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onClick={toggleDropDown}>
      <div className="dropdown-header">
        <div className="sidebar-icon-container">
          {isCompleted ? (
            <HiOutlineCheck className="sidebar-icon completed-icon" />
          ) : (
            <HiX className="sidebar-icon incomplete-icon" />
          )}
        </div>
        <div className="dropdown-title text-body-regular">{title}</div>
      </div>
      {isOpen && (
        <div className="dropdown-description text-body-small">
          {description}
        </div>
      )}
    </div>
  );
};

export default DropDown;
