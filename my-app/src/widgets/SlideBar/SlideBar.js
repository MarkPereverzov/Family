import React, { useState, useEffect } from 'react';
import './SlideBar.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SlideBar = ({ images, albumName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev-btn" onClick={prevImage}>
          <FaAngleLeft />
        </button>
        <div className="image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="slider-image"
          />
        </div>
        <button className="next-btn" onClick={nextImage}>
          <FaAngleRight />
        </button>
      </div>
      <div className="album-name text-body-regular">{albumName}</div>
    </div>
  );
};

export default SlideBar;
