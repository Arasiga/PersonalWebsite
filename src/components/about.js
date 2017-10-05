import React, { Component } from 'react';
import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';
// Components
import Insights from './About/insights';
import Interests from './About/interests';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class About extends Component {

  _scrollToInsights() {
    scroller.scrollTo("Insights", {
      duration: 1200,
      delay: 100,
      smooth: true
    });
  }

  _scrollToInterests() {
    scroller.scrollTo("Interests", {
      duration: 1200,
      delay: 100,
      smooth: true
    });
  }

  _scrollToSkills() {
    scroller.scrollTo("Skills", {
      duration: 1200,
      delay: 100,
      smooth: true
    });
  }

  render() {
    return (
      <Element name="About">
        <section name="About">
          <Insights color={this.props.color} />
          <Interests color={this.props.color} />
        </section>
      </Element>
    );
  }
}
