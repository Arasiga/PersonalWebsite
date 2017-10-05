import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {calcWidth} from './calcWidth';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ColorLens from 'material-ui/svg-icons/image/color-lens';

import Main from './components/main';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Projects from './components/projects';
import MainAppBar from './components/mainAppBar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      size: calcWidth(window.innerWidth),
      color: ""
    }
  }

  _handleResize = () => {
    const size = calcWidth(window.innerWidth);
    this.setState({
      size: size
    })
  }

  _handleColorChange = (colorToChange) => {
    const color = colorToChange;
    this.setState({
      color: colorToChange
    });
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._handleResize);
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{overflowX: "hidden"}}>
          <MainAppBar />
          <IconMenu
            iconButtonElement={<IconButton style={{margin: "5px"}}><ColorLens color={"white"}/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            style={{position: "fixed", zIndex: "1000", right: "0px"}}
          >
            <MenuItem onClick={ () => { this._handleColorChange("red"); }} style={{zIndex: "100000"}} primaryText="Red" />
            <MenuItem onClick={ () => { this._handleColorChange("green"); }} style={{zIndex: "100000"}} primaryText="Green" />
            <MenuItem onClick={ () => { this._handleColorChange("blue"); }} style={{zIndex: "100000"}} primaryText="Blue" />
          </IconMenu>

          <Main color={this.state.color} />
          <About size={this.state.size} color={this.state.color}/>
          <Skills color={this.state.color} />
          <Projects size={this.state.size} color={this.state.color}/>
          <Contact color={this.state.color}/>
        </div>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'));
