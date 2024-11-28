import React from 'react';
import './Links.css';
import { FaPhotoVideo, FaImage, FaCamera, FaClipboardList } from 'react-icons/fa';
import Card from '../../widgets/Card/Card';

const Links = () => {
  const cardsData = [
    {
      icon: <FaImage className="sidebar-icon" />,
      title: 'Галерея',
      description: 'Это место, где собраны самые ценные моменты нашей жизни. Здесь фотографии и видеозаписи с наших встреч, праздников, путешествий и повседневных радостей.',
      buttonText: 'Перейти',
    },
    {
      icon: <FaCamera className="sidebar-icon" />,
      title: 'Скриншоты',
      description: 'Виртуальный фотоальбом для всех значимых моментов, зафиксированных не только в кадре камеры, но и на экране.',
      buttonText: 'Перейти',
    },
    {
      icon: <FaClipboardList className="sidebar-icon" />,
      title: 'Планы',
      description: 'Семейный календарь и место для организации важных событий.',
      buttonText: 'Перейти',
    },
    {
      icon: <FaPhotoVideo className="sidebar-icon" />,
      title: 'Видеозаписи',
      description: 'Видеозаписи во время сомместного просмотра фильмов, сериалов либо же игр.',
      buttonText: 'Перейти',
    },
  ];

  return (
    <div className="container">
      {cardsData.map((data, index) => (
        <Card
          key={index}
          icon={data.icon}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
        />
      ))}
    </div>
  );
};

export default Links;
