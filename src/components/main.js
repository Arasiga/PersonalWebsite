import React, { Component } from 'react';
// import Scroll from 'react-scroll';
import main from '../../styles/sass/main.scss';
import { Col, Row } from 'react-bootstrap';

// const Element = Scroll.Element;
// const scroller = Scroll.scroller;

export default class Main extends Component {

  render () {
    return (
      <div className='main'>
        <img src="/images/test.svg" className='svg-image' />
      </div>
    );
  }
}
