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
            <img src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/alex.jpg" style={{borderRadius: '100%', width: "80%"}}/>
          {/* </div> */}
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="insights-text">
          <div style={{width: "80%", color: "white"}}>
            <h1> Alexandru Rasiga. </h1>
            <br />
            <p style={{fontSize: "19px", lineHeight: "1.6em"}}>
              Hello! Welcome to my personal website!
              Here you may find pertinent information about me such as skills and projects.
              As a general introduction, I am a student-athlete at the University of Waterloo studying Computer Engineering while being a member of the Men's Varsity Soccer Team.
              I am very passionate about computer software, notably web techonologies, as I'm sure you're about to find out!
              If you want to check out my resume, <a style={{"text-decoration": "none"}} target="_blank" href="https://s3.amazonaws.com/alexrasiga.ca.images/resume.pdf"> here it is. </a>
              You may also get in touch with me at the bottom of this page if you wish to discuss with me and/or have any questions!
              Until then, let's get you started with some of my interests that you can find below!
              <br />
              Thank you for coming and I hope you enjoy your stay! :-)
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
