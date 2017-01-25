import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none'
}

export default class ProjectModal extends Component {

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
        This dialog spans the entire width of the screen.
      </Dialog>
    )
  }
}
