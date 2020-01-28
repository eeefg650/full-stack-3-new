import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';





function App() {


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  const [Color, setColor] = useState('red')
  const [value, setvalue] = useState('changeColor')
  return (
    <div className="App">
      <button style = {{background: Color}} >{value}</button>

      <input type = "text" onChange={(e)=>{ {setColor(getRandomColor); setvalue(e.target.value)}}}></input>

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
