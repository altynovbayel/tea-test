import React from 'react';
import c from './StockCard.module.scss'


function StockCard({title, text}) {
  return (
    <div className={c.stock_card}>
      <div className={c.title}>
        <h2>
          {title}
        </h2>
      </div>
      <div className={c.text}>
        <p>
          {text}
        </p>
      </div>
      <div className={c.btn}>
        <button>
          подробнее
        </button>
      </div>
    </div>
  );
}

export default StockCard;