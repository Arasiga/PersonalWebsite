import React, { Component } from 'react';
import about from '../../../styles/sass/about.scss';
import { Row, Col, Jumbotron, Modal } from 'react-bootstrap';

import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
  height: "100vh"
}

export default class InterestsModal extends Component {

  _renderTitle = () => {
    return (
      // <Col lg={12} md={12} sm={12} className="modalTitleContainer">
        <div className="modalTitle">
          <img src={this.props.info.image} className="modal-image"/>
          <h1 style={{color: "white", zIndex: "1000"}}>
            {this.props.info.title}
          </h1>
        </div>
      // </Col>
    )
  }

  _renderText = () => {
    return (
      <div className="modal-text" dangerouslySetInnerHTML={{__html: this.props.info.text}}>
        {/* {this.props.info.text} */}
      </div>
    )
  }

  _renderGallery = () => {
    return (
      <Row style={{padding: "25px"}}>
        {
          this.props.info.gallery.map( (img, index) => {
            return (
              <Col lg={4} md={4} sm={6} xs={6} style={{marginBottom: "20px"}}>
                <img src={img} height="100%" width="100%" style={{top: "0px"}}/>
              </Col>
            )
          })
        }
      </Row>
    )
  }

  render(){
    return (
      <Modal
        show={this.props.open}
        onHide={this.props.hide}
        bsSize="lg"
        style={{zIndex: "100000", paddingRight: "0", overflowX: "hidden"}}
      >
        <Modal.Body bsClass="modal-style" style={{padding: "none"}}>
          <IconButton
            style={{float: 'right', position: "fixed", zIndex: "1000"}}
            onTouchTap={ () => {this.props.hide()}}
          >
            <CloseIcon style={{fill: '#fff'}}/>
          </IconButton>
          {this._renderTitle()}
          <div className="center">
            {this._renderText()}
            <h2 style={{margin: "auto"}}> Gallery. </h2>
            <hr className='seperator' />
          </div>
          {this._renderGallery ()}
        </Modal.Body>
      </Modal>
    )
  }
}
