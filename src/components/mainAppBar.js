import React, { Component } from 'react';
import header from '../../styles/sass/header.scss';
import Scroll from 'react-scroll';
import {calcWidth} from '../calcWidth';

import {Row, Col, Grid} from 'react-bootstrap';

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

  _scrollToTop() {
    scroller.scrollTo("Top", {
      duration: 1200,
      delay: 100,
      smooth: true
    })
  }

  render(){
    return(
      <div>
        {
          calcWidth(window.innerWidth) == "xs" ?
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            style={{float: 'right', position: "fixed", zIndex: "1000"}}
            iconStyle={{fill: "#fff", float: "right", right: "0px"}}
          >
            <MenuItem onClick={ () => {this._scrollToAbout()}} primaryText="About" />
            <MenuItem onClick={ () => {this._scrollToSkills()}} primaryText="Skills" />
            <MenuItem onClick={ () => {this._scrollToTop()}} primaryText="Alex Rasiga" />
            <MenuItem onClick={ () => {this._scrollToProjects()}} primaryText="Projects" />
            <MenuItem onClick={ () => {this._scrollToContact()}} primaryText="Contact" />
          </IconMenu> :
          <Row className="header">
            <Col className="link" lg={1} md={1} sm={1} xs={1}></Col>
            <Col className="link" lg={2} md={2} sm={2} xs={2}>
              <p className="object" onClick={ () => {this._scrollToAbout()}}> About </p>
            </Col>
            <Col className="link" lg={2} md={2} sm={2} xs={2}>
              <p className="object" onClick={ () => {this._scrollToSkills()}}> Skills </p>
            </Col>
            <Col className="link" lg={2} md={2} sm={2} xs={2}>
              <img
                className="icon"
                onClick={ () => {this._scrollToTop()}}
                src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/AR-icon.svg"
                type="image/svg+xml"
                height="100%"
                width="100%"
              ></img>
            </Col>
            <Col className="link" lg={2} md={2} sm={2} xs={2}>
              <p className="object" onClick={ () => {this._scrollToProjects()}}> Projects </p>
            </Col>
            <Col className="link" lg={2} md={2} sm={2} xs={2}>
              <p className="object" onClick={ () => {this._scrollToContact()}}> Contact </p>
            </Col>
          </Row>
        }
      </div>
    );
  }
}
