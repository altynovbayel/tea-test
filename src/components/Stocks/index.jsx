import React from 'react';
import c from './Stocks.module.scss'
import {stockCards} from "../../utils/list";
import StockCard from "./StockCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Stocks() {
  
  return (
    <div
      className={c.stock}
      style={{backgroundImage: `url()`}}
    >
      <div className={c.stock_title}>
        <h1>Скидки и Акции</h1>
      </div>
      <div className={c.stock_cards}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1024: {
              width: 1024,
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            
            375: {
              width: 375,
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            320: {
              width: 320,
              slidesPerView: 1,
              slidesPerGroup: 1,
            }
          }}
        >
          {
            stockCards.map(item => (
              <SwiperSlide key={item.id}>
                <StockCard  {...item}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Stocks;