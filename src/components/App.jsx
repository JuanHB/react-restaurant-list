import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from 'src/reducers';
import {BrowserRouter as Router} from "react-router-dom";
import MainContainer from 'src/components/MainContainer/MainContainer';
import { devToolsEnhancer  } from 'redux-devtools-extension';

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={createStore(reducers, devToolsEnhancer())}>
          <MainContainer/>
        </Provider>
      </Router>
    );
  }

}

export default App;
