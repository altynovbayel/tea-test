import React from 'react';
import c from './ActualBanner.module.scss'
import {actual_card_1} from "../../../utils/list";
import ActualCard from "../ActualCard";

function ActualBanner({background, type, title, text}) {
  return (
    <div className={c.actual}>
      <div
        className={c.actual_banner}
        style={{
          backgroundImage: `url(${background})`
        }}>
        <p>
          {type}
        </p>
        <h2>
          {title}
        </h2>
        <p className={c.actual_text}>
          {text}
        </p>
      </div>
      <div className={c.cards}>
        {
          actual_card_1.map(item => (
            <div key={item.id} className={c.cards_item}>
              <ActualCard {...item}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ActualBanner;