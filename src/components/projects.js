import React, { Component } from 'react';
import Media from './mediaObject';
// components
import { Col, Row } from 'react-bootstrap';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Projects extends Component {
  render() {
    return (
      <section className='project-div'>
        <Element name="Projects">
          <div name="Projects" style={{padding: '20px', width: '80%', margin: 'auto'}}>
            <h1 className='section-title' style={{fontFamily: "Comic Sans MS", letterSpacing: '2px', fontWeight: 'lighter'}}> My Projects </h1>
            <hr className='hr-style' style={{marginBottom: '40px'}}/>
            <Media 
              icon={<img src='../../images/ProjectScreenshots/Betting.png' className='project-img' />}
              title='Simple Betting Game'
              link='https://github.com/Arasiga/Betting_Game'
              skills={['../../images/progIcons/html5-original.svg', '../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/jquery-plain-wordmark.svg', '../../images/progIcons/heroku-plain-wordmark.svg']}
              description='This is a single page applicated where a user can test their luck betting virtual money by specifying their own odds. This app was created using jQuery and nodeJS while being hosted on Heroku.'
              textFirst={true}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/Contact.png' className='project-img' />}
              title='Contact List'
              link='https://github.com/Arasiga/Contact_List_Web_App'
              skills={['../../images/progIcons/ruby-original.svg', '../../images/progIcons/postgresql-plain-wordmark.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/logo.png']}
              description='My interpretation of a very common Contact List app where a user can login/signup and manipulate their contacts. This app was created using sinatra(ruby) with a postgres database that is being hosted on Heroku. '
              textFirst={ this.props.size === 'xs' ? true : false}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/RubyPad.png' className='project-img' />}
              title='RubyPad'
              link='https://github.com/Arasiga/RubyPad'
              skills={['../../images/progIcons/ruby-original.svg', '../../images/progIcons/jquery-plain-wordmark.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/css3-original.svg']}
              description='RubyPad was our midterm project at Lighthouse Labs. We were a group of three working on this project. RubyPad allows a group of people to join a room and compile some ruby code all while being able to chat with out built in chat-box. I was responsible for creating the user database as well as authentication for login and signup and most of the front-end design.'
              textFirst={true}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/CodeMeeting.png' className='project-img' />}
              title='Code-Meeting'
              link='https://github.com/hjsu/Code-Meeting'
              skills={['../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/react-original.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/css3-original.svg', '../../images/progIcons/javascript-original.svg']}
              description='Code-Meeting was our final project at Lighthouse Labs which is an enhancement of our midterm project. We were the same team and added video chat, voice chat and a whiteboard feature as well as improved design and the ability to compile javascript and c++. I was in charge of the video, chat and whiteboard components as well as some design aspects. I used Web RTC for Video Chat and Socket.io for chat and whiteboard features.'
              textFirst={ this.props.size === 'xs' ? true : false}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/ROOT.png' className='project-img' />}
              title='ROOT'
              skills={['../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/react-original.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/javascript-original.svg']}
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              textFirst={true}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/mindset.png' className='project-img' />}
              title='Mindset.io'
              skills={['../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/react-original.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/javascript-original.svg']}
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              textFirst={ this.props.size === 'xs' ? true : false}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/pipspass.png' className='project-img' />}
              title='PipsPass'
              skills={['../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/react-original.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg', '../../images/progIcons/material-ui-logo.svg', '../../images/progIcons/sequelize-logo.svg']}
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              textFirst={true}
            />
            <hr className='hr-style' />
            <Media 
              icon={<img src='../../images/ProjectScreenshots/ROOT.png' className='project-img' />}
              title='Personal Website'
              skills={['../../images/progIcons/nodejs-original-wordmark.svg', '../../images/progIcons/react-original.svg', '../../images/progIcons/bootstrap-plain-wordmark.svg']}
              description='This is the website you are looking at right now that I build from scratch using react and css.'
              textFirst={ this.props.size === 'xs' ? true : false}
            />
            <hr className='hr-style' />
          </div>
        </Element>
      </section>
    );
  }
}







