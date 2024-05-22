import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Media.scss';
import SectionTitle from '../SectionTitle';
import { COLLAB_PAGES } from 'constants';

gsap.registerPlugin(ScrollTrigger);

function Media() {
    useGSAP(() => {
        function handleLoad() {
            const elementsLeft = gsap.utils.toArray('.mediaItemLeft');
            const mm = gsap.matchMedia();
            mm.add('(min-width: 800px)', () => {
                elementsLeft.forEach((text) => {
                    gsap.fromTo(
                        text,
                        {
                            x: -500,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: text,
                                end: 'top 50%',
                                scrub: true,
                            },
                        },
                    );
                });

                const elementsRight = gsap.utils.toArray('.mediaItemRight');
                elementsRight.forEach((text) => {
                    gsap.fromTo(
                        text,
                        {
                            x: 500,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: text,
                                end: 'top 50%',
                                scrub: true,
                            },
                        },
                    );
                });
            });
        }
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    return (
        <div className="wrapper media">
            <SectionTitle title="Truyền Thông" description="Các bên hỗ trợ truyền thông cho bảng xếp hạng!" />
            <div className="mediaContent">
                {COLLAB_PAGES.map((media, index) => (
                    <div key={index} className={`mediaItem ${index % 2 == 0 ? 'mediaItemLeft' : 'mediaItemRight'}`}>
                        <div className="mediaAvatar">
                            <img onClick={() => window.open(media.url, '_blank')} alt="" src={media.avatar} />
                        </div>
                        <div
                            className="mediaInfo"
                            // style={{
                            //     boxShadow: `${media.box_shadow}`,
                            // }}
                        >
                            <span className="username">@{media.username}</span>
                            <span
                                className="fullName"
                                // style={{ color: `${media.name_color}` }}
                            >
                                {media.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Media;
