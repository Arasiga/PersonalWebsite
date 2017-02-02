import React, { Component } from 'react';
import about from '../../../styles/sass/about.scss';
import { Row, Col, Jumbotron } from 'react-bootstrap';

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
      <Col lg={12} md={12} sm={12} className="modalTitleContainer">
        <IconButton
          style={{float: 'right', position: "fixed", zIndex: "1000"}}
          onTouchTap={ () => {this.props.hide()}}
        >
          <CloseIcon style={{fill: '#fff'}}/>
        </IconButton>
        <div className="modalTitle">
          <img src={this.props.info.image} className="modal-image"/>
          <h1 style={{color: "white", zIndex: "1000"}}>
            {this.props.info.title}
          </h1>
        </div>
      </Col>
    )
  }

  _renderText = () => {
    return (
      <div className="modal-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    )
  }

  _renderGallery = () => {
    return (
      <Row style={{padding: "25px"}}>
        {
          this.props.info.gallery.map( (img, index) => {
            return (
              <Col lg={4} md={4} sm={6} xs={6}>
                <img src={img} height="100%" width="100%"/>
              </Col>
            )
          })
        }
      </Row>
    )
  }

  render(){
    console.log(this.props.info);
    return (
      <Dialog
        onRequestClose={() => {this.props.hide() }}
        contentStyle={customContentStyle}
        open={this.props.open}
        style={{zIndex: "100000"}}
        bodyStyle={{padding: "none", backgroundColor: "#BFBFBF", overflowX: "hidden"}}
        autoScrollBodyContent
        // autoDetectWindowHeight
      >
        {this._renderTitle()}
        <div className="center">
          {this._renderText()}
          <h2 style={{margin: "auto"}}> Gallery. </h2>
          <hr className='seperator' />
        </div>
        {this._renderGallery()}
      </Dialog>
    )
  }
}
