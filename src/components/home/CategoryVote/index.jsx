import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import './CategoryVote.scss';
import SectionTitle from '../SectionTitle';
import makein from 'assets/makein.webp';

gsap.registerPlugin(ScrollTrigger);

function CategoryVote() {
    const categories = [
        'Light Novel được yêu thích nhất',
        'Light Novel tân binh của năm',
        'Light Novel được mong chờ nhất',
        'Light Novel gây thất vọng nhất',
        'Light Novel muốn có bản quyền nhất',
        'Nhà phát hành được yêu thích nhất',
    ];

    const mediaRef = useRef(null);

    useGSAP(() => {
        const textElements = gsap.utils.toArray('.categoryItem');
        const el = mediaRef.current;

        textElements.forEach((text) => {
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

        gsap.fromTo(
            el,
            {
                x: -500,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    end: 'top 30%',
                    scrub: true,
                },
            },
        );
    }, []);

    return (
        <div className=" wrapper categoryVote">
            <SectionTitle title="Hạng Mục" description="Những hạng mục bình chọn cho bảng xếp hạng năm nay!" />
            <div className="categoryContainer">
                <div className="categoryImg" ref={mediaRef}>
                    <img id="haruhi" alt="" src={makein} />
                </div>
                <div className="categoryText">
                    {categories.map((category, index) => (
                        <div className="categoryItem" key={index}>
                            <div className="categoryIndex">0{index + 1}</div>
                            <div className="categoryName">
                                <p>{category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryVote;
