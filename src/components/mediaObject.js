import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

export default class Media extends Component {

  _renderImage({icon}){
    return(
      <Col lg={6} md={6} sm={12} style={{marginBottom: '18px'}}>
        {icon}
      </Col>
    );
  }

  _renderText() {
    const { title, description } = this.props;
    return(
      <Col lg={6} md={6} sm={12} >
        <div className='project-text-container'>
          {
            this.props.link ?
            <a href={this.props.link} target="_blank" style={{color: 'black'}} ><h3 style={{cursor: 'pointer'}}> {title} </h3></a> :
            <h3 style={{fontWeight: 'lighter'}}> {title} </h3>
          }
          <p> {description} </p>
          {
            this.props.skills ?
            this.props.skills.map((src, index) => {
              return (
                <img key={index} src={src} width='50px' height='50px' style={{margin: '10px'}}/>
              );
            }) :
            ''
          }
        </div>
      </Col>
    );
  }

  render() {
    const { textFirst } = this.props;
    return (
      <div>
          <Row style={{marginTop: '40px', marginBottom: '40px'}}>
            {textFirst ? this._renderText() : this._renderImage(this.props)}
            {textFirst ? this._renderImage(this.props) : this._renderText()}
          </Row>
      </div>
    );
  }
}
