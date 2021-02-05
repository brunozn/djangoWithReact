import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
