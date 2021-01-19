
import './App.css';
import React,{useState} from 'react'

function App() {

const [text] = useState('Je suis un string qui utilise les fonctions hook');
  
  return (
    <div className='App'>
      <h1>Hello</h1>
      <p>{text}</p>
    </div>
  )
}

export default App;
