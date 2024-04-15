const publisherFilter = [
    {
        text: 'IPM',
        value: 'IPM',
    },
    {
        text: 'Thái Hà Books',
        value: 'Thái Hà Books',
    },
    {
        text: 'Quảng Văn',
        value: 'Quảng Văn',
    },
    {
        text: 'Amak',
        value: 'Amak',
    },
    {
        text: 'Sky Light Novel',
        value: 'Sky Light Novel',
    },
    {
        text: 'Tsuki Light Novel',
        value: 'Tsuki Light Novel',
    },
    {
        text: 'Nhã Nam',
        value: 'Nhã Nam',
    },
    {
        text: 'Owlbooks',
        value: 'Owlbooks',
    },
    {
        text: 'Kim Đồng',
        value: 'Kim Đồng',
    },
    {
        text: 'NXB Trẻ',
        value: 'NXB Trẻ',
    },
    {
        text: 'TA Books',
        value: 'TA Books',
    },
    {
        text: 'Ai Novel',
        value: 'Ai Novel',
    },
    {
        text: 'Uranix',
        value: 'Uranix',
    },
    {
        text: 'Shine Novel',
        value: 'Shine Novel',
    },
    {
        text: 'Usagi Light Novel',
        value: 'Usagi Light Novel',
    },
    {
        text: 'Ichi Light Novel',
        value: 'Ichi Light Novel',
    },
    {
        text: 'Orion Books',
        value: 'Orion Books',
    },
];

// Data List for result table
const favoriteRanobeList = [
    {
        vote: 32,
        seriesName: 'Sứ Giả Bốn Mùa - Vũ Điệu Mùa Xuân',
        publisherName: 'Kim Đồng',
    },
    {
        vote: 26,
        seriesName: '86 Eighty Six',
        publisherName: 'IPM',
    },
    {
        vote: 47,
        seriesName: 'Hành Trình Của Elaina',
        publisherName: 'Amak',
    },
    {
        vote: 11,
        seriesName: 'Nhân Vật Hạ Cấp Tomozaki',
        publisherName: 'Kim Đồng',
    },
    {
        vote: 32,
        seriesName: 'Sứ Giả Bốn Mùa - Vũ Điệu Mùa Xuân',
        publisherName: 'Kim Đồng',
    },
    {
        vote: 26,
        seriesName: '86 Eighty Six',
        publisherName: 'IPM',
    },
    {
        vote: 46,
        seriesName: 'Hành Trình Của Elaina',
        publisherName: 'Amak',
    },
    {
        vote: 11,
        seriesName: 'Nhân Vật Hạ Cấp Tomozaki',
        publisherName: 'Kim Đồng',
    },
    {
        vote: 32,
        seriesName: 'Sứ Giả Bốn Mùa - Vũ Điệu Mùa Xuân',
        publisherName: 'Kim Đồng',
    },
    {
        vote: 26,
        seriesName: '86 Eighty Six',
        publisherName: 'IPM',
    },
    {
        vote: 45,
        seriesName: 'Hành Trình Của Elaina',
        publisherName: 'Amak',
    },
    {
        vote: 11,
        seriesName: 'Nhân Vật Hạ Cấp Tomozaki',
        publisherName: 'Kim Đồng',
    },
];

const rookieRanobeList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa - rookieRanobeList',
        publisherName: 'Kim Đồng',
    },
];

const anticipatedRanobeList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa - anticipatedRanobeList',
        publisherName: 'Kim Đồng',
    },
];

const disappointingRanobeList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa - disappointingRanobeList',
        publisherName: 'Kim Đồng',
    },
];

const copyrightRanobeList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa - copyrightRanobeList',
        publisherName: 'Kim Đồng',
    },
];

const favoritePublisherList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa - favoritePublisherList',
        publisherName: 'Kim Đồng',
    },
];

// Handle list for output
const handleList = (arr) => {
    arr.sort((a, b) => b.vote - a.vote);

    let rank = 1;
    let prevVote = arr[0].vote;
    arr.forEach((item, index) => {
        if (item.vote < prevVote) {
            rank++;
            prevVote = item.vote;
        }
        item.rank = rank;
    });

    const finalList = arr.map((ln, index) => {
        return { ...ln, key: `${index + 1}` };
    });

    return finalList;
};

// Export data
const favoriteRanobe = handleList(favoriteRanobeList);
const rookieRanobe = handleList(rookieRanobeList);
const anticipatedRanobe = handleList(anticipatedRanobeList);
const disappointingRanobe = handleList(disappointingRanobeList);
const copyrightRanobe = handleList(copyrightRanobeList);
const favoritePublisher = handleList(favoritePublisherList);

export {
    publisherFilter,
    rookieRanobe,
    anticipatedRanobe,
    disappointingRanobe,
    copyrightRanobe,
    favoritePublisher,
    favoriteRanobe,
};
