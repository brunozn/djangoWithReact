import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import CustomersList from './views/Customer/CustomersList';
import CustomerCreateUpdate from './views/Customer/CustomerCreateUpdate';
import './App.css';
import Nav from './components/Navbar';

import Home from './views/Home/HomePage';
import About from './views/About/AboutPage';
import Contact from './views/Contact/ContactPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <Route exaxt path="/sobre" component={About} />
          <Route exact path="/contato" component={Contact} />
          <Route path="/cliente/novo" component={CustomerCreateUpdate} />
          <Route path="/customer/:pk" component={CustomerCreateUpdate} />
          <Route path="/customer/" component={CustomersList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
