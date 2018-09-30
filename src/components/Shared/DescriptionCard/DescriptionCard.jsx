import React from 'react';
import { capitalizeEveryWord } from "src/helpers/StringHelpers";
import PropTypes from 'prop-types'
import './DescriptionCard.scss';

const DescriptionCard = (props) => {

  const { address, image, name, rating, categories } = props;

  const renderCategories = () => {
    return (
      <ul>
        {
          categories.map((cat, i) =>
            <li key={ i }> { capitalizeEveryWord(cat.split('-').join(' ')) } </li>
          )
        }
      </ul>
    );
  };

  return (
    <div className={`${props.className} description-card`}>
      <div className='description__logo'>
        <img src={ image }/>
      </div>
      <div>
        <div className='description__title'>
          <h1>{ name }</h1>
          <h4>{ rating }</h4>
        </div>
        <div className='description__location'>
          { address }
        </div>
        <div className='description__categories'>
          { renderCategories() }
        </div>
      </div>
    </div>
  );
};

DescriptionCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  address: PropTypes.string,
  categories: PropTypes.array,
};

export default DescriptionCard;