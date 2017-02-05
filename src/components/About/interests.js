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
        info.text = "<p> Ever since I was little I had a interest in technology. Whether it be putting together a circuit for a science fair project in grade 6 or hacking around to build a personal website, I enjoyed every bit of it. I guess this would be a good reason why I chose to study in Computer Engineering. I particularly enjoy how technology is continuously evolving every day and it seems like there's a never ending cycle of innovation. I truly believe that technology can automate everything in our lives and I can see it happening in the foreseeable future. I've always wanted to build a 'servant-like' robot to do chores for me. I'm hoping to start building something along those lines in the near future. Anyways, below is a little gallery of me getting my hands dirty with some technology such as arduino, building my own desktop, hacking around some code, etc..</p>";
        info.gallery = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/googleCampus.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/Programming.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/computer.jpg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/pictures/arduino.jpg"
        ];
        break;
      case 'Sports':
        info.title = "Sports.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/sports.jpg";
        info.text = "<p> Sports have always been the essence to my education. For as long as I can remember I was a student-athlete playing various sports such as basketball, volleyball, soccer. I have always been active yet soccer was the sport I took more seriously. I spent almost everyday of my high school days playing soccer at night whether it be practice with my competitive team or just playing for fun on my own. When I was in grade 11 and 12 I had the honour of being the captain for an international soccer academy called Winstars Academy. We would always go play games against top level teams in the United States such as Division 1 NCAA teams and MLS Academies. If you wish to see some soccer highlights of mine from grade 11-12, check out this <a target='_blank' href='https://www.youtube.com/watch?v=SaV7ymZiF_c'>video</a>. Fast forward to present day and I am proud to be a part of the University's Varsity Men's Soccer Team. I love the competition and friendships made through sports and I don't see myself not playing soccer or any other sport for that matter anytime soon.</p>";
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
        info.text = "My ultimate goal is to travel the world. I was born in Romania and my grandparents still live there and so I had the chance to visit them almost every summer in high school and elementary school. This infused a desire to discover everything the world has to offer in me. I love travelling and adventuring to new places. Whether it be just going for a drive down a road you've never been before or taking a plane to the other side of the world I think that you'll always find something worth your while. I was lucky enough to be part of a family that is constantly travelling around and that gave me the chance to travel to three different continents and visit countries like Cuba, Mexico, Romania, United States, etc. Here is a small gallery of random places I've been.";
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
