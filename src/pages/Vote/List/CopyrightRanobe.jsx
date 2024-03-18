const lnList = [
    {
        seriesName: 'Nếu Gặp Lại Em Trên Ngọn Đồi Hoa Nở',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/6a23048f-9f97-4cbe-a4ef-3bbeb152395f.jpg',
    },
    {
        seriesName: 'Liệu Có Sai Lầm Khi Tìm Kiếm Cuộc Gặp Gỡ Định Mệnh Trong Dungeon',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/0bb1396d-296e-4911-adc0-aae4bad4449d.jpg',
    },
    {
        seriesName: 'Subaru Và Vì Tinh Tú Thứ 7',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-dc6b8a1a-1641-4eaf-b347-e71d2f3a98b3.jpg',
    },
    {
        seriesName: 'SPY ROOM - Lớp Học Điệp Viên',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c26aec98-fd3b-4ac8-95ab-a810843af8af.jpg',
    },
    {
        seriesName: 'Đao Ngữ',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-881d721d-bc99-49a8-9d1d-ce06aef58670.jpg',
    },
    {
        seriesName: 'Tinh Linh Huyễn Tưởng Ký',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b0bed045-62f7-45d1-b6b5-32c488ce174a.jpg',
    },
    {
        seriesName: 'Thế Giới Otomegame Thật Khắc Nghiệt Với Nhân Vật Quần Chúng',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-3a281f1c-4512-4646-a1b0-cbfbf46b28e1.jpg',
    },
];

const copyrightRanobe = lnList.map((ln, index) => {
    return { ...ln, id: index + 1 };
});

export { copyrightRanobe };
