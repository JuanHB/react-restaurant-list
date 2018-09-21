import React, {Component} from 'react';
// import {BrowserRouter as Router} from "react-router-dom";
// import { devToolsEnhancer  } from 'redux-devtools-extension';

class App extends Component {

  title = 'My Minimal React Webpack Babel Setup';

  render() {
    return (
      <div>{this.title}</div>
    );
  }

}

export default App;
