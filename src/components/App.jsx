import React, {Component} from 'react';
// import {BrowserRouter as Router} from "react-router-dom";
// import { devToolsEnhancer  } from 'redux-devtools-extension';

class App extends Component {

  title = 'React Restaurant List';

  render() {
    return (
      <div>{this.title}</div>
    );
  }

}

export default App;
