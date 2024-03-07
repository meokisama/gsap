import { Timeline } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import CountUp from 'react-countup';

import './Overview.scss';
import SectionTitle from '../../../components/SectionTitle';
import timelineItem from './Timeline';

gsap.registerPlugin(ScrollTrigger);

function Overview() {
    useEffect(() => {
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
                        start: 'top 80%',
                        end: 'top 40%',
                        scrub: true,
                    },
                },
            );
        });
    }, []);

    return (
        <div className="wrapper overview">
            <SectionTitle title={'Tổng Quan'} description={'Tổng quan vài điểm nhấn của bảng xếp hạng.'} />
            <div className="statistic">
                <div className="statisticItem">
                    <p>
                        0<CountUp end={6} enableScrollSpy={true} scrollSpyDelay={0} />
                    </p>
                    <span className="staname">Năm tổ chức</span>
                </div>
                <div className="statisticItem">
                    <p>
                        0<CountUp end={7} enableScrollSpy={true} scrollSpyDelay={0} />
                    </p>
                    <span className="staname">Hạng mục bình chọn</span>
                </div>
                <div className="statisticItem">
                    <p>
                        <CountUp end={200} enableScrollSpy={true} scrollSpyDelay={0} />+
                    </p>
                    <span className="staname">Tác phẩm</span>
                </div>
                <div className="statisticItem">
                    <p>
                        <CountUp end={3000} enableScrollSpy={true} scrollSpyDelay={0} />+
                    </p>
                    <span className="staname">Lượt bình chọn mỗi kì</span>
                </div>
            </div>
            <div className="timeline">
                <Timeline mode="alternate" items={timelineItem} />
            </div>
        </div>
    );
}

export default Overview;
