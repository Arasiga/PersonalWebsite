import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { FlatButton } from 'material-ui';

import { Row, Col } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

const imgSrc = '../../../images/progIcons/';

const skills = {
  firstRow: [ 
    {img: `${imgSrc}css3-original.svg`, title: 'CSS3 Styling', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}git-original.svg`, title: 'Git Source Control', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}html5-original.svg`, title: 'HTML5 Markup', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '} 
  ],
  secondRow: [ 
    {img: `${imgSrc}javascript-original.svg`, title: 'Everything Javascript', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}nodejs-original-wordmark.svg`, title: 'My Favorite Framework', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}postgresql-plain-wordmark.svg`, title: 'Postgres Database', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '} 
  ],
  thirdRow: [ 
    {img: `${imgSrc}rails-original-wordmark.svg`, title: 'Rails Backend', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}react-original.svg`, title: 'React/Redux - My Happy Place', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '}, 
    {img: `${imgSrc}ruby-original.svg`, title: 'Ruby', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '} 
  ]
}

export default class SkillsCardContainer extends Component {

  _renderSkills (skills) {
    return(
      <Row>
        {
          skills.map( (skill, index) => {
            return(
              <Col lg={4} md={4} sm={4} xs={12} key={index} style={{marginBottom: '20px'}}>
                <div className='skillContainer'> 
                  <img src={skill.img} height='80px' width='100%' />
                  <h5 style={{marginTop: '10px'}}> {skill.title} </h5>
                </div>
              </Col>
            );
          })
        }
      </Row>
    );
  } 


  render(){
    return(
      <Element name="Skills">
        <Card style={{textAlign: 'left', width: '90%', margin: 'auto'}}>
          <CardHeader
            title="Alex Rasiga"
            subtitle="Skills"
          />

          <CardText>
            {this._renderSkills(skills.firstRow)}
            {this._renderSkills(skills.secondRow)}
            {this._renderSkills(skills.thirdRow)}
          </CardText>
        </Card>
      </Element>
    );
  }
}
