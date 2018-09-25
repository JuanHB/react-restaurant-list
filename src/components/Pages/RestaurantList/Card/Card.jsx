import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
      <Link to='/restaurant'>
        { props.name }
      </Link>
    </div>
  );
};

export default Card;