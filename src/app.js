import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {calcWidth} from './calcWidth';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

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
      size: calcWidth(window.innerWidth)
    }
  }

  _handleResize = () => {
    const size = calcWidth(window.innerWidth);
    this.setState({
      size: size
    })
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._handleResize);
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <MainAppBar />
          <Main />
          <About size={this.state.size}/>
          <Skills />
          <Projects size={this.state.size}/>
          <Contact />
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
