const ROUTES = {
    HOME: '/',
    VOTE: '/vote',
    LEADERBOARD: '/leaderboard',
};

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
    { rank: 'gold', src: 'images/top10/01.webp' },
    { rank: 'silver', src: 'images/top10/02.webp' },
    { rank: 'bronze', src: 'images/top10/03.webp' },
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
        index: 'tl01',
        date: '22-22/22/2024',
        description: 'Đăng bài phỏng vấn, PR các fandom lên dần chuẩn bị cho sự kiện.',
        position: 'right',
        optional: false,
    },
    {
        index: 'tl02',
        date: '22-22/22/2024',
        description: 'Công bố ra mắt banner Bảng Xếp Hạng Light Novel Việt Nam cuối 2023.',
        position: 'left',
        optional: false,
    },
    {
        index: 'tl03',
        date: '22-22/22/2024',
        description:
            'Chính thức mở bình chọn BXH LNVN cuối năm 2023 với các hạng mục được giới thiệu ở phần tiếp theo.',
        position: 'right',
        optional: true,
    },
    {
        index: 'tl04',
        date: '22-22/22/2024',
        description: 'Ban tổ chức tiến hành tổng hợp các lượt bình chọn và xử lý kết quả.',
        position: 'left',
        optional: false,
    },
    {
        index: 'tl05',
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

export { ROUTES, AUTHORS, CATEGORIES, COMMENTS, TOP10, COLLAB_PAGES, TIMELINE };
