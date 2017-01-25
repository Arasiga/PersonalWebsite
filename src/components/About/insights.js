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
      <Row className="insights" style={{backgroundColor: this._handleHexColor()}}>
        {/* This is where I will have the information about myself */}
        <Col lg={6} md={6} sm={12} xs={12} className="insights-image">
          <div style={{width: "80%"}}>

          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="insights-text">
          <div style={{width: "80%"}}>
            <h1> Alexandru Rasiga. </h1>
            <br />
            <p>
              TEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TEST
              TEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TEST
              TEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TESTTEST TEST TEST
              TEST TEST TEST
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
