/**
 * Created by NikitaB on 2/3/18.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import './Header.css';

class QuickRentForm extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Paper className="quick-rent-form-container">
        <div><b>Узнать условия аренды</b></div>
        <div className="quick-rent-form-container__fields-container">
          <SelectField
            floatingLabelText="Модель автомобиля"
            value={this.state.value}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Авто 1" />
            <MenuItem value={2} primaryText="Авто 2" />
            <MenuItem value={3} primaryText="Авто 3" />
            <MenuItem value={4} primaryText="Авто 4" />
          </SelectField>
          <TextField hintText="Ваше имя"/>
          <TextField hintText="Ваш номер телефона"/>
        </div>
        <div>
          <FlatButton style={{float: 'right'}} label="Узнать цену"/>
        </div>
      </Paper>
    );
  }
}

export default QuickRentForm;
