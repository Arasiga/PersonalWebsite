import React, { Component } from 'react';
import Media from './mediaObject';
// components
import { Col, Row } from 'react-bootstrap';
import ProjectList from './Projects/projectList';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Projects extends Component {

  render() {
    return (
      <section className='project-div'>
        <Element name="Projects">
          <ProjectList color={this.props.color}/>
        </Element>
      </section>
    );
  }
}
