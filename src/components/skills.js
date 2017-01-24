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
          <div className="skills" style={{backgroundColor: this._handleHexColor()}}>
            {/* This is where I will have Interests */}
          </div>
        </section>
      </Element>
    );
  }
}
