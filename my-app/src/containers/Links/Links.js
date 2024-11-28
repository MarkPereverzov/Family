import React from 'react';
import './Links.css';
import { FaHome, FaImage, FaCamera, FaClipboardList, FaTimes, FaBars } from 'react-icons/fa';

const Links = () => {
  return (
    <div className="container">

      
      <div className="block">
        <div className='block-header'>
          <div className="sidebar-icon-container">
              <FaHome className="sidebar-icon" />
          </div>
          <h2 className="text-body-large">Галерея</h2>
        </div>
        <p className="text-body-small">Это место, где собраны самые ценные моменты нашей жизни. Здесь фотографии и видеозаписи с наших встреч, праздников, путешествий и повседневных радостей.</p>
        <button className='button'>Перейти</button>
      </div>


      <div className="block">
        <img src="https://via.placeholder.com/600x400" alt="Block 2" />
        <h2 className="title">Скриншоты</h2>
        <p className="subtitle">Subtitle 2</p>
        <button className='button'>Перейти</button>
      </div>
      <div className="block">
        <img src="https://via.placeholder.com/600x400" alt="Block 3" />
        <h2 className="title">Планы</h2>
        <p className="subtitle">Subtitle 3</p>
        <button className='button'>Перейти</button>
      </div>
      <div className="block">
        <img src="https://via.placeholder.com/600x400" alt="Block 4" />
        <h2 className="title">Title 4</h2>
        <p className="subtitle">Subtitle 4</p>
        <button className='button'>Перейти</button>
      </div>
    </div>
  );
};

export default Links;
