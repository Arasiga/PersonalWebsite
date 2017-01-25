import React, { Component } from 'react';

import projects from '../../../styles/sass/projects.scss';
import { Col, Row} from 'react-bootstrap';
import ProjectModal from './projectModal';

export default class ProjectList extends Component {

  constructor(props){
    super(props);
    this.state={
      open: false,
      info: []
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

  _setProject = () => {
    let info = [];


  }

  render () {
    let colors = this._handleHexColor();

    return (
      <div>
        <ProjectModal open={this.state.open} hide={this._handleModal}/>
        <Row className="project-row">
          <Col
            className="project"
            style={{backgroundColor: colors[0]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Contact-List") }}
          >
            <h1 style={{color: "#ECECEC"}}> Contact List. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[1]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("CodePad") }}
          >
            <h1 style={{color: "#ECECEC"}}> CodePad. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[2]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("Personal-Website") }}
          >
            <h1 style={{color: "#ECECEC"}}> Personal Website. </h1>
          </Col>
        </Row>
        <Row className="project-row">
          <Col
            className="project"
            style={{backgroundColor: colors[3]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("ROOT-Education") }}
          >
            <h1 style={{color: "#ECECEC"}}> ROOT Education. </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[4]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("MindsetLabs.io") }}
          >
            <h1 style={{color: "#ECECEC"}}> MindsetLabs.io </h1>
          </Col>
          <Col
            className="project"
            style={{backgroundColor: colors[5]}}
            lg={4} md={4} sm={12} xs={12}
            onClick={ () => { this._handleModal(); this._setProject("PipsPass") }}
          >
            <h1 style={{color: "#ECECEC"}}> PipsPass. </h1>
          </Col>
        </Row>
      </div>
    );
  }
}
