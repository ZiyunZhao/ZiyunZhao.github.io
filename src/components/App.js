import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import { Header } from './Header';
import { About } from './About';
import { Work } from './Work';
import { Research } from './Research';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Header /> 
      <About />
      <Work />
      <Research />
    </div>
  );
}

export default App;
