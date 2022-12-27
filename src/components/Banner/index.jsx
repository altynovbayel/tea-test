import React from 'react';
import c from './Banner.module.scss'
import {facts_list, sliderCard, sliderImg} from "../../utils/list";
import SliderCard from "./SliderCard";
import PaginationCard from './Pagination'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, EffectFade} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import CardSlider from "./CardSlider";

function Banner() {
  
  return (
    <div className={c.banner}>
      <div className={c.banner_slider}>
        <div className={c.slider_1}>
          <Swiper
            slidesPerView={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
          >
            {
              sliderImg.map((item, id) => {
                return (
                  <SwiperSlide key={id}>
                    <img className={c.images} src={item.url} alt="slider-img"/>
                    <div className={c.slider_content}>
                      <h1>{item.title}</h1>
                      <span>{item.text}</span>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <CardSlider/>
        {/*<div className={c.slider_card}>*/}
        {/*  <SwipeableViews*/}
        {/*    enableMouseEvents*/}
        {/*    index={id}*/}
        {/*    onChangeIndex={handleChangeID}*/}
        {/*  >*/}
        {/*    {*/}
        {/*      sliderCard.map(item => {*/}
        {/*        return (*/}
        {/*          <SliderCard key={item.id} {...item}/>*/}
        {/*        )*/}
        {/*      })*/}
        {/*    }*/}
        {/*  </SwipeableViews>*/}
        {/*  <PaginationCard id={id} setId={setId} count={sliderCard.length}/>*/}
        {/*</div>*/}
      </div>
      <div className={c.facts_text}>
        {
          facts_list.map(item => (
            <div className={c.fact_block} key={item.id}>
              <img src={item.img} alt="image"/>
              <p>
                {item.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Banner;