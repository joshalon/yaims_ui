import './App.css';
import React from 'react';
import Logo from './Logo';
import Login from './Login';
import Mail from './Mail';
import {useState} from 'react';
import Token from './GetToken';

function App() {
  const [emails, setEmails] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <Login> </Login>
      <Token> </Token>
      <Mail/>
    </div>
  );
}

export default App;
