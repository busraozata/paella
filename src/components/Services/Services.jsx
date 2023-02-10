/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./Services.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import dummyServices from '../../API/dummyServices';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from "react";

export default function Services(props) {
    const delegate = props.delegate || "[data-fancybox]";

    useEffect(() => {
        const opts = props.options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, [delegate, props.options]);
    const title = dummyServices.map((x, y) => {
        return (
            x.title.replace('ve', '<span>ve</span>')
        )
    })
    console.log(title);
    return (
        <section className='services'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Extra <strong>Hizmetler</strong></h2>
                    </div>
                </div>
                <div className="serviceList">
                    {

                        dummyServices.map((serviceItem, index) => {
                            /* let [first, last, ...child] = serviceItem.title.split(" "); */
                            let text = serviceItem.title.split(" ");
                            console.log(text);
                            return (

                                <div className="serviceItem d-flex align-items-center flex-column justify-content-center " key={index}>
                                    <div className="box w-100">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                {
                                                    serviceItem.video ? (
                                                        <div className="video-img position-relative d-flex justify-content-center align-items-center" data-fancybox="gallery"
                                                            data-src={serviceItem.video}>
                                                            <a className="play-btn" href='/#' role="button"></a>
                                                            <img src={serviceItem.image} className="img-fluid" alt={serviceItem.title} />

                                                        </div>
                                                    ) : <div className="img-wrapper ">
                                                        <img src={serviceItem.image} className="img-fluid" alt={serviceItem.title} />
                                                    </div>
                                                }
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="serviceContent d-flex flex-column justify-content-center align-items-center">
                                                    <h4 className='d-flex justify-content-center align-items-center'><span className='number'>{index + 1}</span>
                                                        <div className='w-100 d-flex flex-column justify-content-center title-content'>
                                                            <div className='full-area'>
                                                                {
                                                                    text.map((t, index) => {
                                                                        let title = t.replace('ve', '<span style="font-size:2rem">ve</span>')
                                                                        return (
                                                                            <div className='area'>
                                                                                {/* <span className='title-area' key={index}> {t.replace('ve', '<span >ve</span>')}</span> */}
                                                                                <span className='title-area' key={index} dangerouslySetInnerHTML={{ __html: title }}></span>
                                                                            </div>

                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            {
                                                                serviceItem.smallTitle ? (
                                                                    <span className='sub-title'>{serviceItem.smallTitle}</span>
                                                                ) : null
                                                            }

                                                        </div>
                                                    </h4>

                                                    {
                                                        serviceItem.text ? (
                                                            <p className='text'>
                                                                {serviceItem.text}
                                                            </p>
                                                        ) : null
                                                    }

                                                    <p >
                                                        {serviceItem.text2}
                                                    </p>
                                                    {
                                                        serviceItem.subStances ? (
                                                            <div className="list mt-0">
                                                                <ul>
                                                                    {
                                                                        serviceItem.subStances?.map((item, index) => {
                                                                            return (
                                                                                <li key={index}>{item.item}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        ) : null
                                                    }

                                                </div>
                                            </div>
                                            {
                                                serviceItem.sliderImg ? (
                                                    <div className="swiper-area">
                                                        <div className="swiper-container">
                                                            <Swiper
                                                                spaceBetween={30}
                                                                navigation={true}
                                                                modules={[Navigation, Autoplay]}
                                                                breakpoints={{
                                                                    640: {
                                                                        slidesPerView: 1,
                                                                        spaceBetween: 20,
                                                                    },
                                                                    768: {
                                                                        slidesPerView: 2,
                                                                        spaceBetween: 40,
                                                                    },
                                                                    1024: {
                                                                        slidesPerView: 3,
                                                                        spaceBetween: 50,
                                                                    },
                                                                }}
                                                                autoplay={{
                                                                    delay: 2500,
                                                                    disableOnInteraction: false,
                                                                }}
                                                                className="mySwiper"
                                                            >
                                                                {
                                                                    serviceItem.sliderImg.map((item, index) => {
                                                                        return (
                                                                            <SwiperSlide key={index} data-fancybox="gallery"
                                                                                data-src={item.image}>
                                                                                <div className="img-wrapper position-relative">
                                                                                    <img src={item.image} className='img-fluid' alt="img" />
                                                                                </div>
                                                                            </SwiperSlide>
                                                                        )
                                                                    })
                                                                }

                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                serviceItem.sliderVideo ? (
                                                    <div className="swiper-area">
                                                        <div className="swiper-container">
                                                            <Swiper

                                                                spaceBetween={30}
                                                                navigation={true}
                                                                modules={[Navigation, Autoplay]}
                                                                autoplay={{
                                                                    delay: 2500,
                                                                    disableOnInteraction: false,
                                                                }}
                                                                breakpoints={{
                                                                    640: {
                                                                        slidesPerView: 1,
                                                                        spaceBetween: 20,
                                                                    },
                                                                    768: {
                                                                        slidesPerView: 2,
                                                                        spaceBetween: 40,
                                                                    },
                                                                    1024: {
                                                                        slidesPerView: 3,
                                                                        spaceBetween: 50,
                                                                    },
                                                                }}
                                                                className="mySwiper2"
                                                            >
                                                                {
                                                                    serviceItem.sliderVideo?.map((item, index) => {

                                                                        return (
                                                                            <SwiperSlide key={index} data-fancybox="gallery"
                                                                                data-src={item.video}>
                                                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                                                    <a className="play-btn" href='/#' role="button"></a>
                                                                                    <img src={item.image} className='img-fluid' alt="" />

                                                                                </div>

                                                                            </SwiperSlide>
                                                                        )
                                                                    })
                                                                }
                                                            </Swiper>
                                                        </div>
                                                    </div>

                                                ) : null

                                            }

                                            {
                                                serviceItem.info ? (
                                                    <div className="col-lg-12">
                                                        <p className='info'>
                                                            {serviceItem.info}
                                                        </p>
                                                    </div>
                                                ) : null
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}
