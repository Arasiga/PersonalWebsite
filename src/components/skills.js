import React, { Component } from 'react';

import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

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

  render () {
    return (
      <Element name="Skills">
        <section name="Skills">
          <Row className="skills" style={{backgroundColor: this._handleHexColor()}}>
            {/* This is where I will have Interests */}
            <Col lg={6} md={6} sm={12} xs={12} className="skills-description">
              <div style={{width: "80%"}}>
                <h1> Skills. </h1>
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
            <Col lg={6} md={6} sm={12} xs={12} className="skills-showcase">
              <div style={{width: "80%"}}>

              </div>
            </Col>
          </Row>
        </section>
      </Element>
    );
  }
}
