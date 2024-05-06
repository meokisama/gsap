import { Link } from 'react-router-dom';
import { ROUTES, TIMELINE } from 'constants';

const timelineItem = TIMELINE.map((item) => ({
    color: 'salmon',
    children: (
        <div className={`tlref timelineItem${item.position}`}>
            <div className="index">
                <img alt="" src={`src/assets/${item.index}.webp`} />
            </div>
            <div className="detail">
                <span className="date">{item.date}</span>
                <p className="des">{item.description}</p>
                {item.optional && (
                    <div>
                        <Link className="detailOptional" to={ROUTES.VOTE} target="_blank">
                            <p>Bình Chọn ngay cho tác phẩm yêu thích !!</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    ),
}));

export default timelineItem;
