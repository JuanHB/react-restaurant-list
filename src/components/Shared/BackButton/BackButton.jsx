import React from 'react';
import {withRouter} from 'react-router-dom';
import './BackButton.scss';

class BackButton extends React.Component {
  render () {
    return (
      <div
        className='back-button'
        onClick={ () => this.props.history.goBack() }>
        { this.props.children }
      </div>
    )
  }
}

export default withRouter(BackButton);