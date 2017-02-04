import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import contact from '../../styles/sass/contact.scss';
import { newMessage } from '../reducers/formReducer.js'
// components
import { Row, Col } from 'react-bootstrap';
import { TextField, RaisedButton, Snackbar } from 'material-ui';

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scroller = Scroll.scroller;


const styles = {
  // errorStyle: {
  //   color: "white",
  // },
  underlineStyle: {
    borderColor: "white",
  },
  floatingLabelStyle: {
    color: "white",
  },
  floatingLabelFocusStyle: {
    color: "white",
  },
};

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  _handleHexColor = () => {
    let hexColor;

    switch(this.props.color) {
      case 'red':
        hexColor = "#E43F3F";
        break;
      case 'green':
        hexColor = "#03C9A9";
        break;
      case 'blue':
        hexColor = "#19B5FE";
        break;
      default:
        hexColor = "#03C9A9";
    }

    return hexColor;
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  _handleFormSubmit({name = '', email = '', message}) {
    this.props.fields.name.value = '';
    this.props.fields.message.value = '';
    this.props.fields.email.value = '';
    this.setState({ open: true });
    this.props.newMessage(name, email, message)
  }

  render() {

    const {handleSubmit, fields: {name, email, message}} = this.props;

    return (
      <Col lg={12} md={12} sm={12} xs={12} className='contact-div' style={{color: "white", backgroundColor: this._handleHexColor()}}>
        <Snackbar
          open={this.state.open}
          message="Email Sent!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
        <Element name="Contact">
          {/* <Row className="form">
            <Col lg={4} md={4} smHidden={true}>

            </Col>
            <Col lg={7} md={7} sm={12}> */}
              <h1 > Contact Me! </h1>
              <a href='https://github.com/Arasiga' target="_blank">
                <img style={{margin: '10px', cursor: 'pointer'}} src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/github-logo.svg" height='37px' width='37px' />
              </a>
              <a href='https://ca.linkedin.com/in/alex-rasiga-b3b599119' target="_blank">
                <img style={{cursor: 'pointer'}} src="http://alexrasiga.ca.images.s3-website-us-east-1.amazonaws.com/progIcons/linkedin-logo.svg" height='37px' width='37px' />
              </a>
              <p style={{fontSize: "19px"}}> This information will be sent to my email  </p>
              <form onSubmit={handleSubmit(this._handleFormSubmit.bind(this))}>
                <TextField
                  {...name}
                  style={{width: '100%'}}
                  hintText="Optional, but it's nice to know who you are :)"
                  floatingLabelText="Your Name"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                /><br />
                <TextField
                  {...email}
                  style={{width: '100%'}}
                  hintText="Only needed if you would like me to reply!"
                  floatingLabelText="Your Email"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                /><br />
                <TextField
                  {...message}
                  errorText={ message.touched && message.error }
                  style={{width: '100%'}}
                  hintText="Be Nice :-)"
                  multiLine={true}
                  rows={1}
                  floatingLabelText="Message"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                /><br />
                <RaisedButton
                  secondary
                  label='Submit'
                  type='submit'
                />
              </form>
            {/* </Col>
          </Row> */}
        </Element>
      </Col>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.message){
    errors.message = "Please Enter a Message";
  }

  return errors;
}

export default reduxForm({
  form: 'MessageForm',
  fields: ['name', 'email', 'message'],
  validate
}, null, { newMessage })(Contact);
