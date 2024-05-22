import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './LastTop10.scss';
import { TOP10 } from 'constants';
import gold from 'assets/gold.png';
import silver from 'assets/silver.png';
import bronze from 'assets/bronze.png';

gsap.registerPlugin(ScrollTrigger);

function LastTop10() {
    const slider = useRef(null);
    const wrapper = useRef(null);

    useGSAP(() => {
        function handleLoad() {
            const mm = gsap.matchMedia();
            mm.add('(min-width: 800px)', () => {
                gsap.to(slider.current, {
                    x: -(slider.current.scrollWidth - window.innerWidth * 0.9),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: wrapper.current,
                        pin: true,
                        scrub: 1,
                        start: 'top 18%',
                        end: '+=' + slider.current.scrollWidth,
                        // markers: true
                    },
                });
            });
        }

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    return (
        <div className="last-top10">
            <div className="top10-header">
                <h1>
                    <span>Bảng Xếp Hạng</span>
                </h1>
                <p>
                    Vinh danh 10 series được bình chọn nhiều nhất cho bảng xếp hạng đợt gần nhất,{' '}
                    <strong>nửa cuối năm 2023!</strong>
                </p>
            </div>
            <div ref={wrapper} className="top10-series">
                <div ref={slider} className="container">
                    {/* <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            800: {
                                slidesPerView: 4,
                            },
                            0: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {TOP10.map((panel, index) => (
                            <SwiperSlide key={index}>
                                <div className="panel">
                                    <div className="panel-rank">
                                        {panel.rank === gold || panel.rank === silver || panel.rank === bronze ? (
                                            <img alt="" src={panel.rank} />
                                        ) : (
                                            <span>{panel.rank}</span>
                                        )}
                                    </div>
                                    <img className="panel-cover" alt="" src={panel.src} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                    {TOP10.map((panel, index) => (
                        <div className="panel" key={index}>
                            <div className="panel-rank">
                                {panel.rank === gold || panel.rank === silver || panel.rank === bronze ? (
                                    <img alt="" src={panel.rank} />
                                ) : (
                                    <span>{panel.rank}</span>
                                )}
                            </div>
                            <img className="panel-cover" alt="" src={panel.src} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LastTop10;
