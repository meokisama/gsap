import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Overview.scss';
import { ROUTES } from 'constants';
import timelineItem from './Timeline';
import SectionTitle from '../SectionTitle';
import chibi00 from 'assets/chibi00.webp';
import chibi01 from 'assets/chibi01.webp';
import sakura1 from 'assets/sakura1.svg';

gsap.registerPlugin(ScrollTrigger);

function Overview() {
    const [isWideScreen, setIsWideScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 600);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const stat1 = useRef(null);
    const stat2 = useRef(null);
    const stat3 = useRef(null);
    const stat4 = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.statistic',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true,
            },
        });
        const el1 = stat1.current;
        const el2 = stat2.current;
        const el3 = stat3.current;
        const el4 = stat4.current;
        tl.fromTo(el1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }, 0)
            .fromTo(el2, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }, 0.5)
            .fromTo(el3, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }, 1)
            .fromTo(el4, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }, 1.5);
    }, []);

    useGSAP(() => {
        const textElements = gsap.utils.toArray('.tlref');
        textElements.forEach((text) => {
            gsap.fromTo(
                text,
                {
                    y: -200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 70%',
                        end: 'top 40%',
                        scrub: true,
                    },
                },
            );
        });
    }, []);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    useGSAP(() => {
        const el1 = ref1.current;
        const el2 = ref2.current;
        const el3 = ref3.current;
        const el4 = ref4.current;
        gsap.fromTo(
            el1,
            {
                x: 200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: el1,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: true,
                },
            },
        );
        gsap.fromTo(
            el2,
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: el2,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: true,
                },
            },
        );
        gsap.fromTo(
            el3,
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: el3,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: true,
                },
            },
        );
        gsap.fromTo(
            el4,
            {
                x: 200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: el4,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: true,
                },
            },
        );
    }, []);

    const targetDate = '2024-07-08T12:00:00';
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="wrapper overview">
            <SectionTitle title={'Tổng Quan'} description={'Tổng quan vài điểm nhấn của bảng xếp hạng.'} />
            <div className="statistic">
                <div ref={stat1} className="statisticItem">
                    <p>
                        0<CountUp end={6} enableScrollSpy={true} scrollSpyDelay={0} />
                    </p>
                    <span className="staname">Năm tổ chức</span>
                </div>
                <div ref={stat2} className="statisticItem">
                    <p>
                        0<CountUp end={6} enableScrollSpy={true} scrollSpyDelay={0} />
                    </p>
                    <span className="staname">Hạng mục bình chọn</span>
                </div>
                <div ref={stat3} className="statisticItem">
                    <p>
                        <CountUp end={200} enableScrollSpy={true} scrollSpyDelay={0} />+
                    </p>
                    <span className="staname">Tác phẩm</span>
                </div>
                <div ref={stat4} className="statisticItem">
                    <p>
                        <CountUp end={3000} enableScrollSpy={true} scrollSpyDelay={0} />+
                    </p>
                    <span className="staname">Lượt bình chọn mỗi kì</span>
                </div>
            </div>
            <div className="timeline">
                {isWideScreen ? <Timeline mode="alternate" items={timelineItem} /> : <Timeline items={timelineItem} />}
            </div>
            <div className="countdown">
                <div className="cdwrapper" ref={ref1}>
                    <p>Thời gian bình chọn còn lại?</p>
                    <div className="timeLeft">
                        <div>
                            <h2>{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days}</h2>
                            <span>ngày</span>
                        </div>
                        <div>
                            <h2>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</h2>
                            <span>giờ</span>
                        </div>
                        <div>
                            <h2>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</h2>
                            <span>phút</span>
                        </div>
                        <div>
                            <h2>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</h2>
                            <span>giây</span>
                        </div>
                    </div>
                </div>
                <div className="voteWrapper" ref={ref2}>
                    <Link className="voteBtn" to={ROUTES.VOTE} target="_blank">
                        <span>Bình Chọn</span>
                        <img alt="" src={sakura1} />
                    </Link>
                </div>
                <img id="chibi00" alt="" src={chibi00} ref={ref3} />
                <img id="chibi01" alt="" src={chibi01} ref={ref4} />
            </div>
        </div>
    );
}

export default Overview;
