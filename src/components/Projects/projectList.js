import React, { Component } from 'react';

import projects from '../../../styles/sass/projects.scss';
import { Col, Row } from 'react-bootstrap';

export default class ProjectList extends Component {

  render () {
    return (
      <div>
        <Row className="project-row">
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
          <Col className="project" lg={4} md={4} sm={4} xs={4}>

          </Col>
        </Row>
      </div>
    );
  }
}
