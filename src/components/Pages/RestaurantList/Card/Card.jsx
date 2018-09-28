import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = props => {
  return (
    <article className='restaurant-card'>
      <Link to={`/restaurant/${props.id}`}>
        { props.general.name } - { props.rating.average }
      </Link>
    </article>
  );
};

export default Card;