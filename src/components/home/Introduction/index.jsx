import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Introduction.scss';

gsap.registerPlugin(ScrollTrigger);

function Introduction() {
    const aboutRanking =
        'giới thiệu bxh người tổ chức người tổ chức người tổ chức giới thiệu bxh người tổ chức người tổ chức người tổ chức';
    const aboutOrganizer =
        'người tổ chức người tổ chức người tổ chức người tổ chức giới thiệu bxh người tổ chức người tổ chức người tổ chức';

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useGSAP(() => {
        const e1 = ref1.current;
        const e2 = ref2.current;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 800px)', () => {
            gsap.fromTo(
                e1,
                {
                    x: -500,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: e1,
                        end: 'top 30%',
                        scrub: true,
                    },
                },
            );

            gsap.fromTo(
                e2,
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: e2,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                    },
                },
            );

            const rightElements = gsap.utils.toArray('.rightElement');
            rightElements.forEach((e2) => {
                gsap.fromTo(
                    e2,
                    {
                        x: 500,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: e2,
                            end: 'top 30%',
                            scrub: true,
                        },
                    },
                );
            });
        });
    }, []);

    return (
        <div className="introduction">
            <div className="inner">
                <div className="innerContent">
                    <div className="holder">
                        <div className="introicon" ref={ref2}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-x"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-twitter"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-instagram"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-gmail"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
                                <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
                                <path d="M16 4l-4 4l-4 -4" />
                                <path d="M4 6.5l8 7.5l8 -7.5" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-facebook"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </div>
                        <div className="noicon">
                            <div className="ỉntroleft" ref={ref1}>
                                <img alt="" src="images/introimg.webp" />
                            </div>
                            <div className="ỉntroright">
                                <div className="rightElement aboutRanking">
                                    <h3>Giới thiệu bxh</h3>
                                    <p>{aboutRanking}</p>
                                </div>
                                <div className="rightElement aboutOrganizer">
                                    <h3>Người tổ chức</h3>
                                    <p>{aboutOrganizer}</p>
                                </div>
                            </div>
                        </div>
                        <div className="dotwrapper">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
