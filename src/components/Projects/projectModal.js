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
            this.props.info.technologies.map( (item, index) => {
              return (
                <Col key={index} lg={1} md={1} sm={1} xs={1} >
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
          {this.props.info.description}
        </p>
      </div>
    )
  }

  _renderGalleryInfo = () => {
    if (this.props.info.gallery[0] == "true") {
      return (
        <div>
          {
            this.props.info.gallery.map( (image, index) => {
              if (index > 0) {
                return (
                  <Col key={index} lg={4} md={4} sm={6} xs={6} style={{marginBottom: "30px"}}>
                    <img src={image} height="100%" width="100%" style={{top: "0px"}}/>
                  </Col>
                )
              }
            })
          }
        </div>
      )
    } else if (this.props.info.gallery[0] == "link") {
      return (
        <p> No need for a gallery here! Feel free to checkout the hosted version of this app <a target="_blank" href={this.props.info.gallery[1]}>here!</a></p>
      )
    } else if (this.props.info.gallery[0] == "false") {
      return (
        <p> { this.props.info.gallery[1] } </p>
      )
    }
  }

  _renderGallery = () => {
    return (
      <div style={{padding: "10px", marginTop: "35px"}}>
        <h2> Gallery. </h2>
        <hr style={{marginLeft: "0px"}} className="seperator" />
        <Row style={{marginLeft: "0px", marginRight: "0px"}}>
          {this._renderGalleryInfo()}
        </Row>
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
