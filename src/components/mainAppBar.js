import React, { Component } from 'react';

import Scroll from 'react-scroll';

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

  _scrollToProjects() {
    scroller.scrollTo("Projects", {
      duration: 1200,
      delay: 100,
      smooth: true
    })
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        style={{position: 'fixed', zIndex: '1000'}}
      >
        <MenuItem primaryText="About Me" onTouchTap={ () => {this._scrollToAbout()}} />
        <MenuItem primaryText="My Projects" onTouchTap={ () => {this._scrollToProjects()}} />
        <MenuItem primaryText="Contact Me" onTouchTap={ () => {this._scrollToContact()}} />
      </IconMenu>
    );
  }
}