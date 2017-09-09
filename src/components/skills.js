import React, { Component } from 'react';

import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

const skills = [
  // [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/docker.svg",
  // ],
  // [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/git-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/aws.svg",
  // ],
  // [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/cpp.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg",
  // ],
  // [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/ruby-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/rails-original-wordmark.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/java-original-wordmark.svg"
]

export default class Skills extends Component {

  _handleHexColor = () => {
    let hexColor;

    switch(this.props.color) {
      case 'red':
        hexColor = "#D64541";
        break;
      case 'green':
        hexColor = "#2ECC71";
        break;
      case 'blue':
        hexColor = "#3A539B";
        break;
      default:
        hexColor = "#2ECC71";
    }

    return hexColor;
  }

  _renderIcons = () => {
    return (
      <div style={{height: "100%"}}>
        {
          skills.map( (item, index) => {
            return (
              <Col lg="4" md="6" sm="4" xs="4" className="icon-container">
                <img src={item} />
              </Col>
            )
          })
        }
      </div>
    )
  }

  render () {
    return (
      <Element name="Skills">
        {/* <section name="Skills"> */}
          <Row className="skills" style={{backgroundColor: this._handleHexColor()}}>
            {/* This is where I will have Interests */}
            <Col lg={6} md={6} sm={12} xs={12} className="skills-description">
              <div style={{width: "80%", color: "white"}}>
                <h1> Skills. </h1>
                <br />
                <p style={{fontSize: "19px", lineHeight: "1.6em"}}>
                  Here is a list of skills I've developed over the past few years.
                  I am comfortable using every skill listed, however; my knowledge of the skills listed increases from bottom to top.
                  I was able to learn these skills in various fashions including online tutorials, hands-on experience during coop terms, and attending an 8 week Web Development Bootcamp at Lighthouse Labs.
                  I strive to broaden my knowledge and understand of software development everyday and constantly looking for new opportunities to challenge myself.
                  Below you will find a list of projects that I've worked on that include all these skills and more!
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="skills-showcase">
              <div style={{width: "80%", padding: "30px", height: "100%"}}>
                {this._renderIcons()}
              </div>
            </Col>
          </Row>
        {/* </section> */}
      </Element>
    );
  }
}
