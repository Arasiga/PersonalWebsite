import React, { Component } from 'react';

import Scroll from 'react-scroll';

import { Col, Row } from 'react-bootstrap';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Main extends Component { 

  _scrollToContact() {
    scroller.scrollTo("Contact", {
      duration: 1200,
      delay: 100,
      smooth: true
    });
  }

  _scrollToAbout() {
    scroller.scrollTo("About", {
      duration: 1200,
      delay: 100,
      smooth: true
    })
  }

  _scrollToProjects() {
    scroller.scrollTo("Projects", {
      duration: 1200,
      delay: 100,
      smooth: true
    })
  }

  render () {
    return (
      <div className='main-image'>
        <Row style={{height: '100%'}}>
          <Col lg={5} md={5} sm={5} style={{height: '100%'}}>
            <div className='main-title-container'>
              <h1> Alex Rasiga </h1>
              <hr className='hr-style' style={{background: 'white'}}/>
              <p> 
                <a onClick={() => {this._scrollToAbout()} }> About </a> /  
                <a onClick={() => {this._scrollToProjects()} }> Projects </a> / 
                <a onClick={() => {this._scrollToContact()} }> Contact </a>
              </p>
              <img src= '../../images/pictures/alex-icon.svg' height='100px' width ='100px' style={{margin: 'auto', display: 'block'}} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


