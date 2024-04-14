import { Select, Table } from 'antd';
import './LeaderBoardTable.scss';
import {
    publisherFilter,
    rookieRanobe,
    anticipatedRanobe,
    disappointingRanobe,
    copyrightRanobe,
    favoritePublisher,
    favoriteRanobe,
} from './Data';
import { useState } from 'react';

function LeaderBoardTable() {
    const [selectedCategory, setSelectedCategory] = useState({
        value: 'favoriteRanobe',
        label: 'Light Novel được yêu thích nhất',
    });
    const [data, setData] = useState(favoriteRanobe);
    const dataInput = {
        publisherFilter,
        rookieRanobe,
        anticipatedRanobe,
        disappointingRanobe,
        copyrightRanobe,
        favoritePublisher,
        favoriteRanobe,
    };

    const columns = [
        {
            title: 'Xếp hạng',
            dataIndex: 'rank',
            align: 'center',
            sorter: (a, b) => a.rank - b.rank,
            sortDirections: ['descend'],
        },
        {
            title: 'Tác phẩm',
            dataIndex: 'seriesName',
        },
        {
            title: 'Nhà phát hành',
            dataIndex: 'publisherName',
            align: 'center',
            filters: publisherFilter,
            onFilter: (value, record) => record.publisherName.indexOf(value) === 0,
        },
        {
            title: 'Số bình chọn',
            dataIndex: 'vote',
            align: 'center',
            sorter: (a, b) => b.vote - a.vote,
            sortDirections: ['descend'],
        },
    ];

    const selectArray = [
        {
            value: 'favoriteRanobe',
            label: 'Light Novel được yêu thích nhất',
        },
        {
            value: 'rookieRanobe',
            label: 'Light Novel tân binh của năm',
        },
        {
            value: 'anticipatedRanobe',
            label: 'Light Novel được mong chờ nhất',
        },
        {
            value: 'disappointingRanobe',
            label: 'Light Novel gây thất vọng nhất',
        },
        {
            value: 'copyrightRanobe',
            label: 'Light Novel muốn có bản quyền nhất',
        },
        {
            value: 'favoritePublisher',
            label: 'Nhà phát hành được yêu thích nhất',
        },
    ];

    const handleChange = (value) => {
        setSelectedCategory(selectArray.find((item) => item.value === value));
        setData(dataInput[value]);
    };

    return (
        <div className="leaderboard">
            <p className="ld-description">
                Đã có kết quả cho đợt bình chọn bảng xếp hạng kì này! Hãy chọn hạng mục tương ứng ở bên dưới để xem thứ
                hạng cụ thể của hạng mục đó. Có thể ấn vào phần tiêu đề của mỗi cột bên dưới để{' '}
                <strong>xem thứ hạng tăng dần/giảm dần</strong>, <strong>tìm kiếm tác phẩm cụ thể</strong> hay{' '}
                <strong>lọc ra các tác phẩm của mỗi nhà xuất bản</strong> tương ứng.
            </p>
            <div className="ld-select">
                <Select
                    defaultValue="favoriteRanobe"
                    style={{
                        width: 400,
                    }}
                    onChange={handleChange}
                    options={selectArray}
                    dropdownStyle={{ fontFamily: 'Lexend' }}
                />
            </div>
            <h1>{selectedCategory.label}</h1>
            <p className="h1-description">
                [Hạng mục này có tổng cộng <strong>{data.length} tác phẩm</strong> tham gia!]
            </p>
            <div className="ld-table">
                <Table columns={columns} dataSource={data} bordered />
            </div>
        </div>
    );
}

export default LeaderBoardTable;
