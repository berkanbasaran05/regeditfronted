import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';

import slider_shape_1 from "@assets/img/hero/hero-3/shape-1.png";
import slider_shape_2 from "@assets/img/hero/hero-3/shape-2.png";
import slider_shape_3 from "@assets/img/hero/hero-3/shape-3.png";


const hero_slider = [
    {
        id: 1,
        bg_slider_img: "/assets/img/hero/hero-2/hero-bg.png",
        title: "Güvenilir IT &",
        title_color: "Teknoloji",
        title_2: "Çözümü",
        bottom_title: "pos cihazı",        
    },
    {
        id: 2,
        bg_slider_img: "/assets/img/hero/hero-2/2.png",
        title: "Modern IT &",
        title_color: "Teknoloji",
        title_2: "yazılımı",
        bottom_title: "para çekmesi",        
    },
    {
        id: 3,
        bg_slider_img: "/assets/img/hero/hero-2/3.png",
        title: "Güvenilir IT &",
        title_color: "Teknoloji",
        title_2: "profesyonel",
        bottom_title: "yazıcı",        
    },
]


 
const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    watchSlidesProgress: true,
    // Navigation arrows
    navigation: {
        nextEl: ".hero-button-next-1",
        prevEl: ".hero-button-prev-1",
    },
    breakpoints: {
        '1200': {
            
        },
        '992': {
            
        },
        '768': {
            
        },
        '576': {
            
        },
        '0': {
            
        },
    },
}
const HeroArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <section className="tp-hero-3-area p-relative fix">
                <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade, Autoplay ]} className="hero-active-3">
                    {hero_slider.map((item, i) => 
                        <SwiperSlide key={i} className="swiper-slide">
                            <div className="tp-hero-3-wrapper p-relative">
                                <div className="container">
                                <div className="tp-hero-3-shape">
                              
                                </div>
                                <div className="tp-hero-3">
                                    <div className="tp-hero-bg" style={{backgroundImage: `url(${item.bg_slider_img})`}}></div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="tp-hero-3-content p-relative">
                                            <div className="tp-hero-3-title-wrapper">
                                               
                                                <h3 className="tp-hero-3-title">{item.title}
                                                    <span className="title-color"> {item.title_color}</span>
                                                    
                                                   
                                                    <br />{item.title_2}</h3>
                                                <div className="tp-hero-3-btn">
                                                    <Link className="tp-btn-2" href="/about">Daha Fazla</Link>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="tp-hero-3-bottom p-relative d-none d-md-block">
                                            <h3 className="tp-hero-3-bottom-title">{item.bottom_title}</h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>  
                    )} 
                </Swiper>
                <div className="tp-hero-3-nav d-none d-xl-block">
                    <button type="button" className="hero-button-prev-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-left"></i>
                    <b></b>
                    </button>
                    <button type="button" className="hero-button-next-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-right"></i>
                    <b></b>
                    </button>
                </div>
            </section>
        </>
    );
};

export default HeroArea;