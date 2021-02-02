import React from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home/HomePage';
import About from './views/About/AboutPage';
import Contact from './views/Contact/ContactPage';
import CustomersList from './views/Customer/CustomersList';
import CustomerCreateUpdate from './views/Customer/CustomerCreateUpdate';

const Routes = () => (
  <>
    <Route exact={true} path="/" component={Home} />
    <Route path="/sobre" component={About} />
    <Route path="/contato" component={Contact} />
    <Route path="/cliente/novo" component={CustomerCreateUpdate} />
    <Route path="/customer/:pk" component={CustomerCreateUpdate} />
    <Route path="/customer/" component={CustomersList} />
  </>
);

export default Routes;
