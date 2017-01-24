import React, { Component } from 'react';

import about from '../../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import InterestsModal from './interestsModal';

export default class Interests extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      info: []
    }
  }

  _handleModal = () => {
    this.setState({
      open: !this.state.open
    });
  }

  _handleHexColor = () => {
    let hexColor = [];

    switch(this.props.color) {
      case 'red':
        hexColor[0] = "#F22613";
        hexColor[1] = "#D91E18";
        hexColor[2] = "#C0392B";
        break;
      case 'green':
        hexColor[0] = "#2ABB9B";
        hexColor[1] = "#1E824C";
        hexColor[2] = "#00B16A";
        break;
      case 'blue':
        hexColor[0] = "#2574A9";
        hexColor[1] = "#1F3A93";
        hexColor[2] = "#89C4F4";
        break;
      default:
        hexColor[0] = "#2ABB9B";
        hexColor[1] = "#1E824C";
        hexColor[2] = "#00B16A";
    }

    return hexColor;
  }

  _setInfo = () => {
    let info = [];

  }

  render () {

    let color = this._handleHexColor();

    return (
      <Row className="interests">
        <InterestsModal info={this.state.info} open={this.state.open} hide={this._handleModal}/>
        {/* This is where I will have Interests */}
        <Col
          className="interest"
          style={{backgroundColor: color[0]}}
          lg={4} md={4} sm={12} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Technology")} }
        >
          Technology
        </Col>
        <Col
          className="interest"
          style={{backgroundColor: color[1]}}
          lg={4} md={4} sm={12} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Sports")} }
        >
          Sports
        </Col>
        <Col
          className="interest"
          style={{backgroundColor: color[2]}}
          lg={4} md={4} sm={12} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Travelling")} }
        >
          Travelling
        </Col>
      </Row>
    );
  }
}
