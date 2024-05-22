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
                    Và đứng sau <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> chính là đội ngũ ban tổ chức và
                    truyền thông, một đội ngũ đam mê và tận tâm dẫn đầu bởi{' '}
                    <strong style={{ color: 'rgb(85, 83, 83)' }}>Baka Hyddyt</strong>, là những người sẵn lòng bỏ thời
                    gian và công sức để tạo ra một sân chơi mới, công bằng và chất lượng nhất cho cộng đồng yêu thích
                    Light Novel.
                </p>
                <p>
                    <strong style={{ color: 'rgb(85, 83, 83)' }}>Hyddyt</strong> không chỉ là người tổ chức, mà còn là
                    một anti romcom chúa, chiến thần harem và shitposter chuyên nghiệp. Với mục tiêu giúp cho mọi người
                    có 1 cái nhìn đầy đủ và rõ ràng hơn về thị trường Light Novel Việt Nam.
                </p>
                <p>
                    Kể từ năm 2018, ban tổ chức đã bắt đầu hành trình đầy tham vọng đó khi muốn đưa một{' '}
                    <strong>Konorano/Oricon</strong> hay thứ gì đó tương tự tới với thị trường Việt. Trải qua nhiều
                    thăng trầm để tạo ra một không gian đầy màu sắc dành cho cộng đồng yêu thích Light Novel Việt Nam
                    nói riêng và những người ưa thích văn hoá Nhật Bản nói chung. Bằng tâm huyết và những nỗ lực không
                    ngừng nghỉ, chúng tôi cố gắng xây dựng một bảng xếp hạng công bằng nơi mà mọi tác phẩm, mọi đam mê,
                    mọi ý kiến góp ý và xây dựng của độc giả đều được lắng nghe và thấu hiểu.
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
    {
        name: 'Hyddytt',
        description: 'Organizer',
        url: 'https://www.facebook.com/hyddytngokngek',
    },
    {
        name: 'Zennomii',
        description: 'BE',
        url: 'https://www.facebook.com/Zennomi',
    },
    {
        name: 'Meokii',
        description: 'FE',
        url: 'https://www.facebook.com/TheMeoki',
    },
];

const CATEGORIES = [
    'Light Novel được yêu thích nhất',
    'Họa sĩ minh họa được yêu thích nhất',
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
        date: '05-14/06/2024',
        description: 'Đăng bài phỏng vấn, PR các fandom lên dần chuẩn bị cho sự kiện.',
        position: 'right',
        optional: false,
    },
    {
        index: tl02,
        date: '10/06/2024',
        description: 'Công bố ra mắt banner Bảng Xếp Hạng Light Novel Việt Nam nửa đầu 2024.',
        position: 'left',
        optional: false,
    },
    {
        index: tl03,
        date: '15-25/06/2024',
        description: 'Chính thức mở bình chọn BXH LNVN nửa đầu 2024 với các hạng mục được giới thiệu ở phần tiếp theo.',
        position: 'right',
        optional: true,
    },
    {
        index: tl04,
        date: '26-29/06/2024',
        description: 'Ban tổ chức tiến hành tổng hợp các lượt bình chọn và xử lý kết quả.',
        position: 'left',
        optional: false,
    },
    {
        index: tl05,
        date: '30/06/2024',
        description: 'Đăng bài tổng kết bảng xếp hạng và ảnh mừng các tác phẩm đứng đầu.',
        position: 'right',
        optional: false,
    },
];

const COLLAB_PAGES = [
    {
        name: 'Hako.re',
        username: 'hako.page',
        url: 'https://www.facebook.com/hako.page',
        avatar: 'images/media/hako.webp',
        box_shadow: 'rgb(19 32 60 / 10%) 0px 20px 25px -5px, rgb(19 32 60 / 20%) 0px 10px 10px -5px',
        name_color: '#878489',
    },
    {
        name: 'Zennomi',
        username: 'zennomi',
        url: 'https://facebook.com/Zennomi',
        avatar: 'images/media/zennomi.webp',
        box_shadow: 'rgba(250, 146, 134, 0.1) 0px 20px 25px -5px, rgba(250, 146, 134, 0.51) 0px 10px 10px -5px',
        name_color: '#e3253ac4',
    },
    {
        name: 'Sonako Light Novel',
        username: 'SonakoWiki',
        url: 'https://facebook.com/SonakoWiki',
        avatar: 'images/media/sonako.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Hội những người yêu thích Light Novel',
        username: '100064392503502',
        url: 'https://www.facebook.com/profile.php?id=100064392503502',
        avatar: 'images/media/valvrare.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Sword Art Online Vietnam',
        username: 'sword.art.online.vietnam',
        url: 'https://facebook.com/sword.art.online.vietnam',
        avatar: 'images/media/sao.webp',
        box_shadow: 'rgb(12 151 204 / 10%) 0px 20px 25px -5px, rgb(12 151 204 / 30%) 0px 10px 10px -5px',
        name_color: '#00448382',
    },
    {
        name: 'LIGHT NOVEL - MANGA VIỆT NAM 2.0',
        username: '2154767871225294',
        url: 'https://facebook.com/groups/2154767871225294',
        avatar: 'images/media/group2_0.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e VN Fanpage',
        username: 'YoujitsuVN',
        url: 'https://www.facebook.com/YoujitsuVN',
        avatar: 'images/media/youjitsu.webp',
        box_shadow: 'rgba(250, 146, 134, 0.1) 0px 20px 25px -5px, rgba(245 218 165) 0px 10px 10px -5px',
        name_color: '#f99b29b8',
    },
    {
        name: 'Tokidoki Bosotto Roshia-go de Dereru Tonari no Arya-san Vietnam Fanpage',
        username: 'RoshidereVN',
        url: 'https://facebook.com/RoshidereVN',
        avatar: 'images/media/roshidere.webp',
        box_shadow: 'rgb(12 151 204 / 10%) 0px 20px 25px -5px, rgb(147 211 154 / 62%) 0px 10px 10px -5px',
        name_color: '#79c79bd4',
    },
    {
        name: 'Otonari no Tenshi-sama Fanpage Việt Nam ',
        username: 'OtonariVNFP',
        url: 'https://www.facebook.com/OtonariVNFP',
        avatar: 'images/media/tenshi.webp',
        box_shadow: 'rgb(12 151 204 / 10%) 0px 20px 25px -5px, (251 200 176) 0px 10px 10px -5px',
        name_color: '#d5967cc2',
    },
    {
        name: 'Saijo No Osewa VN Fanpage',
        username: 'saijonoosewaVN',
        url: 'https://facebook.com/saijonoosewaVN',
        avatar: 'images/media/saijo.webp',
        box_shadow: 'rgb(62 184 179 / 10%) 0px 20px 25px -5px, (140 201 96 / 38%) 0px 10px 10px -5px',
        name_color: '#93b989d6',
    },
    {
        name: 'Netoge no Yome ga Ninki Idol datta Vietnam Fanpage',
        username: 'NetogeVN',
        url: 'https://facebook.com/NetogeVN',
        avatar: 'images/media/netoge.webp',
        box_shadow: 'rgb(12 151 204 / 10%) 0px 20px 25px -5px, (81 75 82 / 37%) 0px 10px 10px -5px',
        name_color: '#857170bd',
    },
    {
        name: 'Otome Game Sekai wa Mob ni Kibishii Sekai Desu Việt Nam',
        username: 'MobSekaVietNam',
        url: 'https://facebook.com/MobSekaVietNam',
        avatar: 'images/media/mobuseka.webp',
        box_shadow: 'rgb(73 127 43 / 10%) 0px 20px 25px -5px, rgba(245 218 165) 0px 10px 10px -5px',
        name_color: '#c9ab53d6',
    },
    {
        name: 'Jaku chara Tomozaki-kun VN',
        username: 'TomozakiVN',
        url: 'https://facebook.com/TomozakiVN',
        avatar: 'images/media/tomozaki.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (163 113 255 / 33%) 0px 10px 10px -5px',
        name_color: '#b09ccbc7',
    },
    {
        name: 'Bunny Girl Senpai Vietnam',
        username: 'BGSVietnam',
        url: 'https://facebook.com/BGSVietnam',
        avatar: 'images/media/aobuta.webp',
        box_shadow: 'rgb(206 104 141 / 10%) 0px 20px 25px -5px, (162 167 201 / 32%) 0px 10px 10px -5px',
        name_color: '#ad9fb3',
    },
    {
        name: 'Eighty Six Vietnam',
        username: '86VietNamFanpage',
        url: 'https://facebook.com/86VietNamFanpage',
        avatar: 'images/media/86.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Reryuu - Anime/2d Reviewer và Translator',
        username: 'reryuu52',
        url: 'https://facebook.com/reryuu52',
        avatar: 'images/media/reryuu.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Fanpage Kura Kyoudou Việt Nam',
        username: 'KuraKyoudou',
        url: 'https://facebook.com/KuraKyoudou',
        avatar: 'images/media/kurakyoudou.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Jimikawa Fanpage Việt Nam',
        username: 'JimikawaFanpageVN',
        url: 'https://facebook.com/JimikawaFanpageVN',
        avatar: 'images/media/jimikawa.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Otonari Asobi Fanpage Việt nam',
        username: 'OtonariAsobiVN',
        url: 'https://facebook.com/OtonariAsobiVN',
        avatar: 'images/media/otonariasobi.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
    },
    {
        name: 'Sứ Giả Bốn Mùa',
        username: '100094379739358',
        url: 'https://facebook.com/profile.php?id=100094379739358',
        avatar: 'images/media/shunkashuutou.webp',
        box_shadow: 'rgb(30 135 65 / 10%) 0px 20px 25px -5px, (43 60 72 / 23%) 0px 10px 10px -5px',
        name_color: '#afc58fe0',
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
