import React, { Component } from 'react';
import Scroll from 'react-scroll';
import main from '../../styles/sass/main.scss';
import { Col, Row } from 'react-bootstrap';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

export default class Main extends Component {

  _handleHexColor = () => {
    let hexColor;

    switch(this.props.color) {
      case 'red':
        hexColor = "#96281B";
        break;
      case 'green':
        hexColor = "#26A65B";
        break;
      case 'blue':
        hexColor = "#446CB3";
        break;
      default:
        hexColor = "#26A65B";
    }

    return hexColor;
  }

  render () {
    return (
      <section>
        <Element name="Top">
          <div className='main' style={{backgroundColor: this._handleHexColor()}}>
            <img src="/images/test.svg" className="svg-image" />
            <h1 style={{color: "white"}}> Welcome. </h1>
          </div>
        </Element>
      </section>
    );
  }
}
