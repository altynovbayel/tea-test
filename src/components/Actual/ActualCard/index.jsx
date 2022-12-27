import React from 'react';
import c from './ActualCard.module.scss'
import {AiOutlineHeart} from "react-icons/ai";
import {HiOutlineShoppingBag} from "react-icons/hi";

function ActualCard({url, title, category, price}) {
  return (
    <div className={c.actual_card}>
      <div className={c.card_img}>
        <img src={url} alt="" />
      </div>
      <div className={c.card_info}>
        <h3>
          {title}
        </h3>
        <span className={c.category}>
          {category}
        </span>
        <p>
          {price} сом/кг
        </p>
        <span className={c.card_icons}>
          <button className={c.favorite_btn}>
            <AiOutlineHeart/>
          </button>
        </span>
      </div>
    </div>
  );
}

export default ActualCard;