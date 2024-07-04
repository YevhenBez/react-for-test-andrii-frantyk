import React from 'react';
import css from './css/goods.module.css';
import sprite from '../../img/svg/sprite-icon.svg';

const Goods = () => {
  return (
    <div>
      <svg width="24" height="24" className={css.parcelFilledStyle}>
        <use href={`${sprite}#parcel-filled`} />
      </svg>
    </div>
  );
};

export default Goods;
