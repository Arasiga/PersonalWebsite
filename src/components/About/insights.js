import React, { Component } from 'react';

import about from '../../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

export default class Insights extends Component {

  _handleHexColor = () => {
    let hexColor;

    switch(this.props.color) {
      case 'red':
        hexColor = "#EF4836";
        break;
      case 'green':
        hexColor = "#3FC380";
        break;
      case 'blue':
        hexColor = "#4183D7";
        break;
      default:
        hexColor = "#3FC380";
    }

    return hexColor;
  }

  render () {
    return (
      <div className="insights" style={{backgroundColor: this._handleHexColor()}}>
        {/* This is where I will have the information about myself */}
      </div>
    );
  }
}
