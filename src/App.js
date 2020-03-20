import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomerList from './containers/CustomerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomerList />
      </header>
    </div>
  );
}

export default App;
