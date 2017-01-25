import React, { Component } from 'react';
import about from '../../../styles/sass/about.scss';
import { Row, Col, Jumbotron } from 'react-bootstrap';

import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none'
}

export default class InterestsModal extends Component {

  _renderTitle = () => {
    return (
      <Col lg={12} md={12} sm={12} className="modalTitleContainer">
        <IconButton
          style={{float: 'right', position: "absolute", zIndex: "1000"}}
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

  _renderCard = (data) => {
    return (
      <Row>
        {
          data.map( (item, key) => {
            return(
              <Col lg={4} md={4} sm={6} xs={12} className="modal-info-card">
                <img src={item.image} className="modal-info-card-image"/>
                <p>
                  {item.description}
                </p>
              </Col>
            );
          })
        }
      </Row>
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
        {this._renderCard(this.props.info.text)}
      </Dialog>
    )
  }
}
