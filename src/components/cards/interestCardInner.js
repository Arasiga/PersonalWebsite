import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import { Col, Row } from 'react-bootstrap';  
import Paper from 'material-ui/Paper';

export default class Inner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandChange = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render(){
    return(
      <Card style={{marginBottom: '35px'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={<img src={this.props.icon} height='44px' width='44px' />}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <Row>
            {
              this.props.data.map( (item, index) => {
                return(
                  <Col key={index} lg={4} md={4} sm={6} xs={12} style={{textAlign: 'center', marginBottom: '20px'}}>
                    <img src={item.src} height='120px' width='120px' style={{borderRadius: '50%', marginBottom: '15px'}}/>
                    <p> {item.text} </p>
                  </Col>
                );
              })
            }
          </Row>
        </CardText>
      </Card>
    );
  }
}