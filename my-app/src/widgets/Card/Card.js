import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="block">
      <div className="block-header">
        <div className="sidebar-icon-container">{icon}</div>
        <h2 className="text-body-large">{title}</h2>
      </div>
      <p className="text-body-small">{description}</p>
      <button className="button">{buttonText}</button>
    </div>
  );
};

export default Card;
