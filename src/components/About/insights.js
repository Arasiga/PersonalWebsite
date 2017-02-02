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
          {/* <div> */}
            <img src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/alex.jpg" style={{borderRadius: '100%'}}/>
          {/* </div> */}
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="insights-text">
          <div style={{width: "80%", color: "white"}}>
            <h1> Alexandru Rasiga. </h1>
            <br />
            <p>
              Hello! Welcome to my personal website! Here you can learn a lot more about me on topics such as interests, skills and projects. As a general introduction, I am a student-athlete at the University of Waterloo studying Computer Engineering while being a member of the varsity soccer team. Also, I am very passionate about computer software notably web techonologies. If you wish, you may get in touch with me directly at the bottom of this page to get to discuss further and/or have any questions!
              Thank you for coming and I hope you enjoy your stay :-) !
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
