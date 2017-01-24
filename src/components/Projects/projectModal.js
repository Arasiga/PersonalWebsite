import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import Dialog from 'material-ui/Dialog';

export default class ProjectModal extends Component {

  render(){
    return (
      <Dialog
        title="Dialog With Custom Width"
        // actions={actions}
        onRequestClose={() => {this.props.hide() }}
        // contentStyle={customContentStyle}
        open={this.props.open}
        style={{zIndex: "100000", overflowX: "hidden"}}
      >
        This dialog spans the entire width of the screen.
      </Dialog>
    )
  }
}
