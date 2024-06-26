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
        const imgElement = imgRef.current;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 800px)', () => {
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
                imgElement,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: imgElement,
                        end: 'top 50%',
                        scrub: true,
                    },
                },
            );
        });
    }, []);
    return (
        <div className="largeText">
            <img alt="" src={nonoa_chibi} ref={imgRef} />
            <div className="container">
                <h1 className="text">Vietnam</h1>
                <h1 className="text">light novel</h1>
                <h1 className="text">ranking</h1>
            </div>
        </div>
    );
}

export default LargeText;
