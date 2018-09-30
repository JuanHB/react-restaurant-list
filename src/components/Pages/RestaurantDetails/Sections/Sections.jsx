import React from 'react';
import { toCurrency } from 'src/helpers/NumberHelpers';
import './Sections.scss';

const Sections = (props) => {

  const { sections } = props;

  /**
   * Handles the button click
   * @param item
   */
  const handleItemButtonClick = item => console.log(item);

  const renderSections = () => {
    return sections.map(sec => (
      <div key={ sec.id } className='section__block'>
        <span className='section__name'>{ sec.name }</span>
        <ul className='section__items'>
          {
            sec.items.map(item =>
              <li key={ item.id } className='section__item'>
                <div className='item__name'>{ item.name }</div>
                <div className='item__desc'>{ item.description }</div>
                <div className='item__price'>{ toCurrency(item.price, 'EUR') }</div>
                <div className='item_button'>
                  <button onClick={() => handleItemButtonClick(item)}>Add To Cart</button>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    ));
  };

  return (
    <div className='details-container__sections'>
      { renderSections() }
    </div>
  );
};

export default Sections;