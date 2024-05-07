import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import './SectionTitle.scss';

gsap.registerPlugin(ScrollTrigger);

function SectionTitle({ title, description }) {
    const titleRef = useRef(null);

    useGSAP(() => {
        const el = titleRef.current;
        const mm = gsap.matchMedia();
        mm.add('(min-width: 800px)', () => {
            gsap.fromTo(
                el,
                {
                    y: -200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        end: 'top 50%',
                        scrub: true,
                    },
                },
            );
        });
    }, []);

    return (
        <div className="sectionTitle">
            <div className="sectionTitleContent" ref={titleRef}>
                <h1>
                    <span>{title}</span>
                </h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;
