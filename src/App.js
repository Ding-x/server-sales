import React, { Component } from 'react';
import Main from "./component/Main"
import {HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Main/>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
