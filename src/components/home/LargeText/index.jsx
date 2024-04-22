import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import './LargeText.scss';
import nonoa_chibi from 'assets/nonoa_chibi.webp';

gsap.registerPlugin(ScrollTrigger);

function LargeText() {
    const imgRef = useRef(null);

    useGSAP(() => {
        const textElements = gsap.utils.toArray('.text');
        const el = imgRef.current;

        textElements.forEach((text) => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    scrub: true,
                },
            });
        });

        gsap.fromTo(
            el,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    end: 'top 50%',
                    scrub: true,
                },
            },
        );
    }, []);

    return (
        <div className="largeText">
            <img alt="" src={nonoa_chibi} ref={imgRef} />
            <div className="container">
                <h1 className="text">
                    Vietnam<span>bảng xếp hạng</span>
                </h1>
                <h1 className="text">
                    light novel<span>light novel</span>
                </h1>
                <h1 className="text">
                    ranking<span>Việt Nam</span>
                </h1>
            </div>
        </div>
    );
}

export default LargeText;
