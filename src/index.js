import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/App';
import './styles/index.scss';

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();
