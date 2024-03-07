import tl01 from '../../../assets/tl01.png';
import tl02 from '../../../assets/tl02.png';
import tl03 from '../../../assets/tl03.png';
import tl04 from '../../../assets/tl04.png';
import tl05 from '../../../assets/tl05.png';

const detail = [
    {
        index: tl01,
        date: '22-22/22/2024',
        description: 'Đăng bài phỏng vấn, PR các fandom lên dần chuẩn bị cho sự kiện.',
        position: 'right',
    },
    {
        index: tl02,
        date: '22-22/22/2024',
        description: 'Công bố ra mắt banner Bảng Xếp Hạng Light Novel Việt Nam cuối 2023.',
        position: 'left',
    },
    {
        index: tl03,
        date: '22-22/22/2024',
        description:
            'Chính thức mở bình chọn BXH LNVN cuối năm 2023 với các hạng mục được giới thiệu ở phần tiếp theo.',
        position: 'right',
    },
    {
        index: tl04,
        date: '22-22/22/2024',
        description: 'Ban tổ chức tiến hành tổng hợp các lượt bình chọn và xử lý kết quả.',
        position: 'left',
    },
    {
        index: tl05,
        date: '22-22/22/2024',
        description: 'Đăng bài tổng kết bảng xếp hạng và ảnh mừng các tác phẩm đứng đầu.',
        position: 'right',
    },
];

const timelineItem = detail.map((item) => ({
    color: 'salmon',
    children: (
        <div className={`tlref timelineItem${item.position}`}>
            <div className="index">
                <img alt="" src={item.index} />
            </div>
            <div className="detail">
                <span className="date">{item.date}</span>
                <p className="des">{item.description}</p>
            </div>
        </div>
    ),
}));

export default timelineItem;
