import React, { Component } from 'react';
import Inner from './interestCardInner';

import Media from '../mediaObject';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { FlatButton, Tabs, Tab } from 'material-ui';

import SwipeableViews from 'react-swipeable-views';

import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

const sports = [ 
  {src: '../../../images/pictures/trophies.jpg', title: 'Sports', text: "Sports have been a big part of my life. I've been playing sports ever since I could remember and I don't even intend on stopping. I really enjoy being active whether it be by playing a sport or working out at the gym or even just going for a run: I love it!", textFirst: true},
  {src: '../../../images/pictures/soccer-goal.jpg', title: 'Soccer', text: "I mentioned that I love sports and being active as a general but if there was one that stood out with me the most it would be soccer. This is the only sport I play competitively and at a very high level. Most recently, I made it as far as being captain for an international academy named Winstars Academy where I got the chance to play top tier Universities and academies in the USA such as UPENN and Philadelphia Union. In the fall, I plan on playing Varsity Soccer at Waterloo.", textFirst: false},
  {src: '../../../images/pictures/scuba-diving.jpg', title: 'Other', text: "On top of playing soccer, I really enjoy other small sports such as scuba-diving and ping-pong. While I am a very competitive person, I also enjoy relaxing from time to time and playing for fun. Also, I really enjoy throwing frisbee's, fishing and a big fan of skiing during winter! ", textFirst: true}
];

const computers = [
  {src: '../../../images/Icons/imac.svg', title: 'Computers', text: 'Computers have been a big part of my life ever since I was a little child. I am very passionate about technology in general but computers seems to have stuck with me the most.', textFirst: false},
  {src: '../../../images/pictures/programming.jpg', title: 'Programming', text: "My programming experience started when I went to a University of Toronto Engineering summer camp where they showed us how to build a simple game using python. Ever since, I fell in love and started to learn a few languages on my own such as C# and Java. However, I did not feel that was enough and wanted to learn more about web development (hence the reason I went to Lighthouse Labs) and i've been making sites and learning more and more ever since. After I become a more experienced web developper, I plan on learning Android development and perhaps iOS as well. ", textFirst: true},
  {src: '../../../images/pictures/computer.jpg', title: 'Computer Hardware', text: "Another aspect of computers that interests me is the hardware side of things. I believe that getting to know how a program can be run on a machine is equally as important as knowing how to code. Thus, I am a huge fan of building computers and understanding how modern languages like C++ interact with computer memory to allocate space in order to complete certain endeavours. I aspire to learn machine code in the very near future and I plan on taking up AI within the next 5 years. Also, I love building computers from scratch. the picture to the left shows my personal desktop that I built. ", textFirst: false}
]

const travelling = [
  {src: '../../../images/icons/camera.svg', title: 'Travelling', text: "I've always been such a big fan of travelling around the world and seeing new places and meeting new people. Ive seen many countries including Cuba, United States (visited over half of the states), Romania, Germany, Mexico. Here is a list of places I've seen in the past few years that stuck with me:", textFirst: true},
  {src: '../../images/pictures/santa-monica.jpg', title: 'Santa Monica Pier / California', text: "I wish I could post every picture from this trip because I absolutely love California and the weather there. Here is a picture of me on the Santa Monica Pier", textFirst: false},
  {src: '../../images/pictures/andy-mountains.jpg', title: 'Romania', text: "As a matter of fact, I was born in Romania and I have been travelling there almost every summer of my life to spend time with my grandparents that still live there. In this picture, you can see me and my best friend at the top of the highest mountain in Romania.", textFirst: true},
  {src: '../../images/icons/camera.svg', title: 'Cuba', text: "I visited Cuba 3 times now and I would not mind going again as I love the sceneries and the warmth that the country has to offer.", textFirst: false}
];

const music = [
  {src: '../../../images/icons/music.svg', title: 'Music', text: "For as long as I can remember, music has never failed to infuse happiness and relaxation in my life with the beautiful sounds you can come accross the vaste world of music. From creating and playing music on my own to simply enjoying famous songs by famous artists, music will always be one of my greatest interests", textFirst: false},  
  {src: '../../../images/icons/music.svg', title: 'Piano', text: "I started pursuing piano lessons when I was about 8 years old and continued until I was 15 years old. I was playing for fun but also took part in a few Kiwanis competitions and achieved level 6 piano from the Royal Conservatory of Music (RCM). After, I stopped taking lessons and decided to play on my own time and play my own music.", textFirst: true},
  {src: '../../../images/icons/music.svg', title: 'Electronic', text: "After enjoying the sounds of piano and the harmony in the chords, I grew a interest in electronic music when I was about 10 years old and never stopped listnening to it since. I've been a big fan of Electronic Dance Music (EDM) and went to many big festivals such as Toronto's Digital Dreams and Veld as well as others like Festival d'été Du Quebec where I got the chance to see some of my favourite artists."}
];

export default class InterestsCardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render(){
    return(
      <Element name="Interests">
        <Inner 
          num={1}
          data={sports} 
          icon='../../../images/icons/cup.svg' 
          title='Sports' 
          subtitle={ this.props.size === 'xs' ? '' : 'Sports are a big part of my life and they are what I believe to be the essence to my success'}
        />
        <div style={{overflow: 'hidden'}}>
        <Inner 
          num={2}
          data={computers} 
          icon='../../../images/icons/laptop.svg' 
          title='Computers' 
          subtitle={ this.props.size === 'xs' ? '' : 'I strive to learn more and more on this topic everyday'}
        />
        </div>
        <Inner 
          num={1}
          data={travelling} 
          icon='../../../images/icons/luggage.svg' 
          title='Travelling' 
          subtitle={ this.props.size === 'xs' ? '' : 'Exploration is a never ending process in my life. I love to discover new places on Earth.'}
        />
        <Inner 
          num={2}
          data={music} 
          icon='../../../images/icons/compact-disc.svg' 
          title='Music' 
          subtitle={ this.props.size === 'xs' ? '' : "Music is a great interest of mine."}
        />
      </Element>
    );
  }
}
