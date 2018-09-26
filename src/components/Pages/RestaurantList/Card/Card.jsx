import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
      <Link to={`/restaurant/${props.id}`}>
        { props.general.name }
      </Link>
    </div>
  );
};

export default Card;