import React, { Component } from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
  height: '100vh'
}

export default class ProjectModal extends Component {

  _renderTitle = () => {
    return (
      <Col lg={12} md={12} sm={12} className="modalTitleContainer">
        <IconButton
          style={{float: 'right', position: "fixed", zIndex: "1000"}}
          onTouchTap={ () => {this.props.hide()}}
        >
          <CloseIcon style={{fill: '#fff', position: "fixed"}}/>
        </IconButton>
        <div className="modalTitle">
          <img src={this.props.info.image} className="modal-image"/>
        </div>
      </Col>
    )
  }

  _renderTechnologies = () => {
    return (
      <div style={{padding: "10px", marginTop: "35px"}}>
        <h2>Technologies. </h2>
        <hr style={{marginLeft: "0px"}} className="seperator" />
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
      <Dialog
        onRequestClose={() => {this.props.hide() }}
        contentStyle={customContentStyle}
        open={this.props.open}
        style={{zIndex: "100000"}}
        bodyStyle={{padding: "none", backgroundColor: "#BFBFBF", overflowX: "hidden"}}
        autoScrollBodyContent
      >
        {this._renderTitle()}
        {this._renderTechnologies()}
        {this._renderDescription()}
        {this._renderGallery()}
      </Dialog>
    )
  }
}
