import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select, Table, Button, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import './LeaderBoardTable.scss';
import gold from 'assets/gold.png';
import silver from 'assets/silver.png';
import bronze from 'assets/bronze.png';
import sakura from 'assets/sakura1.svg';
import {
    publisherFilter,
    rookieRanobe,
    anticipatedRanobe,
    disappointingRanobe,
    copyrightRanobe,
    favoritePublisher,
    favoriteRanobe,
} from './Data';

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
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    {/* <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button> */}
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Xếp hạng',
            dataIndex: 'rank',
            align: 'center',
            sorter: (a, b) => a.rank - b.rank,
            render: (rank) => {
                const rankColors = ['#e79827', '#7784a5', '#b46933'];
                const rankImages = [
                    <img src={gold} alt="" width={20} />,
                    <img src={silver} alt="" width={20} />,
                    <img src={bronze} alt="" width={20} />,
                ];
                const getRankImage = (rank) =>
                    (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '5px' }}>
                            <div style={{ color: rankColors[rank - 1] }}>
                                # <span style={{ fontWeight: '800', color: rankColors[rank - 1] }}>{rank}</span>
                            </div>
                            {rankImages[rank - 1]}
                        </div>
                    ) || (
                        <>
                            # <span style={{ fontWeight: '800' }}>{rank}</span>
                        </>
                    );
                return getRankImage(rank);
            },
            sortDirections: ['descend'],
            width: '15%',
        },
        {
            title: 'Tác phẩm',
            dataIndex: 'seriesName',
            ...getColumnSearchProps('seriesName'),
            width: '45%',
        },
        {
            title: 'Nhà phát hành',
            dataIndex: 'publisherName',
            align: 'center',
            filters: publisherFilter,
            filterSearch: true,
            onFilter: (value, record) => record.publisherName.indexOf(value) === 0,
            width: '20%',
        },
        {
            title: 'Số bình chọn',
            dataIndex: 'vote',
            align: 'center',
            sorter: (a, b) => b.vote - a.vote,
            render: (vote) => <span style={{ fontWeight: '800' }}>{vote}</span>,
            sortDirections: ['descend'],
            width: '20%',
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
                    status="error"
                />
            </div>
            <div className="sakuraimg">
                <img src={sakura} alt="" />
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
