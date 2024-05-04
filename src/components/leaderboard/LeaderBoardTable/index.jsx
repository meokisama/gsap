import React, { useRef, useState } from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Table, Button, Input, Space, Popover, Rate } from 'antd';
import Highlighter from 'react-highlight-words';
import './LeaderBoardTable.scss';
import gold from 'assets/gold.png';
import silver from 'assets/silver.png';
import bronze from 'assets/bronze.png';
import nonoa from 'assets/nonoa_chibi.webp';
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
                    placeholder={`Nhập tên tác phẩm cần tìm`}
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
                            width: 110,
                        }}
                    >
                        Tìm kiếm
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 70,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Đóng
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#494949d7' : undefined,
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
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                gap: '5px',
                            }}
                        >
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
            responsive: ['md'],
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

    const popoverContent = (
        <div className="popover-content">
            {selectArray.map((item) => (
                <p
                    key={item.value}
                    className={selectedCategory.value === item.value ? 'selected-category' : ''}
                    onClick={() => handleChange(item.value)}
                >
                    {item.label}
                </p>
            ))}
        </div>
    );

    const [rateValue, setRateValue] = useState(4);
    const rateDesc = ['Tốt', 'Quá tốt', 'Cực kỳ tốt', 'Tốt không còn gì để nói', 'G Cup'];

    const handleChange = (value) => {
        setSelectedCategory(selectArray.find((item) => item.value === value));
        setData(dataInput[value]);
    };

    return (
        <div className="leaderboard">
            <p className="ld-description">
                Đã có kết quả cho bảng xếp hạng kì này! Hãy ấn vào nút cài đặt bên cạnh tên hạng mục để chọn và xem thứ
                hạng cụ thể của hạng mục đó. Có thể ấn vào phần tiêu đề của mỗi cột bên dưới để{' '}
                <strong>xem thứ hạng tăng dần/giảm dần</strong>, <strong>tìm kiếm tác phẩm cụ thể</strong> hay{' '}
                <strong>lọc ra các tác phẩm của mỗi nhà xuất bản</strong> tương ứng.
            </p>
            <div className="ld-chibi">
                <img src={nonoa} alt="" />
            </div>
            <div className="ld-table-header">
                <div className="header-left-panel">
                    <div className="category-title">
                        <h1>{selectedCategory.label}</h1>
                        <p className="h1-description">
                            Hạng mục này có tổng cộng <strong>{data.length} tác phẩm</strong> tham gia!
                        </p>
                    </div>
                    <Popover placement="bottomRight" content={popoverContent} trigger="click">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Popover>
                </div>
                <div className="header-right-panel">
                    <div className="vote-container">
                        <p>Số phiếu bình chọn</p>
                        <div className="vote-number">
                            <UserOutlined />
                            <p>4128</p>
                        </div>
                    </div>
                    <div className="rate-container">
                        <p>Đánh giá bảng xếp hạng</p>
                        <Rate tooltips={rateDesc} value={rateValue} onChange={setRateValue} />
                    </div>
                    <div className="next-container">
                        <p>Kỳ tiếp theo</p>
                        <span>Tháng 12/2024</span>
                    </div>
                </div>
            </div>
            <div className="ld-table">
                <Table
                    columns={columns}
                    dataSource={data}
                    rowClassName={(record) => `rank-${record.rank}`}
                    pagination={{
                        position: ['bottomCenter'],
                        defaultPageSize: 20,
                        locale: { items_per_page: 'mục/trang' },
                    }}
                    bordered
                    locale={{
                        triggerDesc: 'Click để xếp theo thứ tự giảm dần',
                        cancelSort: 'Click để xếp theo thứ tự tăng dần',
                        filterSearchPlaceholder: 'Tìm tên nhà phát hành',
                    }}
                />
            </div>
        </div>
    );
}

export default LeaderBoardTable;
