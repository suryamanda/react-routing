import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/Main';



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
