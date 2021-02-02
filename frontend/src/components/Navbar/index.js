import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Navigation } from './styles';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p>Germilia</p>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
            <NavLink activeClassName="active" to="/">
              <li>Inicio</li>
            </NavLink>
            <NavLink activeClassName="active" to="/sobre">
              <li>Sobre</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contato">
              <li>Contato</li>
            </NavLink>
            <NavLink activeClassName="active" to="/customer">
              <li>Cliente</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
