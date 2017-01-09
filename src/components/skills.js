import React, { Component } from 'react';

import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Skills extends Component {

  render () {
    return (
      <Element name="Skills">
        <section name="Skills">
          <div className="skills">
            {/* This is where I will have Interests */}
          </div>
        </section>
      </Element>
    );
  }
}
