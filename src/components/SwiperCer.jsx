import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperCer.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import m1 from "../images/1.png";
import m2 from "../images/2.png";
import m3 from "../images/3.png";
import m4 from "../images/4.png";
import m5 from "../images/5.png";
import m6 from "../images/fdpractico.png";
import m7 from "../images/jsbasico.png";
import m8 from "../images/fvcertificado.png";

export default function SwiperCer() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={m1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={m8} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
