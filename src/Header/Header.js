/**
 * Created by NikitaB on 2/3/18.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import QuickRentForm from './QuickRentForm';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <AppBar showMenuIconButton={false} title="Аренда автомобилей">
          <Toolbar style={{backgroundColor: 'none'}}>
            <ToolbarGroup firstChild={true}>
              <FlatButton label="Главная" />
              <FlatButton label="Тарифы" />
              <FlatButton label="О компании" />
              <FlatButton label="Контакты" />
            </ToolbarGroup>
          </Toolbar>
        </AppBar>
        <img src={(process.env.NODE_ENV === 'production' ? '/static' : process.env.PUBLIC_URL) + '/assets/images/header-overlay.png'}
             className="brand-overlay"/>
        <img src={(process.env.NODE_ENV === 'production' ? '/static' : process.env.PUBLIC_URL) + '/assets/images/logo-large.png'}
             className="brand-logo"/>
        <QuickRentForm/>
      </header>
    );
  }
}

export default Header;
