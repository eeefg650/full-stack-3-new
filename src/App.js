import React , {useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}


const [color, setColor] = useState("green")

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(json => console.log(json))

// Output

},[])
  return (
    <div className="App">
<h1 style={{backgroundColor:color}} onClick={()=>{setColor(generateRandomColor)}}>{color}</h1>
    </div>
  );
}

export default App;
