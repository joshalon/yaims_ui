import './App.css';
import React from 'react';
import Logo from './Logo';
import Login from './Login';
import Mail from './Mail';
import Token from './GetToken';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <Login />
      <Token />
      <Mail/>
    </div>
  );
}

export default App;
