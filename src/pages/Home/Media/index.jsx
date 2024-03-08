import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

import './Media.scss';
import SectionTitle from '../../../components/SectionTitle';
import { mediaList } from './Media';

gsap.registerPlugin(ScrollTrigger);

function Media() {
    useEffect(() => {
        const textElements = gsap.utils.toArray('.mediaItem');
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

    return (
        <div className="wrapper media">
            <SectionTitle title="Truyền Thông" description="Các bên hỗ trợ truyền thông cho bảng xếp hạng!" />
            <div className="mediaContent">
                {mediaList.map((media, index) => (
                    <div key={index} className="mediaItem">
                        <div className="mediaAvatar">
                            <img onClick={() => window.open(media.url, '_blank')} alt="" src={media.avatar} />
                        </div>
                        <div className="mediaInfo">
                            <span>@{media.username}</span>
                            <span className="fullName">{media.name}</span>
                            <p>{media.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Media;
