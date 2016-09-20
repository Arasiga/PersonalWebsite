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
    {img: `${imgSrc}css3-original.svg`, title: 'CSS3 Styling'}, 
    {img: `${imgSrc}git-original.svg`, title: 'Git Source Control'}, 
    {img: `${imgSrc}html5-original.svg`, title: 'HTML5 Markup'} 
  ],
  secondRow: [ 
    {img: `${imgSrc}javascript-original.svg`, title: 'Everything Javascript'}, 
    {img: `${imgSrc}nodejs-original-wordmark.svg`, title: 'My Favorite Framework'}, 
    {img: `${imgSrc}postgresql-plain-wordmark.svg`, title: 'Postgres Database'} 
  ],
  thirdRow: [ 
    {img: `${imgSrc}rails-original-wordmark.svg`, title: 'Rails Backend'}, 
    {img: `${imgSrc}react-original.svg`, title: 'React/Redux'}, 
    {img: `${imgSrc}ruby-original.svg`, title: 'Ruby'} 
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
                  <img src={skill.img} height='100px' width='100%' />
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
        {this._renderSkills(skills.firstRow)}
        {this._renderSkills(skills.secondRow)}
        {this._renderSkills(skills.thirdRow)}
      </Element>
    );
  }
}
