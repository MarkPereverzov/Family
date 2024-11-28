import React from 'react';
import './Gallery.css';
import SlideBar from '../../widgets/SlideBar/SlideBar';

const Gallery = () => {
  const images1 = [
    { src: require('../../img/CoinMuseum/1.jpg'), alt: 'Image 1' },
    { src: require('../../img/CoinMuseum/2.jpg'), alt: 'Image 2' },
    { src: require('../../img/CoinMuseum/3.jpg'), alt: 'Image 3' },
    { src: require('../../img/CoinMuseum/4.jpg'), alt: 'Image 4' },
    { src: require('../../img/CoinMuseum/5.jpg'), alt: 'Image 5' },
    { src: require('../../img/CoinMuseum/6.jpg'), alt: 'Image 6' },
    { src: require('../../img/CoinMuseum/7.jpg'), alt: 'Image 7' },
    { src: require('../../img/CoinMuseum/8.jpg'), alt: 'Image 8' },
    { src: require('../../img/CoinMuseum/9.jpg'), alt: 'Image 9' },
    { src: require('../../img/CoinMuseum/10.jpg'), alt: 'Image 10' },
    { src: require('../../img/CoinMuseum/11.jpg'), alt: 'Image 11' },
    { src: require('../../img/CoinMuseum/12.jpg'), alt: 'Image 12' },
    { src: require('../../img/CoinMuseum/13.jpg'), alt: 'Image 13' },
    { src: require('../../img/CoinMuseum/14.jpg'), alt: 'Image 14' },
    { src: require('../../img/CoinMuseum/15.jpg'), alt: 'Image 3' },
    { src: require('../../img/CoinMuseum/16.jpg'), alt: 'Image 4' },
    { src: require('../../img/CoinMuseum/17.jpg'), alt: 'Image 1' },
    { src: require('../../img/CoinMuseum/18.jpg'), alt: 'Image 2' },
    { src: require('../../img/CoinMuseum/19.jpg'), alt: 'Image 3' },
    { src: require('../../img/CoinMuseum/20.jpg'), alt: 'Image 4' },
    { src: require('../../img/CoinMuseum/21.jpg'), alt: 'Image 2' },
    { src: require('../../img/CoinMuseum/22.jpg'), alt: 'Image 3' },
    { src: require('../../img/CoinMuseum/23.jpg'), alt: 'Image 4' },
  ];

  return (
    <div>
      <SlideBar images={images1} albumName="Ариша спит" />
    </div>
  );
};

export default Gallery;
