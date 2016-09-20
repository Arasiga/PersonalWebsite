import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { FlatButton } from 'material-ui';

import { Row, Col } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class AboutCardContainer extends Component {
  render(){
    return(
      <Element name="Insights">
        <Card style={{textAlign: 'left', width: '90%', margin: 'auto'}}>
          <Row style={{padding: '20px'}}>
            <Col lg={3} md={3} sm={12} xs={12}>
              <img src='../../../images/pictures/alex.jpg' className='alex-img' />
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
              <h3 style={{fontFamily: "Comic Sans MS", letterSpacing: '1px', fontWeight: 'lighter'}}> Insights </h3>
              <p>
                Hello, my name is Alexandru Rasiga and I am an aspiring web developper and candidate for Computer Engineering at University of Waterloo as well as a Lighthouse Labs Web Dev Bootcamp graduate. 
              </p>
              <p>
                Below, you will get the change to get to know me more by finding notable information about me. Also, you will have the chance to contact me if you wish at the bottom of the page if you would like to know even more about me.
              </p>
              <p>
                Thank you and I hope you enjoy your stay on my website!
              </p>
            </Col>
          </Row>
        </Card>
      </Element>
    );
  }
}
