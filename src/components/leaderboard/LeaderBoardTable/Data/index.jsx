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
];

const favoriteIllustratorList = [
    {
        vote: 17,
        seriesName: 'Sứ Giả Bốn Mùa',
        publisherName: 'Kim Đồng',
    },
];
const favoritePublisherList = [
    {
        vote: 1,
        publisherName: 'IPM',
        publisherLogo: 'ipm',
    },
    {
        vote: 2,
        publisherName: 'Hikari Light Novel (Thái Hà Books)',
        publisherLogo: 'hikari',
    },
    {
        vote: 3,
        publisherName: 'Quảng Văn',
        publisherLogo: 'quangvan',
    },
    {
        vote: 4,
        publisherName: 'Amak',
        publisherLogo: 'amak',
    },
    {
        vote: 5,
        publisherName: 'Sky Light Novel',
        publisherLogo: 'sky',
    },
    {
        vote: 6,
        publisherName: 'Tsuki Light Novel',
        publisherLogo: 'tsuki',
    },
    {
        vote: 7,
        publisherName: 'Nhã Nam',
        publisherLogo: 'nhanam',
    },
    {
        vote: 8,
        publisherName: 'Owlbooks',
        publisherLogo: 'owlbooks',
    },
    {
        vote: 9,
        publisherName: 'Wingsbooks (Kim Đồng)',
        publisherLogo: 'wingsbooks',
    },
    {
        vote: 10,
        publisherName: 'NXB Trẻ',
        publisherLogo: 'tre',
    },
    {
        vote: 11,
        publisherName: 'TA Books',
        publisherLogo: 'tabooks',
    },
    {
        vote: 12,
        publisherName: 'Ai Novel',
        publisherLogo: 'ainovel',
    },
    {
        vote: 13,
        publisherName: 'Uranix',
        publisherLogo: 'uranix',
    },
    {
        vote: 14,
        publisherName: 'Shine Novel',
        publisherLogo: 'shine',
    },
    {
        vote: 15,
        publisherName: 'Usagi Light Novel',
        publisherLogo: 'usagi',
    },
    {
        vote: 16,
        publisherName: 'Ichi Light Novel',
        publisherLogo: 'ichi',
    },
    {
        vote: 0,
        publisherName: 'Orion Books',
        publisherLogo: 'orion',
    },
];

//Generate random data for favoriteRanobeList with unique vote and lower than 1000

for (let i = 0; i < 100; i++) {
    let randomVote = Math.floor(Math.random() * 1000);
    while (favoriteRanobeList.some((item) => item.vote === randomVote)) {
        randomVote = Math.floor(Math.random() * 1000);
    }
    favoriteRanobeList.push({
        vote: randomVote,
        seriesName: `Sứ Giả Bốn Mùa - ${i}`,
        publisherName: publisherFilter[Math.floor(Math.random() * publisherFilter.length)].value,
    });
}

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
const favoriteIllustrator = handleList(favoriteIllustratorList);
const favoritePublisher = handleList(favoritePublisherList);

export { publisherFilter, favoriteIllustrator, favoritePublisher, favoriteRanobe };
