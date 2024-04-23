import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import './LastTop10.scss';
import gold from 'assets/gold.png';
import silver from 'assets/silver.png';
import bronze from 'assets/bronze.png';

gsap.registerPlugin(ScrollTrigger);

function LastTop10() {
    const slider = useRef(null);
    const wrapper = useRef(null);

    useGSAP(() => {
        function handleLoad() {
            console.log(slider.current.scrollWidth);
            gsap.to(slider.current, {
                x: -(slider.current.scrollWidth - window.innerWidth),
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
                    <div className="panel">
                        <div className="panel-rank">
                            <img alt="" src={gold} />
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/01.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <img alt="" src={silver} />
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/02.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <img alt="" src={bronze} />
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/03.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#4</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/04.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#5</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/05.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#6</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/06.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#7</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/07.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#8</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/08.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#9</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/09.webp" />
                    </div>
                    <div className="panel">
                        <div className="panel-rank">
                            <span>#10</span>
                        </div>
                        <img className="panel-cover" alt="" src="images/top10/10.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastTop10;
