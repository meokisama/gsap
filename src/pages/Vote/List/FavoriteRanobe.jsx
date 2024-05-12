const lnList = [
    {
        seriesName: 'Nữ Chính Sinh Tồn Mạnh Mẽ Trong Thế Giới Otome Game',
        publisherName: 'Ichi Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/d38d150a-02f5-4e34-ae3f-0333173b3a31.jpg',
    },
    {
        seriesName: 'Bỗng Một Ngày Tôi Có Vị Hôn Thê Là Gal',
        publisherName: 'Shine Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/99afec02-448f-4b62-b38f-04a32a131e44.jpg',
    },
    {
        seriesName: 'Grimgar - Ảo Ảnh Và Tro Tàn',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/1760e91c-4ff6-40b9-9d45-9abe4f30e666.jpg',
    },
    {
        seriesName: 'Cuộc Nổi Dậy Của Cô Nàng Mọt Sách',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/cdb412c7-5325-4975-a19c-d1d7a52d92d7.jpg',
    },
    {
        seriesName: 'Cô Nàng Shimotsuki Trót Phải Lòng Nhân Vật Nền',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/c3767b39-a0e4-49aa-a8ef-be2e114eff13.jpg',
    },
    {
        seriesName: 'Ai Dám Bảo Rom-com Không Có Ngoài Đời Thực?',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/fcda86e1-40b4-4061-bbf0-12a7dd880d39.jpg',
    },
    {
        seriesName: 'Spy Room - Lớp Học Điệp Viên',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/19a61092-0c96-49c3-9cc1-d384a057c39b.jpg',
    },
    {
        seriesName: 'Ma Pháp Thiếu Nữ',
        publisherName: 'Usagi Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/34c01f6b-7f8f-4316-85a6-bab693117d6f.jpg',
    },
    {
        seriesName: 'Thế Giới Otome Game Thật Khắc Nghiệt Với Nhân Vật Quần Chúng',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/382d7a63-5b5b-4d77-a579-05dce103c35d.jpg',
    },
    {
        seriesName: 'Arya Bàn Bên Thỉnh Thoảng Lại Trêu Ghẹo Tôi Bằng Tiếng Nga',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/c1a9536d-d16b-487d-a29e-e74b521db055.jpg',
    },
    {
        seriesName: 'Sứ Giả Bốn Mùa',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/db58571a-54fb-421a-bed7-8ea4ff79e7e5.jpg',
    },
    {
        seriesName: '86 Eighty Six',
        publisherName: 'IPM',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/10f01789-fbd5-476a-8a5f-00da1410e2b4.jpg',
    },
    {
        seriesName: 'Hành Trình Của Elaina',
        publisherName: 'Amak',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/185560ca-d4be-4889-9756-9b8198707957.jpg',
    },
    {
        seriesName: 'Nhân Vật Hạ Cấp Tomozaki',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/d295990b-fc8f-42c5-ba5e-274f2bc0730a.jpg',
    },
    {
        seriesName: 'Chàng Trai Chuyển Kiếp Và Cô Gái Thiên Tài',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/eec5f26d-eaed-4d73-8b65-b037ff0ce61e.jpg',
    },
    {
        seriesName: 'Thánh Hiệp Sĩ Nơi Tận Cùng Thế Giới',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/35e0c1f6-8816-42cf-a011-ac5ddc3e7e86.jpg',
    },
    {
        seriesName: 'Phá Đảo Dị Giới Cùng Nữ Thần Không Tín Đồ',
        publisherName: 'Orion Books',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/2b79495f-14d1-471b-9ce5-ec86a4c32512.jpg',
    },
    {
        seriesName: 'Bởi Vì Tôi Sẽ Gọi Tên Em',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/c7fef5e4-5cc9-4e6c-8ae0-c87eb2c2d63d.jpg',
    },
    {
        seriesName: 'Chào Mừng Đến Lớp Học Đề Cao Thực Lực',
        publisherName: 'IPM',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/4aec81c5-3e28-4dd5-a1f7-6f1fc423a5be.jpg',
    },
    {
        seriesName: 'Unnamed Memory - Hồi Ức Không Tên',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/7adf856f-21aa-474a-b194-5304890623d5.jpg',
    },
    {
        seriesName: 'Dược Sư Tự Sự',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/ef9d19d5-ad0f-45e0-9eb7-50aea6990ef8.jpg',
    },
    {
        seriesName: 'Tặng Hoa Cho Quái Vật Trong Rừng',
        publisherName: 'IPM',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/303fce14-a85b-4c98-9ece-53c3d7f1b2be.jpg',
    },
    {
        seriesName: 'Thiên Sứ Nhà Bên',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/d6e07123-d292-47be-a8bc-2e241d4876bb.jpg',
    },
    {
        seriesName: 'Nếu Gặp Lại Em Trên Ngọn Đồi Hoa Nở',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/6a23048f-9f97-4cbe-a4ef-3bbeb152395f.jpg',
    },
    {
        seriesName: 'Khi Muốn Khóc Tôi Đeo Mặt Nạ Mèo',
        publisherName: 'IPM',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/81b1412c-273a-4046-b277-bf68e29ab56b.jpg',
    },
    {
        seriesName: 'Nguyệt Đạo Dị Giới',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/0b00339f-837c-4282-bac3-a9bd5c328282.jpg',
    },
    {
        seriesName: 'Xa Một Chút Hơn Một Triệu Năm Ánh Sáng',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/d1147c95-6721-462a-ad85-4e3c672907e6.jpg',
    },
    {
        seriesName: 'Liệu Có Sai Lầm Khi Tìm Kiếm Cuộc Gặp Gỡ Định Mệnh Trong Dungeon',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/0bb1396d-296e-4911-adc0-aae4bad4449d.jpg',
    },
    {
        seriesName: 'Này Cậu Có Muốn Hẹn Hò Với Tớ Không?',
        publisherName: 'Ichi Light Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/82428ea5-3285-4c9d-b870-8aad8f5e9f18.jpg',
    },
    {
        seriesName: 'Nàng Cựu Idol Lớp Tôi Lại Có Hành Động Đáng Ngờ Nữa Rồi',
        publisherName: 'Shine Novel',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/228de1ce-5bd2-4bd0-bd42-6297178cea97.jpg',
    },
    {
        seriesName: 'Ghost Hunt',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i2.docln.net/ln/licensed/covers/93b07dac-f8e8-451f-a6e6-88284f9c196b.jpg',
    },
    {
        seriesName: 'Bầu Trời Xanh Của Em',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f4216545-2ae0-45a2-84a1-0b65e0e5e609.jpg',
    },
    {
        seriesName: 'Cô Nàng Otaku Nhà Tôi',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-afddf033-e217-48df-8997-79dd46dda421.jpg',
    },
    {
        seriesName: 'Thám Tử Đã Chết',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-226edb18-b150-480b-aa9b-5754aa7fcfbd.jpg',
    },
    {
        seriesName: 'Bảo Mẫu Bí Mật Của Tiểu Thư',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a3b8511d-e997-40b7-8852-6f384d08e113.jpg',
    },
    {
        seriesName: 'Chúa Tể Bóng Tối',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8d6df625-c394-4344-b347-e8a1da785bf4.jpg',
    },
    {
        seriesName: 'Arifureta - Từ Tầm Thường Đến Bất Khả Chiến Bại',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1899cf80-c27e-43cd-bdfe-35ade28a75c0.jpg',
    },
    {
        seriesName: 'Chén Thánh Của Eris',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-dcba5ad0-0b50-4527-9196-585c00300dc7.jpg',
    },
    {
        seriesName: 'Chitose Trong Chai Ramune',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-647d6848-eaa8-413a-98ad-b72abf91c714.jpg',
    },
    {
        seriesName: 'Khóa Chặt Cửa Nào Suzume',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0fa6d015-07da-4832-a9eb-59da83fd9e1b.jpg',
    },
    {
        seriesName: 'Tôi Yêu Nữ Phản Diện',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-bf3c5b77-126a-402f-9a6f-b21ba35d50d6.jpg',
    },
    {
        seriesName: 'Hiệp Sĩ Xương Trên Đường Du Hành Đến Thế Giới Khác',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f8e4863c-22fc-43f5-b2f3-e9d8464fbe16.jpg',
    },
    {
        seriesName: 'Thất Kiếm Ma Thuật Thống Trị Thế Giới',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a27c9c86-0e13-4950-bd1b-965b0798901c.jpg',
    },
    {
        seriesName: 'Ma Vương Tôi Đây Nên Yêu Cô Dâu Elf Của Mình Như Thế Nào?',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-fba89f79-0ca9-46f1-8714-ae88d6b66914.jpg',
    },
    {
        seriesName: 'ISHURA - Tu la dị giới',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0c80a51e-389c-4fb6-8fcc-89c56b0bad64.jpg',
    },
    {
        seriesName: 'Lời Nói Đùa',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-fe2de981-ab83-4f97-a2c5-7bd3f14ce1ad.jpg',
    },
    {
        seriesName: 'OVERLORD',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-333362c5-9840-45d9-8bc1-707699b8646c.jpg',
    },
    {
        seriesName: 'Diệt Slime Suốt 300 Năm, Tôi Level Max Lúc Nào Chẳng Hay',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-25174ec4-ac3d-467c-8fb6-f3d4f5568620.jpg',
    },
    {
        seriesName: 'Cách Sống Của Thiếu Nữ Hành Quyết - Và Rồi, Cô Ấy Được Tái Sinh',
        publisherName: 'Ichi Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-543dcf8c-f20b-4a32-adaa-ded181e3d0a2.jpg',
    },
    {
        seriesName: 'Đường hầm tới mùa hạ - Lối thoát của Biệt ly',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-0404485a-a981-42c2-b53d-62956b6b0d67.jpg',
    },
    {
        seriesName: 'Hôn Nhân Hạnh Phúc Của Tôi',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0549dc6f-4e42-4611-aa12-597a38c33129.jpg',
    },
    {
        seriesName: 'Sword Art Online',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0396c145-e413-41c2-9186-72a18a22d108.jpg',
    },
    {
        seriesName: 'Cop Craft - Cảnh Sát Đến Từ Hai Thế Giới',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f144db84-9055-4cd1-a784-a8381bec667f.jpg',
    },
    {
        seriesName: 'Hello World',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-7e568828-2c4a-4a6d-8201-c99ecb515d95.jpg',
    },
    {
        seriesName: 'Vợ Trong Game Của Tôi Là Idol Nổi Tiếng Ngoài Đời',
        publisherName: 'Shine Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-db27f40b-5008-4850-95eb-139c0dc623d5.jpg',
    },
    {
        seriesName: 'Đã Bảo Là Cho Tôi Năng Lực Trung Bình Thôi Mà!',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8f00cf2d-55d4-46ec-ba6b-f0d4b34b78b9.jpg',
    },
    {
        seriesName: 'Hướng Dẫn Thư Viện Dành Cho Người Ghét Đọc',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-f884bf12-a14a-4536-84c4-d0de96c309b4.jpg',
    },
    {
        seriesName: 'Tớ Sẽ Mãi Mãi Không Quên Cậu, Người Từng Sống Trong Khoảnh Khắc',
        publisherName: 'Shine Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-7c351755-b221-4400-8991-2477b9f76363.jpg',
    },
    {
        seriesName: 'Làm Bạn Thân Có Khó Không?',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-5cf674ba-fb51-4b68-9336-f773bff9d44a.jpg',
    },
    {
        seriesName: 'Infinite Dendrogram',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c8f26e44-4cae-4a7c-9c8d-0e9470b5eee5.jpg',
    },
    {
        seriesName: 'Khi Ấy Là Một Đêm Đầy Sao',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d1b120b2-a519-494c-9b9e-39a074932092.jpg',
    },
    {
        seriesName: 'Re:Zero - Bắt Đầu Lại Ở Thế Giới Khác',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1c46e6c8-f2ab-4eee-a1f3-95b16aa7a40e.jpg',
    },
    {
        seriesName: 'Chuyện Tình Hài Lãng Mạn Không Thể Chê Vào Đâu',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8aba05ba-a140-4715-babb-658d15afff71.jpg',
    },
    {
        seriesName: 'Your Story',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-0fb7495e-15bf-4114-aa64-25db51eeb63d.jpg',
    },
    {
        seriesName: 'Hiệp Sĩ Lưu Ban',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-6c314e9c-434d-46cc-9d3a-552e069eb91a.jpg',
    },
    {
        seriesName: 'Anh Hùng Diệt Thần & Bảy Thệ Ước',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b6a14820-16b4-4d27-baa4-5ff4679b00ce.jpg',
    },
    {
        seriesName: 'Phương Pháp "Đào Tạo" Nữ Chính Nhạt Nhòa',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-7a3f2c3e-035d-4bcb-8ffa-6a6acb30dad5.jpg',
    },
    {
        seriesName: 'Tập Tỏ Tình',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-5e1e30c3-c57c-4b4c-a7d5-0ee28cfb7a69.jpg',
    },
    {
        seriesName: 'Dã Ngoại Nơi Mặt Sau Của Thế Giới',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-cc09224e-5371-4996-9de1-27ffd2e7b823.jpg',
    },
    {
        seriesName: 'Văn Hào Lưu Lạc',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e311626c-556c-4362-b773-36b2dcd11be5.jpg',
    },
    {
        seriesName: 'Công Việc Của Long Vương',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b3555458-a7d2-455e-97cb-ae61d9be1486.jpg',
    },
    {
        seriesName: 'Phép Thuật Chỉ Chạm Tới Bán Kính Của Anh Và Em',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-b4fb267c-c3a8-4cbd-a811-666964559ce7.jpg',
    },
    {
        seriesName: 'Nàng Thợ May Tinh Linh',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-7cf283b9-8b63-4719-8a8a-f4fb6e41999d.jpg',
    },
    {
        seriesName: 'Gamers!',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d13815fd-629d-46e2-8cb7-16ede95f8de0.jpg',
    },
    {
        seriesName: 'Truyền Kỳ Về Tình Yêu Của Quỷ',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-612cceba-228e-4ffb-b44b-4d062dbbfdd7.jpg',
    },
    {
        seriesName: 'Về Chuyện Tôi Chuyển Sinh Thành Slime',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-34acd725-d985-4392-b71b-84bdfae1958a.jpg',
    },
    {
        seriesName: 'Số Phận Của Vị Hôn Thê',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-cf44502b-5e4f-49f9-9675-7754d960e4ee.jpg',
    },
    {
        seriesName: 'Chủ Tiệm Bánh Chiến Binh Và Cô Phục Vụ Người Máy',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9a44608b-3f61-473a-9d14-650c6deeeff7.jpg',
    },
    {
        seriesName: 'Subaru Và Vì Tinh Tú Thứ 7',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-dc6b8a1a-1641-4eaf-b347-e71d2f3a98b3.jpg',
    },
    {
        seriesName: 'Date A Live',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-4a0f21ee-eb08-4b0c-b3e0-42c72615d077.jpg',
    },
    {
        seriesName: 'Chuyện Tình Thanh Xuân Bi Hài Của Tôi Quả Nhiên Là Sai Lầm',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-dd710953-5206-42d3-a4ec-f1cbbd30c899.jpg',
    },
    {
        seriesName: 'Okitegami Kyoko',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-bfd072dd-0335-4e66-bfda-09db0ad4b678.jpg',
    },
    {
        seriesName: 'Con Gái Tôi Đã Đến Thủ Đô Và Trở Thành Mạo Hiểm Giả Hạng S',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0dc6a437-113a-4646-ba05-c8b4f919a33c.jpg',
    },
    {
        seriesName: 'Mùa Hè Thứ Hai, Mất Em Mãi Mãi',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9c1f2dad-537a-4728-8b0a-01be823ccf49.jpg',
    },
    {
        seriesName: 'Holmes Ở Kyoto',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-88b5a2ca-756f-4d63-9040-2254ff269059.jpg',
    },
    {
        seriesName: 'Tôi Là Nhện Đấy, Có Sao Không?',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-5f81ccbe-2793-4a3f-8a34-102ee41b4f8e.jpg',
    },
    {
        seriesName: 'Gia Sư Của Công Chúa Quỷ',
        publisherName: 'Usagi Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-82129e82-460b-45f6-9c3f-a444aec3a66f.jpg',
    },
    {
        seriesName: 'Yokohama Station SF',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-35afa31d-73b7-4ad7-a9aa-2c36b26ced77.jpg',
    },
    {
        seriesName: 'Lãnh Chúa Vùng Đất Không Cư Dân',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b10c0090-f8c8-4bb7-b16d-c9393bab70ea.jpg',
    },
    {
        seriesName: 'Hành Trình Trở Thành Nhà Thám Hiểm Của Chàng Lính Đánh Thuê Bần Hàn',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-20ba12f8-7d81-48a7-936b-cd5889846ec0.jpg',
    },
    {
        seriesName: 'Tanya Chiến Ký',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a6675c22-3300-4857-861c-443c54332037.jpg',
    },
    {
        seriesName: 'Hội Chứng Tuổi Thanh Xuân',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-491d425f-dca0-4eb1-92f4-8d725d8f6d94.jpg',
    },
    {
        seriesName: 'Bakemonogatari',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d2fe8598-01cc-43f8-b790-2478429ed3b9.jpg',
    },
    {
        seriesName: 'Đao Ngữ',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-881d721d-bc99-49a8-9d1d-ce06aef58670.jpg',
    },
    {
        seriesName: 'Kẻ Dị Biệt Tại Trường Học Phép Thuật',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2f64aee2-bbc3-4571-8818-eb022fe45d6d.jpg',
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
    {
        seriesName: 'Liệu Có Sai Lầm Khi Tìm Kiếm Cuộc Gặp Gỡ Định Mệnh Trong Dungeon?',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8ca90488-292e-4b3d-9976-f7314652e8ee.jpg',
    },
    {
        seriesName: 'Ma Vương Đi Làm!',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-bc34d671-f0c2-423b-aad3-70b082ef718c.jpg',
    },
    {
        seriesName: 'Vì Con Gái Tôi Có Thể Đánh Bại Cả Ma Vương',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-20aaed00-6a10-430c-808a-c4c85f3b98d1.jpg',
    },
    {
        seriesName: 'Holmes ở Kyoto',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-33dd10fe-c360-4768-b609-7c10f573a72a.jpg',
    },
    {
        seriesName: 'Công Chúa Ma Cà Rồng Quyền Năng Chỉ Muốn Có Một Cô Em Gái Mà Thôi',
        publisherName: 'Usagi Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-af98dd6f-e82f-41e4-a784-18e66cb79ec0.jpg',
    },
    {
        seriesName: 'Tiệm Sách Cũ Biblia',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-58f6ba9d-5e74-4873-8f1d-e4ce529ad923.jpg',
    },
    {
        seriesName: 'Thuần Thú Sư Ở Dị Giới',
        publisherName: 'Usagi Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8fb6930b-214d-47d4-a50c-a86bf45892c2.jpg',
    },
    {
        seriesName: 'Tháng 8 Cùng Em Và Những Ký Ức Vụn Vỡ',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u3855-6227c01f-24fc-4a6b-be6b-e1c213adb8f3.jpg',
    },
    {
        seriesName: 'Công Cuộc Tái Thiết Vương Quốc Của Anh Hùng Chủ Nghĩa Hiện Thực',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c7755da3-fe75-432f-9c4d-bcbcc8e5d28e.jpg',
    },
    {
        seriesName: 'Bị Đuổi Khỏi Nhóm Anh Hùng, Tôi Muốn Sống Tự Do Tự Tại Ở Vương Đô',
        publisherName: 'Ichi Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c0bb8c0e-c2ff-401c-8cea-ab981628ac32.jpg',
    },
    {
        seriesName: 'Hoàng Tử Thiên Tài - Hành Trình Gây Dựng Lại Đất Nước Đang Lâm Nguy',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b6dd7726-025e-45f5-86c4-3a5f0c975fdd.jpg',
    },
    {
        seriesName: 'Em Là Người Sống, Tôi Là Người Chết, Thế Giới Đôi Lúc Lại Đảo Ngược',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-11b3ff0e-aac0-4c2d-9013-9ed4c5ef7dec.jpg',
    },
    {
        seriesName: 'Đau Ơi Bay Đi!',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-59a2b2e7-b241-4dee-a5f1-785afbaa943f.jpg',
    },
    {
        seriesName: 'Sakurako Và Bộ Xương Dưới Gốc Anh Đào',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-91fef45d-bfb5-4fcb-b03b-b0aedb357ce0.jpg',
    },
    {
        seriesName: 'World Teacher',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e17a1409-31eb-4f94-9cee-a8a2e8482933.jpg',
    },
    {
        seriesName: 'Gosick',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0890d839-892b-4c2f-86ea-0a67841fdf56.jpg',
    },
    {
        seriesName: 'Mê Cung Thư Viện',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-180094fa-98b0-4c81-87d6-34022681e405.jpg',
    },
    {
        seriesName: 'Chiếc Hộp Rỗng Và Maria Lần 0',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-bf928040-da88-469e-8088-84054ca1aa7d.jpg',
    },
    {
        seriesName: 'Tận Thế Nếu Không Bận, Anh Cứu Chúng Em Nhé?',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-21f8f20a-fa91-427b-baf9-b49b4f9f3b46.jpg',
    },
    {
        seriesName: 'Sói Và Gia Vị',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-6a2714f0-05c3-4954-8396-53f3bd2d82cf.jpg',
    },
    {
        seriesName: 'Lũ Ngốc, Bài Thi Và Linh Thú Triệu Hồi',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-19c5e228-c28a-43e7-852e-ddf3bf4087b9.jpg',
    },
    {
        seriesName: 'Ma Vương Kiến Tạo - Hầm Ngục Kiên Cố Nhất Chính Là Thành Phố Hiện Đại',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a5248f03-ab69-4600-a2d9-3824d9fbbdd9.jpg',
    },
    {
        seriesName: 'Aura - Trận Chiến Cuối Cùng Của Maryuin Koga',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e0d691dc-9475-4784-a9da-939936c0ed2a.jpg',
    },
    {
        seriesName: 'Biên Niên Sử Đế Chế Alexis',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a3262133-8da8-41ec-ae14-41e3dad11be4.jpg',
    },
    {
        seriesName: 'Khi Hikaru Còn Trên Thế Gian Này',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2bfc80bc-0468-4a88-896b-57327d615b00.jpg',
    },
    {
        seriesName: 'Chuyển Sinh Làm Người Sói, Tôi Trở Thành Cánh Tay Phải Của Ma Vương',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9939cae6-05a9-4c83-8019-acbbee7e0cfd.jpg',
    },
    {
        seriesName: 'Durarara!!',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-96de4480-a97f-4905-8c4b-cf05a0634988.jpg',
    },
    {
        seriesName: 'Bạn Gái Vs. Bạn Thời Thơ Ấu',
        publisherName: 'Uranix',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f38fc32e-d672-4a5c-940b-d3d39e22e9ce.jpg',
    },
    {
        seriesName: 'Gate: Lực Lượng Phòng Vệ Chiến Đấu Ở Tân Thế Giới',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9574e27a-8fbf-4bd7-9c69-036cc5a8971f.jpg',
    },
    {
        seriesName: 'Những Lời Chúng Tôi Nói Ở Bệnh Viện Bên Bờ Biển',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9b794ab1-dd7e-4619-9dda-1f3a42bbbccb.jpg',
    },
    {
        seriesName: 'Em Là Ánh Sáng Giữa Đêm Trăng',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-6b83ee96-318f-4f7c-9795-43c1709955ac.jpg',
    },
    {
        seriesName: 'Hướng Dẫn Sử Dụng Thiên Sứ Vụng Về',
        publisherName: 'Shine Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a747aa3a-52be-4391-9641-e9fa303bea13.jpg',
    },
    {
        seriesName: 'Anohana - Đóa Hoa Ngày Ấy',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2204e403-02b1-4f63-8d97-98c9325eff6a.jpg',
    },
    {
        seriesName: 'Ẩn tàng thư Dantalian',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e71b5727-78a4-46ae-a8ad-4e27a987e8cf.jpg',
    },
    {
        seriesName: 'Pháo Hoa, Ngắm Từ Dưới Hay Bên Cạnh',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0446f339-3a6f-4e9f-b6b0-665cd66c8322.jpg',
    },
    {
        seriesName: 'Tạm Biệt Pháo Hoa',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-98e29df4-03ff-4708-9b23-2ac5848c0004.jpg',
    },
    {
        seriesName: 'Đứa Con Của Thời Tiết',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-72e22143-e24f-4072-bd45-ef14092d4a9b.jpg',
    },
    {
        seriesName: 'Tôi Thích Một Cô Gái Nhưng Chẳng Dám Ngỏ Lời',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-87d0a6c8-116c-47d6-92ad-1d04bae8f572.jpg',
    },
    {
        seriesName: 'Đến Thế Giới Mới Với Smartphone',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-174cc321-8a9d-478d-8ccb-fc402c50fce8.jpg',
    },
    {
        seriesName: 'Dear',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-06bd97d0-f6c1-44d5-869a-f7cc87a9ae0f.jpg',
    },
    {
        seriesName: 'Thế Giới Đầy「Khoảng Trống」',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1f40a655-d26e-4d66-a6ee-b925178b28a3.jpg',
    },
    {
        seriesName: 'Just Because!',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c1ca6f6a-aa97-4eef-adb0-6a76e7148b60.jpg',
    },
    {
        seriesName: 'Dù Được Ban Đôi Cánh',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b0f48d0b-b83d-4f4b-80a6-ca3a7167915a.jpg',
    },
    {
        seriesName: 'Phù Thủy Thế Hệ Satori',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-bea81517-b5d7-4d16-9691-49958ee53ae9.jpg',
    },
    {
        seriesName: 'Từ Tân Thế Giới - Quyển Trung',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-ad1fd9e3-3b67-4730-9164-5c3a950de654.jpg',
    },
    {
        seriesName: 'Những Ngày Mai Đến Không Có Cậu Kề Bên',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-db69dd0b-dc69-464d-8d73-79a12e67fdb3.jpg',
    },
    {
        seriesName: 'Nhắn Gửi Tất Cả Các Em, Những Người Tôi Đã Yêu',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-63d6ca01-0b21-4448-a7da-d8fee6a77fa3.jpg',
    },
    {
        seriesName: 'Nhắn Gửi Một Tôi, Người Đã Yêu Em',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-60dfccb5-81c5-4d2c-881e-7fb575262c2d.jpg',
    },
    {
        seriesName: 'Re:Monster - Hồi Sinh Thành Quái Vật',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-385f7a89-5224-4049-89ef-341c908ac04d.jpg',
    },
    {
        seriesName: 'Cuộc Chiến Siêu Nhiên Giữa Đời Thường',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1a0239a9-48ed-4f7e-8882-bfa80562fc12.jpg',
    },
    {
        seriesName: 'Amaryllis Ở Xứ Sở Băng Giá',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f5618d07-f703-4f6b-8e2e-d4e4eb2bcc63.jpg',
    },
    {
        seriesName: 'Bác Sĩ Cuối Cùng Dưới Tán Hoa Anh Đào',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d8d18f29-6d99-4f22-bcd3-ef07ba494ed4.jpg',
    },
    {
        seriesName: 'Thiếu Nữ & Chiến Xa',
        publisherName: 'Owlbooks',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-37f8ed42-de89-4783-956d-9cf630f03ed0.jpg',
    },
    {
        seriesName: 'Khoảng Cách Giữa Hai Người',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2594f3f1-f38f-4f7f-8cce-3a094ab39d31.jpg',
    },
    {
        seriesName: 'Vào Đêm Trăng Xanh, Tôi Lại Yêu Em Thêm Lần Nữa',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2b374222-3c5a-442b-97f9-61a7e7119011.jpg',
    },
    {
        seriesName: 'ECHO - Tiếng vọng',
        publisherName: 'Uranix',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-4fb44740-5b23-4486-80b1-a74c97d29ebd.jpg',
    },
    {
        seriesName: 'Death Note',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-3178949a-88c5-49d4-af7f-c5272c17e92a.jpg',
    },
    {
        seriesName: '5 Centimet Trên Giây',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a90df73c-f0de-479b-956b-fa949bed9901.jpg',
    },
    {
        seriesName: 'Fate/Zero',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-03020132-23f2-43e5-8cb4-37b9953b904c.jpg',
    },
    {
        seriesName: 'Và Rồi, Tháng 9 Không Có Cậu Đã Tới',
        publisherName: 'Ai Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8fcbb06d-5909-4bf3-8c86-f8395ee95a7e.jpg',
    },
    {
        seriesName: 'Narcissu',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-3c1e738b-5cd9-4396-8b29-932fe21f9643.jpg',
    },
    {
        seriesName: 'NO.6',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2e6f6a66-2d85-4937-9de5-3a9152571918.jpg',
    },
    {
        seriesName: 'Ngày Mai, Tôi Biến Mất, Cậu Sẽ Hồi Sinh',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a18ee140-abff-4990-b42f-1940850c1f29.jpg',
    },
    {
        seriesName: 'Cấm Thư Ma Thuật Index',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c7bba5ae-33bc-47fe-8dbc-3b56400257ca.jpg',
    },
    {
        seriesName: 'Câu Chuyện Về Cô Bé Yêu Bánh Hạnh Nhân Đã Sống Một Nghìn Năm',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-73aaca13-a653-4298-87f9-7e24af5e4d86.jpg',
    },
    {
        seriesName: 'Gia Tộc Thần Bí - Sự trở về của Nidaime',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-50bf2763-b4aa-4d94-8b8f-14c0492d5561.jpg',
    },
    {
        seriesName: 'Những Đứa Trẻ Đuổi Theo Tinh Tú',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-70171c12-e9c9-4332-9096-90fb260464ed.jpg',
    },
    {
        seriesName: 'Pháp Sư Tokyo',
        publisherName: 'TA Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-a1180241-76f6-421e-9913-65e4682256c9.jpg',
    },
    {
        seriesName: 'Rừng Taiga',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-68b15fba-1fe2-4620-a401-345785a68a8c.jpg',
    },
    {
        seriesName: 'Iris Những Ngày Mưa',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-91695acb-a7f1-4211-a7cb-368c40a5beae.jpg',
    },
    {
        seriesName: 'Búp Bê Đi Đường Vòng',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d33b7c59-00df-4138-8368-588e8810daed.jpg',
    },
    {
        seriesName: 'Dạo Bước Phố Đêm',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e4eb9523-46ec-452a-b2d3-bb18922ac277.jpg',
    },
    {
        seriesName: 'Ký Ức Bầu Trời',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-660ccfdc-077d-49d0-8800-3e2157301a63.jpg',
    },
    {
        seriesName: 'The Dungeon Seeker',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9fa68ac6-86d7-4e28-87c7-5d3935043409.jpg',
    },
    {
        seriesName: 'Bên Kia Mây Trời, Là Nơi Hẹn Ước',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e37a7644-9854-4b11-881a-79a0a93571b5.jpg',
    },
    {
        seriesName: 'Trình tự Kudryavka',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-d35d1245-27b5-465b-84a4-0acfbbdc0787.jpg',
    },
    {
        seriesName: 'Riku và Chise - Chàng Trai Phân Chia Thế Giới Và Cô Gái Trong Biệt Thự -',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-3d8f3eff-3072-427d-ac60-1369a06e0fe6.jpg',
    },
    {
        seriesName: 'Hẹn Ước Mùa Hè',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-01d35ac1-2ca0-46c1-af93-64e38fd2fbe0.jpg',
    },
    {
        seriesName: 'Quái Vật Trong Đêm',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e0daee70-44fa-4257-a002-4863276a8b45.jpg',
    },
    {
        seriesName: 'Phù Thủy Trắng Định Tội',
        publisherName: 'TA Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0a87f4aa-aef6-4b5b-861c-2bd8b15548c3.jpg',
    },
    {
        seriesName: 'Khúc Nguyền Ca Của Thánh Kiếm Sĩ',
        publisherName: 'Uranix',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-401b2d92-37b5-42c5-a006-19dcb7f702cb.jpg',
    },
    {
        seriesName: 'Kino Du Ký',
        publisherName: 'Trẻ',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b91b252e-b2b6-4eab-8960-26f1aac11dd0.jpg',
    },
    {
        seriesName: 'Tình Đầu Lúc Lâm Chung Với Thiếu Nữ Thần Chết',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-79498bdd-8e79-459a-bbd3-54128ebdd49e.jpg',
    },
    {
        seriesName: 'Gia Tộc Thần Bí',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-ac080057-2eac-4486-b76d-f1012aff1465.jpg',
    },
    {
        seriesName: 'Từ Tân Thế Giới - Quyển Thượng',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8c5fd181-d043-4ba4-9354-30183e9c9652.jpg',
    },
    {
        seriesName: 'Amagi Công Viên Rực Rỡ',
        publisherName: 'Owlbooks',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-fa57bffb-6e09-421f-9861-0535605c7314.jpg',
    },
    {
        seriesName: 'Khách Sạn Yêu Quái Ở Izumo',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8dc96c3f-4dc6-4fad-ae2b-9292069c13e2.png',
    },
    {
        seriesName: 'Kỵ Sĩ Rồng Bất Bại',
        publisherName: 'Uranix',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-3b83bae8-19b8-4f82-85bf-b3042ec9063c.jpg',
    },
    {
        seriesName: 'Thần Chết Làm Thêm 300 Yên/Giờ',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-7a07b764-7233-44bd-a8b5-507e9564b51d.jpg',
    },
    {
        seriesName: 'Ba Ngày Hạnh Phúc',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-be25b804-55cd-44be-9597-a0d8c20ce1a3.jpg',
    },
    {
        seriesName: 'Chàng thẩm định viên và Nữ tác giả tập sự',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u1-05ae3d8a-0e6f-423e-85a1-e86efaebd43f.jpeg',
    },
    {
        seriesName: 'Torinoko City - Thành phố bị bỏ rơi',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-0d758a19-984b-4fd3-9f92-0eabc1f5a990.jpg',
    },
    {
        seriesName: 'Cô Gái Văn Chương',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1ff1ab49-9d3f-46ae-8617-6e6e5dce6ba9.jpg',
    },
    {
        seriesName: 'Lũ Ngốc, Bài Thi và Linh Thú Triệu Hồi',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-035ae307-35cc-4171-a07e-64ea4b054ef3.jpg',
    },
    {
        seriesName: 'Xa Lộ Chim Cánh Cụt',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-ae1a77c6-f211-48f0-9f24-491ff3fa77c2.jpg',
    },
    {
        seriesName: 'Hãy Đi Đi, Xanh Biếc',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-2d336fe2-7aab-4983-b4bd-52fde9b77f6e.jpg',
    },
    {
        seriesName: 'The Tatami Galaxy - Truyền Kỳ Phòng Bốn Chiếu Rưỡi',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-fea3a30d-e35f-4164-b192-7d5835b91d63.jpg',
    },
    {
        seriesName: 'Thọ Mệnh Thế Giới Và Bảy Ngày Đầu Tiên',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-cc77322e-9d48-40d5-be4e-3219b948cba6.jpg',
    },
    {
        seriesName: 'Diệt Slime Suốt 300 Năm Tôi Level Max Lúc Nào Chẳng Hay',
        publisherName: 'Tsuki Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f2654dba-e220-47ee-b2d1-7a699a936646.jpg',
    },
    {
        seriesName: 'Quán Ăn Xuyên Không',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b334045e-d62d-4f67-8d18-dc9f9335824e.jpg',
    },
    {
        seriesName: 'Just Be Friends',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-4cf4a6e7-247e-47bc-a0b2-d0dffbf4b576.jpg',
    },
    {
        seriesName: 'Nhật Ký Kẻ Cô Đơn',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-5a127494-aa54-4ba9-872a-b4c2bfb5eef3.jpg',
    },
    {
        seriesName: 'Đội Bảo An Kyoto',
        publisherName: 'Amak',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-6427d36f-15b1-463f-9e04-81cd3f8deb7a.jpg',
    },
    {
        seriesName: 'Another',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-f6c20374-a309-4eb6-9955-48b4e1600aff.jpg',
    },
    {
        seriesName: 'Nhật Ký Giấc Mơ – Trong Giấc Mơ Của Bạn, Tôi Không Tồn Tại',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-99b04f65-3b0d-4eae-a500-3e21105f5133.jpg',
    },
    {
        seriesName: 'Hành Trình Đến Tận Cùng Thế Giới',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9c946de6-442e-4607-abec-57193430aa43.jpg',
    },
    {
        seriesName: 'Dưới Ánh Sáng Ma Pháp 0.2 Lux',
        publisherName: 'Sky Light Novel',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-faaee3dd-5c87-401b-986c-a8cb8b1b4836.jpg',
    },
    {
        seriesName: 'Tớ Muốn Ăn Tụy Của Cậu',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e53b14af-9a7a-4962-94ca-c0a1c6301c1e.jpg',
    },
    {
        seriesName: 'Suzumiya Haruhi',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-ee3a8979-a49b-40f5-bd58-d8c660abfc88.jpg',
    },
    {
        seriesName: 'Calling You',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-082266b4-5dd6-4a82-8d29-65c9289df691.jpg',
    },
    {
        seriesName: 'Thằng Khờ',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-b58b07a4-56af-4797-8ab4-a1a7ea63d08f.jpg',
    },
    {
        seriesName: 'Your Name',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c032ae2d-a86d-4969-a2ce-6bc56ff197e3.jpg',
    },
    {
        seriesName: 'Cuộc Chiến Luân Hồi - All You Need Is Kill',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-63370ef7-8d7f-4b6b-9791-0c125cc5328a.jpg',
    },
    {
        seriesName: 'Orange - Lá Thư Từ Tương Lai (Boxset 3 tập)',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-52a214b4-0c14-49cd-a264-d5645f13b5a8.jpg',
    },
    {
        seriesName: 'Kem Đá',
        publisherName: 'Nhã Nam',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-52278114-4c78-4cdd-a5f7-eab2f20859a7.jpg',
    },
    {
        seriesName: 'Cuốn Sách Của Sự Kết Thúc',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-e167f844-4278-4a57-851a-5b19216580f2.jpg',
    },
    {
        seriesName: 'Tiếng gọi từ vì sao xa',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-1a42b1fb-e00e-424d-96bd-b2e90a66e97d.jpg',
    },
    {
        seriesName: 'Bí Mật Giao Ước Bóng Tối',
        publisherName: 'Thái Hà Books',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-82d3abba-8231-4303-89ca-bfb74f9dabb9.jpg',
    },
    {
        seriesName: 'Ánh Trăng',
        publisherName: 'Quảng Văn',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-90f05567-736f-4929-a2d3-881f12505741.jpg',
    },
    {
        seriesName: 'Câu Lạc Bộ Giỏi Và Sành Sỏi',
        publisherName: 'Trẻ',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-326f509a-fecc-4b3d-a115-d52d29a652a0.jpg',
    },
    {
        seriesName: 'Mimizuku Và Vua Bóng Đêm',
        publisherName: 'Owlbooks',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-9ba27679-7648-4555-8d26-cada46eeef30.jpg',
    },
    {
        seriesName: 'Khu vườn ngôn từ',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-c8441bf6-93aa-4214-83c2-611054fa4948.jpg',
    },
    {
        seriesName: 'Chào Mừng Đến Với N.H.K!',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-db1a4c62-3484-42ea-bfe1-48fa02e20298.jpg',
    },
    {
        seriesName: 'Ame Và Yuki - Những Đứa Con Của Sói',
        publisherName: 'IPM',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-66c3c330-2ae2-4ff4-8579-c8463bbf96ee.jpg',
    },
    {
        seriesName: 'Thám Tử Lừng Danh Conan',
        publisherName: 'Kim Đồng',
        coverUrl: 'https://i.docln.net/lightnovel/covers/u2-8d6d28f7-4725-4ebb-afc3-d2f44e38399b.jpg',
    },
];

const favoriteRanobe = lnList.map((ln, index) => {
    return { ...ln, id: index + 1 };
});

export default favoriteRanobe;
