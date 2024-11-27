import React from 'react';
import './App.css';
import { Header } from './widgets/Header/Header'
function App() {
  return (
    <div className="App">
            <Header></Header>

      <main className="BlockContainer">
        <p>Основной контент страницы размещается здесь.</p>
      </main>
    </div>
  );
}

export default App;
