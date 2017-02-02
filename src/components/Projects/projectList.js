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
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/Contact.png";
        info.description = "";
        info.gallery = [

        ];
        break;
      case 'CodeMeeting':
        info.title = "CodeMeeting.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/CodeMeeting.png";
        info.description = "";
        info.gallery = [

        ];
        break;
      case 'Personal-Website':
        info.title = "Personal Website.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/personalWebsite.png";
        info.description = "";
        info.gallery = [

        ];
        break;
      case 'ROOT-Education':
        info.title = "ROOT-Education.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/ROOT.png";
        info.description = "";
        info.gallery = [

        ];
        break;
      case 'MindsetLabs.io':
        info.title = "MindsetLabs.io.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/mindset.png";
        info.description = "";
        info.gallery = [

        ];
        break;
      case 'PipsPass':
        info.title = "PipsPass.";
        info.image = "http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/projectScreenshots/pipspass.png";
        info.description = "";
        info.gallery = [

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
      <div>
        <ProjectModal open={this.state.open} hide={this._handleModal} info={this.state.info}/>
        <Row className="project-row">
          <Col
            className="project"
            style={{backgroundColor: colors[0]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Contact-List") }}
          >
            <h2 style={{color: "#ECECEC"}}> Contact List. </h2>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[1]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("CodeMeeting") }}
          >
            <h2 style={{color: "#ECECEC"}}> CodeMeeting. </h2>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[2]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Personal-Website") }}
          >
            <h2 style={{color: "#ECECEC"}}> Personal Website. </h2>
          </Col>
        </Row>
        <Row className="project-row">
          <Col
            className="project"
            style={{backgroundColor: colors[3]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("ROOT-Education") }}
          >
            <h2 style={{color: "#ECECEC"}}> ROOT Education. </h2>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[4]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("MindsetLabs.io") }}
          >
            <h2 style={{color: "#ECECEC"}}> MindsetLabs.io </h2>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[5]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("PipsPass") }}
          >
            <h2 style={{color: "#ECECEC"}}> PipsPass. </h2>
          </Col>
        </Row>
      </div>
    );
  }
}
