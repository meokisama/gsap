import gold from 'assets/gold.png';
import silver from 'assets/silver.png';
import bronze from 'assets/bronze.png';
import tl01 from 'assets/tl01.webp';
import tl02 from 'assets/tl02.webp';
import tl03 from 'assets/tl03.webp';
import tl04 from 'assets/tl04.webp';
import tl05 from 'assets/tl05.webp';

const ROUTES = {
    HOME: '/',
    VOTE: '/vote',
    LEADERBOARD: '/leaderboard',
};

const INTRODUCTION_INFO = [
    {
        title: 'Về Bảng Xếp Hạng',
        content: (
            <div>
                <p>
                    Trong cộng đồng độc giả Light Novel, có một <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> tỏa
                    sáng như một điểm đến tinh thần, nơi những tâm hồn đam mê văn học Nhật Bản hội tụ, cùng chia sẻ đam
                    mê và khám phá những tác phẩm đình đám nhất. Hành trình này không chỉ là một cuộc bình chọn, mà còn
                    là một cuộc phiêu lưu, một hành trình khám phá văn hóa và tinh thần, đan xen giữa sức sáng tạo của
                    tác giả và niềm đam mê của độc giả.
                </p>
                <p>
                    Mỗi năm, khi <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> khởi động, một cuộc bình chọn hoành
                    tráng mở ra, mời gọi toàn bộ cộng đồng dấn thân vào cuộc hành trình tìm ra những tác phẩm vượt trội
                    nhất, những câu chuyện cảm xúc nhất, những nhân vật hấp dẫn nhất.
                </p>
                <p>
                    Hơn hết, <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> không chỉ là một sân chơi giành cho các
                    tác phẩm, mà còn góp phần xây dựng cộng đồng, tạo ra một không gian văn hóa nơi mà mọi người có thể
                    cùng nhau giao lưu, trao đổi, lan tỏa niềm đam mê và tận hưởng sự phong phú của văn học Light Novel.
                </p>
            </div>
        ),
    },
    {
        title: 'Về Ban Tổ Chức',
        content: (
            <div>
                <p>
                    Và ở tận cốt lõi của <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> chính là đội ngũ ban tổ
                    chức và truyền thông, một đội ngũ đam mê và tận tâm dẫn đầu bởi{' '}
                    <strong style={{ color: 'rgb(85, 83, 83)' }}>Baka Hyddyt</strong>, là những người sẵn lòng hy sinh
                    thời gian và công sức để tạo ra một sân chơi công bằng và chất lượng nhất cho cộng đồng yêu thích
                    Light Novel.
                </p>
                <p>
                    Họ không chỉ là những người tổ chức, mà còn là những người đại diện cho cộng đồng độc giả, là những
                    người truyền cảm hứng và gieo mầm ước mơ, dẫn dắt nhưng tâm hồn mới rong ruổi trong những thế giới
                    văn học hấp dẫn.
                </p>
                <p>
                    Kể từ năm 2018, ban tổ chức của <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> đã bắt đầu hành
                    trình đầy tham vọng đó. Trải qua nhiều thăng trầm, vượt qua mọi thách thức để tạo ra một không gian
                    đầy màu sắc cho cộng đồng yêu thích Light Novel. Bằng tâm huyết và nỗ lực không ngừng, họ đang xây
                    dựng một cộng đồng mạnh mẽ và đầy sức sống, nơi mà mỗi tác phẩm và mỗi đam mê đều được tôn vinh và
                    lan tỏa.
                </p>
            </div>
        ),
    },
];

const AUTHORS = [
    {
        name: 'Hyddyt',
        description: 'Organizer',
        url: 'https://www.facebook.com/hyddytngokngek',
    },
    {
        name: 'Zennomi',
        description: 'BE',
        url: 'https://www.facebook.com/Zennomi',
    },
    {
        name: 'Meoki',
        description: 'FE',
        url: 'https://www.facebook.com/TheMeoki',
    },
];

const CATEGORIES = [
    'Light Novel được yêu thích nhất',
    'Light Novel tân binh của năm',
    'Light Novel được mong chờ nhất',
    'Light Novel gây thất vọng nhất',
    'Light Novel muốn có bản quyền nhất',
    'Nhà phát hành được yêu thích nhất',
];

const TOP10 = [
    { rank: gold, src: 'images/top10/01.webp' },
    { rank: silver, src: 'images/top10/02.webp' },
    { rank: bronze, src: 'images/top10/03.webp' },
    { rank: '#4', src: 'images/top10/04.webp' },
    { rank: '#5', src: 'images/top10/05.webp' },
    { rank: '#6', src: 'images/top10/06.webp' },
    { rank: '#7', src: 'images/top10/07.webp' },
    { rank: '#8', src: 'images/top10/08.webp' },
    { rank: '#9', src: 'images/top10/09.webp' },
    { rank: '#10', src: 'images/top10/10.webp' },
];

const TIMELINE = [
    {
        index: tl01,
        date: '22-22/22/2024',
        description: 'Đăng bài phỏng vấn, PR các fandom lên dần chuẩn bị cho sự kiện.',
        position: 'right',
        optional: false,
    },
    {
        index: tl02,
        date: '22-22/22/2024',
        description: 'Công bố ra mắt banner Bảng Xếp Hạng Light Novel Việt Nam cuối 2023.',
        position: 'left',
        optional: false,
    },
    {
        index: tl03,
        date: '22-22/22/2024',
        description:
            'Chính thức mở bình chọn BXH LNVN cuối năm 2023 với các hạng mục được giới thiệu ở phần tiếp theo.',
        position: 'right',
        optional: true,
    },
    {
        index: tl04,
        date: '22-22/22/2024',
        description: 'Ban tổ chức tiến hành tổng hợp các lượt bình chọn và xử lý kết quả.',
        position: 'left',
        optional: false,
    },
    {
        index: tl05,
        date: '22-22/22/2024',
        description: 'Đăng bài tổng kết bảng xếp hạng và ảnh mừng các tác phẩm đứng đầu.',
        position: 'right',
        optional: false,
    },
];

const COLLAB_PAGES = [
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
    {
        name: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        url: 'https://facebook.com',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
        description: 'Premium PR Pack has been activated!',
    },
];

const COMMENTS = [
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
    {
        content: 'Tôi không phải là lolicon, chỉ là cô gái tôi thích tình cờ lại là loli.',
        author: 'Light Novel Việt Nam Fanpage',
        username: 'username',
        avatar: 'https://yt3.ggpht.com/yti/AGOGRCpP0MYQ6pqgZiPwxTzSgKGnUdsCZagtWQss9eJwNQ=s108-c-k-c0x00ffffff-no-rj',
    },
];

export { ROUTES, INTRODUCTION_INFO, AUTHORS, CATEGORIES, COMMENTS, TOP10, COLLAB_PAGES, TIMELINE };
