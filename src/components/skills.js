import React, { Component } from 'react';

import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

const skills = [
  [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg"
  ],
  [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap.svg"
  ],
  [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/cpp.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/java-original-wordmark.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/git-original.svg"
  ],
  [
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/ruby-original.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/rails-original-wordmark.svg",
    "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/illustrator-plain.svg"
  ]
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
      <div style={{height: "90%"}}>
        {
          skills.map( (item, index) => {
            return (
              <Row>
                {
                  item.map( (icon, index) => {
                    return (
                      <Col lg="4" md="4" sm="4" xs="4" className="icon-container">
                        <img src={icon} height="70%" width="70%"/>
                      </Col>
                    )
                  })
                }
              </Row>
            )
          })
        }
      </div>
    )
  }

  render () {
    return (
      <Element name="Skills">
        <section name="Skills">
          <Row className="skills" style={{backgroundColor: this._handleHexColor()}}>
            {/* This is where I will have Interests */}
            <Col lg={6} md={6} sm={12} xs={12} className="skills-description">
              <div style={{width: "80%", color: "white"}}>
                <h1> Skills. </h1>
                <br />
                <p style={{fontSize: "20px"}}>
                  Here is a list of skills I've developed in the past year. The list is ordered such that from left to right, top to bottom are skills in order of knowledge/exposure. However, most of these I have been exposed to almost all equally except for Javascript/React.JS which I worked with the most. If you're interested in knowing where and how I learnt these skills: I started off (every single one) by learning the basics of each of online using websites like udemy, codeacademy, youtube, etc. Beyond that, I learnt Javscript more in depth during my time at the Lighthouse Labs bootcamp through several projects using technologies like Node.JS and React. Furthermore, I learnt Java and C++ while studying at University of Waterloo where my first programming class covered C++ and my second programming class went over Java and Android programming. As far as front-end/design skills such as HTML/CSS and Adobe Illustrator I learnt mostly on my own and applying them extensively across a multitude of projects I've worked on. Below there is a list of projects that I have worked on within the past year that highlight these skills and others.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="skills-showcase">
              <div style={{width: "80%", padding: "30px"}}>
                {this._renderIcons()}
              </div>
            </Col>
          </Row>
        </section>
      </Element>
    );
  }
}
