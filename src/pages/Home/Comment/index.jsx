import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

import './Comment.scss';
import { commentsList } from './Comment';
import SectionTitle from '../../../components/SectionTitle';
import img from '../../../assets/makein2.png';

gsap.registerPlugin(ScrollTrigger);

function Comment() {
    const commentRef = useRef(null);
    const commentimgRef = useRef(null);

    useEffect(() => {
        const el = commentRef.current;
        const elimg = commentimgRef.current;

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

        gsap.fromTo(
            elimg,
            {
                x: 500,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: elimg,
                    end: 'top 30%',
                    scrub: true,
                },
            },
        );
    }, []);

    return (
        <div className="comment">
            <SectionTitle
                title={'Bình Luận'}
                description={'Phần bình luận từ các bên được phỏng vấn. Kéo lên xuống để xem nội dung kế tiếp!'}
            />
            <div className="commentContent">
                <Swiper
                    direction={'vertical'}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    ref={commentRef}
                >
                    {commentsList.map((comment, index) => (
                        <SwiperSlide key={index}>
                            <div className="slideContent">
                                <div className="avatar">
                                    <img alt="" src={comment.avatar} />
                                    <p>@{comment.username}</p>
                                </div>
                                <p className="content">{comment.content}</p>
                                <span>
                                    ━ <span className="author">{comment.author}</span> ━
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="commentImg" ref={commentimgRef}>
                    <img alt="" src={img} />
                </div>
            </div>
        </div>
    );
}

export default Comment;
