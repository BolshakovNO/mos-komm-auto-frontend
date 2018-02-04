import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from 'Header/Header';

import Theme from './Theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
        <Header/>
      </MuiThemeProvider>
    );
  }
}

export default App;
