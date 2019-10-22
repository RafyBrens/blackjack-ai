import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';



function App() {
  const cards = [];

  let value = 1;
  for (let i = 0; i < 52; i+=4) {
    const card = new Card(1, value);
    const card2 = new Card(2, value);
    const card3 = new Card(3, value);
    const card4 = new Card(4, value);

    cards.push(card, card2, card3, card4);
    value++;
  }

  console.log(cards);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
