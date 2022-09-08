import React from "react";
import './Slider.scss'

import banner from '../../assets/images/swiper-bg.png';
import brend from '../../assets/images/swiper-brend.png';

// Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([ Navigation ]);

function Slider() {
    return (
        <Swiper
            className="slider"
            modules={[ Navigation ]}
            navigation={{
                nextEl: '.next-button'
            }}
            slidesPerView={1}
            loop
            spaceBetween={400}
        >
            <div className="next-button">
                <svg width="10" height="15" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <SwiperSlide className="slider__slide">
                <img src={brend} alt="brend" className="slider-brend" />
                <div className="slider__text">
                    <h1 className="slider-title">Stan Smith, <br /><span>Forever!</span></h1>
                    <button className="slider-button">Купить</button>
                </div>
                <img src={banner} alt="banner" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;