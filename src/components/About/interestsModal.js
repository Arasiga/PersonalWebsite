import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none'
}

export default class InterestsModal extends Component {

  render(){
    return (
      <Dialog
        // actions={actions}
        onRequestClose={() => {this.props.hide() }}
        contentStyle={customContentStyle}
        open={this.props.open}
        style={{zIndex: "100000"}}
        bodyStyle={{padding: "none"}}
      >
        <div style={{backgroundColor:"red", height: "250px", padding: 'none'}}>

        </div>
        {/* {this.props.info.title}
        {this.props.info.text} */}
      </Dialog>
    )
  }
}
