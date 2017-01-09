import React, { Component } from 'react';
import header from '../../styles/sass/header.scss';
import Scroll from 'react-scroll';

import {Row, Col} from 'react-bootstrap';

import {
  IconMenu,
  MenuItem
} from 'material-ui';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class MainAppBar extends Component {

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

  _scrollToSkills() {
   scroller.scrollTo("Skills", {
     duration: 1200,
     delay: 100,
     smooth: true
   });
 }

  _scrollToProjects() {
    scroller.scrollTo("Projects", {
      duration: 1200,
      delay: 100,
      smooth: true
    })
  }

  render(){
    return(
      // <IconMenu
      //   iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      //   style={{position: 'fixed', zIndex: '1000'}}
      // >
      //   <MenuItem primaryText="About Me" onTouchTap={ () => {this._scrollToAbout()}} />
      //   <MenuItem primaryText="My Projects" onTouchTap={ () => {this._scrollToProjects()}} />
      //   <MenuItem primaryText="Contact Me" onTouchTap={ () => {this._scrollToContact()}} />
      // </IconMenu>
      <Row className="header">
        <Col className="link" lg={1} md={1} sm={1} xs={1}></Col>
        <Col className="link" lg={2} md={2} sm={2} xs={2}>
          <p className="object" onClick={ () => {this._scrollToAbout()}}> About </p>
        </Col>
        <Col className="link" lg={2} md={2} sm={2} xs={2}>
          <p className="object" onClick={ () => {this._scrollToSkills()}}> Skills </p>
        </Col>
        <Col className="link" lg={2} md={2} sm={2} xs={2}>
          <img src="/images/AR-icon.svg" height="100%" width="100%"/>
        </Col>
        <Col className="link" lg={2} md={2} sm={2} xs={2}>
          <p className="object" onClick={ () => {this._scrollToProjects()}}> Projects </p>
        </Col>
        <Col className="link" lg={2} md={2} sm={2} xs={2}>
          <p className="object" onClick={ () => {this._scrollToContact()}}> Contact </p>
        </Col>
      </Row>
    );
  }
}
