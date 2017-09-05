import React, { Component } from 'react';
import { connect } from 'react-redux';

// normalize style
import './App.scss';

class App extends Component {
  render() {
      return (
          <div className="App">
              { this.props.children }
          </div>
      );
  }
}


export default connect()(App)