import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from "./components/Board"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
