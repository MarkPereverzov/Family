import React from 'react';
import './Plans.css';
import DropDown from '../../widgets/DropDown/DropDown';

const Plans = () => {
  const dropDownItems = [
    { title: 'Кино Паддингтон', description: 'Описание задачи', isCompleted: true },
    { title: 'Кино Веном', description: 'Описание задачи', isCompleted: true },
    { title: 'Кино Смайл 2', description: 'Описание задачи', isCompleted: true },
    { title: 'Бильярд', description: 'Описание задачи', isCompleted: true },
    { title: 'Музей монет', description: 'Описание задачи', isCompleted: true },
    { title: 'Музей ископаемых', description: 'Описание задачи', isCompleted: true },
    { title: 'Каток', description: 'Описание задачи', isCompleted: true },
    { title: 'Картинг', description: 'Описание задачи', isCompleted: false },
    { title: 'Боулинг', description: 'Описание задачи', isCompleted: false },
    { title: 'Зоопарк', description: 'Описание задачи', isCompleted: false },
    { title: 'Ярмарка в Лодзи/Кракове', description: 'Описание задачи', isCompleted: false },
    { title: 'Игровой клуб', description: 'Описание задачи', isCompleted: false },
    { title: 'Бассейн', description: 'Описание задачи', isCompleted: false },
    { title: 'Аквапарк', description: 'Описание задачи', isCompleted: false },
    { title: 'Лазертаг или лазерный квест', description: 'Описание задачи', isCompleted: false },
    { title: 'Кафе с котиками', description: 'Описание задачи', isCompleted: false },
    { title: 'Сыграть в карты на раздевание', description: 'Описание задачи', isCompleted: false },
    { title: 'Сделать фото радужки', description: 'Описание задачи', isCompleted: false },
    { title: 'Мандория', description: 'Описание задачи', isCompleted: false },
    { title: 'Сделать свои витражи', description: 'Описание задачи', isCompleted: false },
    { title: 'Фигурки из глины', description: 'Описание задачи', isCompleted: false },
    { title: 'Картина/фигурки из пластилина', description: 'Описание задачи', isCompleted: false },
    { title: 'Тир', description: 'Описание задачи', isCompleted: false },
  ];

  const completedItems = dropDownItems.filter(item => item.isCompleted);
  const incompleteItems = dropDownItems.filter(item => !item.isCompleted);

  // Split the incomplete items into two equal parts
  const half = Math.ceil(incompleteItems.length / 2);
  const firstHalf = incompleteItems.slice(0, half);
  const secondHalf = incompleteItems.slice(half);

  return (
    <div className="plans-container">
      <div className="completed-column">
        <h3>Выполненные</h3>
        {completedItems.map((item, index) => (
          <DropDown
            key={index}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
          />
        ))}
      </div>

      <div className="incomplete-column">
        <h3>Не выполненные (Часть 1)</h3>
        {firstHalf.map((item, index) => (
          <DropDown
            key={index}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
          />
        ))}
      </div>

      <div className="incomplete-column">
        <h3>Не выполненные (Часть 2)</h3>
        {secondHalf.map((item, index) => (
          <DropDown
            key={index}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
