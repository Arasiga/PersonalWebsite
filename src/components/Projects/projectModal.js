import React, { Component } from 'react';

import { Row, Col, Jumbotron, Modal } from 'react-bootstrap';

import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import IconButton from 'material-ui/IconButton';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
  height: '100vh'
}

export default class ProjectModal extends Component {

  _renderTitle = () => {
    return (
      <div className="modalTitle">
        <img src={this.props.info.image} className="modal-image"/>
      </div>
    )
  }

  _renderTechnologies = () => {
    return (
      <div style={{padding: "10px", marginTop: "35px"}}>
        <h2>Technologies. </h2>
        <hr style={{marginLeft: "0px"}} className="seperator" />
        <Row>
          {
            this.props.info.technologies.map( (item, ind) => {
              return (
                <Col lg={1} md={1} sm={1} xs={1} >
                  <img src={item} style={{minHeight: "30px", minWidth: "30px"}} height="100%" width="100%" />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }

  _renderDescription = () => {
    return (
      <div style={{padding: "10px", marginTop: "35px"}}>
        <h2>About {this.props.info.title} </h2>
        <hr style={{marginLeft: "0px"}} className="seperator" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }

  _renderGallery = () => {
    return (
      <div style={{padding: "10px", marginTop: "35px"}}>
        <h2> Gallery. </h2>
        <hr style={{marginLeft: "0px"}} className="seperator" />
      </div>
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
        <Modal.Body bsClass="modal-style" style={{padding: "none", backgroundColor: "#EEEEEE"}}>
          <IconButton
            style={{float: 'right', position: "fixed", zIndex: "1000"}}
            onTouchTap={ () => {this.props.hide()}}
          >
            <CloseIcon style={{fill: '#fff'}}/>
          </IconButton>
          {this._renderTitle()}
          {/* <div className="center">   */}
            {this._renderTechnologies()}
            {this._renderDescription()}
            {/* {this._renderText()} */}
          {/* </div> */}
          {this._renderGallery ()}
        </Modal.Body>
      </Modal>
    )
  }
}
