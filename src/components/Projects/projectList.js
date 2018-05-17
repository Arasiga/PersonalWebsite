import React, { Component } from 'react';

import projects from '../../../styles/sass/projects.scss';
import { Col, Row} from 'react-bootstrap';
import ProjectModal from './projectModal';

export default class ProjectList extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      info: {
        title: "",
        image: "",
        technologies: [],
        description: "",
        gallery: []
      }
    }
  }

  _handleModal = () => {
    this.setState({
      open: !this.state.open
    });
  }

  _handleHexColor = () => {
    let hexColor = [];

    switch(this.props.color) {
      case 'red':
        hexColor[0] = "#EC644B";
        hexColor[1] = "#D24D57";
        hexColor[2] = "#E74C3C";
        hexColor[3] = "#CF000F";
        hexColor[4] = "#96281B";
        hexColor[5] = "#F64747";
        break;
      case 'green':
        hexColor[0] = "#03A678";
        hexColor[1] = "#4DAF7C";
        hexColor[2] = "#2ABB9B";
        hexColor[3] = "#00B16A";
        hexColor[4] = "#1E824C";
        hexColor[5] = "#049372";
        break;
      case 'blue':
        hexColor[0] = "#22A7F0";
        hexColor[1] = "#3498DB";
        hexColor[2] = "#5C97BF";
        hexColor[3] = "#2574A9";
        hexColor[4] = "#1E8BC3";
        hexColor[5] = "#52B3D9";
        break;
      default:
        hexColor[0] = "#03A678";
        hexColor[1] = "#4DAF7C";
        hexColor[2] = "#2ABB9B";
        hexColor[3] = "#00B16A";
        hexColor[4] = "#1E824C";
        hexColor[5] = "#049372";
    }

    return hexColor;
  }

  _setProject = (type) => {
    let info = [];

    switch(type){
      case 'Contact-List':
        info.title = "Contact List.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/contact.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/heroku-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/jquery-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/ruby-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/logo.png"
        ];
        info.description = "This simple contact list web app was one of my first projects that were of 'larger' scale. By 'larger' scale I mean having a website hosted with a full backend interactions and client side rendering of the data served by the server. I was still very new to web development at this stage and so the UI/UX isn't the best but keep in mind this was my very first attempt at a full blown web app. In this app, users are able to create an account, sign in and add, update and edit their contact list. Nothing too serious but nonetheless I was very happy to get an app like this released after only two~three weeks of learning web development. ";
        info.gallery = [
          "link",
          "https://my-contact-l.herokuapp.com/"
        ];
        break;
      case 'CodeMeeting':
        info.title = "CodeMeeting.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/webRTC.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/postgresql-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg"
        ];
        info.description = "This project was much larger than the contact list web app. We were a team of three and I was in charge of some of user interface as well as the website's live interactions. Code Meeting is a web app that facilitates remote pair programming allowing users to join a room and take advantage of video chat, live programming and a live white board. We have a built in text editor with text highlighting depending on which language you choose between C++, Javascript and Ruby. We also have the ability to compile code with serverside scripts. I used technologies such as webRTC and socket.io for the app's live interactions and used React in conjunction for CSS / Boostrap for the ui. Here are some pictures of the project :";
        info.gallery = [
          "true",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting1.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting2.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting3.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting4.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting5.jpg"
        ];
        break;
      case 'Personal-Website':
        info.title = "Personal Website.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/personalwebsite.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/illustrator-plain.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/aws.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/material-ui-logo.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg"
        ];
        info.description = "You're looking right at this project :)! I decided to have a resource that tells more about myself other than social media. I thought I would have some more information about myself on here so people can learn more about me. I also wanted to practice my web development skills further and try new things such as AWS and Adobe Illustrator which I used to host this website and design the vector graphics you see at the top of this page and my icon! I built this website from the ground up and I am very excited to be able to deliver this content for you guys :D.";
        info.gallery = [
          "false",
          "You're already looking at the gallery! :-)"
        ];
        break;
      case 'ROOT-Education':
        info.title = "ROOT-Education.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/root.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/material-ui-logo.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/sequelize-logo.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/git-original.svg",
        ];
        info.description = "ROOT education was a project that my instructor at Lighthouse Labs wanted build and I helped him with some components and UI/UX. This was the first project that I worked on where I was getting paid. In other words, it is my first job in the industry. While working on ROOT Education I was able to learn a lot of good practices when it comes to team collaboration such as properly using git source control in conjunction with a TRELLO board. I learnt a lot about project organization and AGILE development methodology.";
        info.gallery = [
          "false",
          "Unfortunately, I do no have permission to post more pictures of the ROOT Education app. Sorry!"
        ];
        break;
      case 'MindsetLabs.io':
        info.title = "MindsetLabs.io.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindset.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/material-ui-logo.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/git-original.svg",
        ];
        info.description = "Mindset Labs was a group of developers that included my instructor at Lighthouse Labs and the iOS instructor at Lighthouse Labs. We all got together and collected some freelance work and we wanted to created a team page. I was in charge of creating most of the components for this website such as nav bars, a bot that would interact with users, cards, etc. Unfortunately we didn't get the chance to host this website as we all went on our separate ways after the freelance work was done. Nonetheless, it was a pleasure working with them. Here are some pictures of the website:";
        info.gallery = [
          "true",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindsetlabs1.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindsetlabs2.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindsetlabs3.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindsetlabs4.jpg",
          "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindsetlabs5.jpg"
        ];
        break;
      case 'PipsPass':
        info.title = "PipsPass.";
        info.image = "https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/pipspass.jpg";
        info.technologies = [
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/react-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/material-ui-logo.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/nodejs-original-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/aws.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/git-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/html5-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/bootstrap-plain-wordmark.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/javascript-original.svg",
          "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/css3-original.svg",

        ];
        info.description = "Pipspass was one of the freelance projects we got as part of the initial group at Mindset Labs. Pipspass is a iOS, Web and Android app that unites children around Toronto by offering exciting classes and activities. Users are able to filter through all kinds of activities and sign their children up for their favourites. I was in charge or the UI/UX and responsible for creating the majority of components found on the website. This was the largest project I've worked on as it lasted over 3 months time to release an MVP.";
        info.gallery = [
          "false",
          "Unfortunately, I do not have permission to post any more pictures regarding the PipsPass project :-(."
        ];
        break;
    }

    this.setState({
      info: info
    });
  }

  render () {
    let colors = this._handleHexColor();

    return (
      <Row>
        <ProjectModal open={this.state.open} hide={this._handleModal} info={this.state.info}/>
        {/* <Row className="project-row"> */}
          <Col
            className="project"
            style={{backgroundColor: colors[0]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Contact-List") }}
          >
            <h1 style={{color: "#ECECEC"}}> Contact List. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[1]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("CodeMeeting") }}
          >
            <h1 style={{color: "#ECECEC"}}> CodeMeeting. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[2]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Personal-Website") }}
          >
            <h1 style={{color: "#ECECEC"}}> Personal Website. </h1>
          </Col>
        {/* </Row> */}
        {/* <Row className="project-row"> */}
          <Col
            className="project"
            style={{backgroundColor: colors[3]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("ROOT-Education") }}
          >
            <h1 style={{color: "#ECECEC"}}> ROOT Education. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[4]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("MindsetLabs.io") }}
          >
            <h1 style={{color: "#ECECEC"}}> MindsetLabs.io </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[5]}}
            lg={4} md={4} sm={6} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("PipsPass") }}
          >
            <h1 style={{color: "#ECECEC"}}> PipsPass. </h1>
          </Col>
        {/* // </Row> */}
      </Row>
    );
  }
}
