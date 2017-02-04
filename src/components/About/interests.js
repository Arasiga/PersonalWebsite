import React, { Component } from 'react';

import about from '../../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import InterestsModal from './interestsModal';

export default class Interests extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      info: {
        title: "",
        image: "",
        text: "",
        gallery: []
      }
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

  _setInfo = (type) => {
    let info = {};

    switch(type){
      case 'Technology':
        info.title = "Technology.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/technology.jpg";
        info.text = "";
        info.gallery = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/googleCampus.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/Programming.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/computer.jpg"
        ];
        break;
      case 'Sports':
        info.title = "Sports.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/sports.jpg";
        info.text = "";
        info.gallery = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/soccer.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/varsity_soccer.jpeg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/soccer-goal.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/trophies.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/soccer2.JPG",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/scuba-diving.jpg"
        ];
        break;
      case 'Travelling':
        info.title = "Travelling.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/travelling.jpg";
        info.text = "";
        info.gallery = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/scuba.JPG",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/andy-mountains.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/chicago.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/sanDiego1.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/colorado.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/romania.JPG",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/santa-monica.jpg"
        ];
        break;
    }

    this.setState({
      info: info
    });

  }

  render () {

    let color = this._handleHexColor();

    return (
      <Row className="interests">
        <InterestsModal info={this.state.info} open={this.state.open} hide={this._handleModal}/>
        <Col
          className="interest"
          style={{backgroundColor: color[0]}}
          lg={4} md={4} sm={4} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Technology")} }
        >
          <h1 style={{color: "#ECECEC"}}> Technology. </h1>
        </Col>
        <Col
          className="interest"
          style={{backgroundColor: color[1]}}
          lg={4} md={4} sm={4} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Sports")} }
        >
          <h1 style={{color: "#ECECEC"}}> Sports. </h1>
        </Col>
        <Col
          className="interest"
          style={{backgroundColor: color[2]}}
          lg={4} md={4} sm={4} xs={12}
          onClick={ () => {this._handleModal(); this._setInfo("Travelling")} }
        >
          <h1 style={{color: "#ECECEC"}}> Travelling. </h1>
        </Col>
      </Row>
    );
  }
}
