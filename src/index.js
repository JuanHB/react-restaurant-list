import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/App';
import './index.scss';

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();
