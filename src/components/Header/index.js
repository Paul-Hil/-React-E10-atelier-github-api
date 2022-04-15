import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

import LogoGitHub  from 'src/assets/images/logo-github.png'

const Header = () => {
  return (
    <header>
        <img src={LogoGitHub} alt="icon gitHub" />
        <nav>
          <NavLink to="/" activeClassName="selected" exact>
            Recherche
          </NavLink>

          <NavLink to="/faq" activeClassName="selected">
            FAQ
          </NavLink>
        </nav>
    </header>
  )
}

export default Header;
