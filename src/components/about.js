import React, { Component } from 'react';
import about from '../../styles/sass/about.scss';
import { Col, Row } from 'react-bootstrap';
import AboutCardContainer from './cards/aboutCard';
import InterestsCardContainer from './cards/interestsCard';
import SkillsCardContainer from './cards/skillsCard';

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
          {/* <h1 style={{letterSpacing: '2px', fontWeight: 'lighter'}}> About me </h1>
          <hr className='hr-style' />
          <p>
            <a onClick={() => { this._scrollToInsights() }}>Insights</a> /
            <a onClick={() => { this._scrollToInterests() }}> Interests </a> /
            <a onClick={() => { this._scrollToSkills() }}> Skills </a>
          </p>

          <Row style={{backgroundColor: "#16A085"}}>
            <Col lg={12} md={12} sm={12} xs={12}>
              <AboutCardContainer
              />
            </Col>
          </Row>
          <hr className='hr-style' />
          <h2 style={{letterSpacing: '2px', fontWeight: 'lighter'}}> Interests </h2>
          <hr className='hr-style' />
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <InterestsCardContainer size={this.props.size}/>
            </Col>
          </Row>
          <hr className='hr-style' />
          <h2 style={{letterSpacing: '2px', fontWeight: 'lighter'}}> Skills </h2>
          <hr className='hr-style' />
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <SkillsCardContainer size={this.props.size}/>
            </Col>
          </Row>
          <hr className='hr-style' /> */}
        </section>
      </Element>
    );
  }
}
