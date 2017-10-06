import React, { Component } from 'react';
import contact from '../../styles/sass/contact.scss';
// components
import { Row, Col } from 'react-bootstrap';
import { TextField, RaisedButton, Chip } from 'material-ui';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Contact extends Component {

  _handleHexColor = () => {
    let hexColor;

    switch(this.props.color) {
      case 'red':
        hexColor = "#E43F3F";
        break;
      case 'green':
        hexColor = "#03C9A9";
        break;
      case 'blue':
        hexColor = "#19B5FE";
        break;
      default:
        hexColor = "#03C9A9";
    }

    return hexColor;
  }

  render() {
    return (
      <Col lg={12} md={12} sm={12} xs={12} className='contact-div' style={{color: "white", backgroundColor: this._handleHexColor()}}>
        <Element name="Contact">
          <h1 > Contact Me! </h1>
          <h5> alex.rasiga@gmail.com </h5>
          <a href='https://github.com/Arasiga' target="_blank">
            <img style={{margin: '10px', cursor: 'pointer'}} src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/github-logo.svg" height='37px' width='37px' />
          </a>
          <a href='https://ca.linkedin.com/in/alex-rasiga-b3b599119' target="_blank">
            <img style={{cursor: 'pointer'}} src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/linkedin-logo.svg" height='37px' width='37px' />
          </a>
        </Element>
      </Col>
    );
  }
}
