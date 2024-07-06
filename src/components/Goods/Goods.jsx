import React from 'react';
import css from './css/goods.module.css';
import sprite from '../../img/svg/sprite-icon.svg';

const Goods = () => {
  return (
      <div className={css.divGoods}>
          
        <div className={css.divGoods__divParcelFilled}>
          <svg width="80" height="80" className={css.divGoods__divParcelFilled__style}>
            <use href={`${sprite}#parcel-filled`} />
          </svg>
        </div>
        <div>
              <h1 className={css.divGoods__headline}>Electronic products</h1>
              <div className={css.divGoods__text}>
                  <p className={css.divGoods__text__kind}>In Transit</p>
                  <div className={css.divGoods__text__other}>
                      <span className={css.divGoods__text__other__dot}>.</span>
                      <span className={css.divGoods__text__other__money}>₴ 200</span>
                  </div>
              </div>
        </div>
    </div>
  );
};

export default Goods;
