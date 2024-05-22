import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined, FontSizeOutlined, FileImageOutlined } from '@ant-design/icons';
import { Table, Button, Input, Space, Popover, Divider, Alert } from 'antd';
import Highlighter from 'react-highlight-words';
import Category from '../Category';
import './Illustrator.scss';
import { MessageHub } from 'components/common';

function Illustrator({ id, title, category, listData, maxItems, notification, description, onSelectionChange }) {
    const alertRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [viewerMode, setViewerMode] = useState('titleViewer');
    const searchInput = useRef(null);

    const [chosenItems, setChosenItems] = useState(JSON.parse(localStorage.getItem(`bxhlnvn_${category}_rows`)) ?? []);
    const [selectedRowKeys, setSelectedRowKeys] = useState(
        JSON.parse(localStorage.getItem(`bxhlnvn_${category}_rowkeys`)) ?? [],
    );

    const [showOnlySelected, setShowOnlySelected] = useState(false);

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
                    placeholder={`Nhập tên họa sĩ cần tìm`}
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
                        onClick={() => {
                            clearFilters && handleReset(clearFilters);
                            handleSearch(selectedKeys, confirm, dataIndex);
                            clearFilters && handleReset(clearFilters);
                        }}
                        size="small"
                        style={{
                            width: 70,
                        }}
                    >
                        Reset
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
                        fontWeight: 700,
                        color: '#4e4d4d',
                    }}
                    style={{ fontWeight: 700 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                <p style={{ fontWeight: 700 }}>{text}</p>
            ),
    });

    //Series searching function
    const [seriesSearchText, setSeriesSearchText] = useState('');
    const [filteredSeries, setFilteredSeries] = useState(listData);
    const handleSeriesSearch = (value) => {
        setSeriesSearchText(value);
        if (value === '') {
            setFilteredSeries(listData);
        } else {
            const results = listData.filter((author) =>
                author.series.some((series) => series.seriesTitle.toLowerCase().includes(value.toLowerCase())),
            );
            setFilteredSeries(results);
        }
    };
    const handleSeriesReset = () => {
        setSeriesSearchText('');
        setFilteredSeries(listData);
    };
    const seriesSearchContent = (
        <div
            style={{
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
            }}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <Input.Search
                placeholder="Nhập tên tác phẩm"
                enterButton
                allowClear
                onSearch={handleSeriesSearch}
                style={{
                    width: 200,
                }}
            />
            <Button
                size="small"
                onClick={handleSeriesReset}
                style={{
                    width: 200,
                }}
            >
                Reset
            </Button>
        </div>
    );

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '5%',
            align: 'center',
            responsive: ['md'],
            sorter: (a, b) => a.id - b.id,
            sortDirections: ['descend'],
        },
        {
            title: 'Họa sĩ',
            dataIndex: 'name',
            width: '25%',
            align: 'center',
            ...getColumnSearchProps('name'),
        },
        {
            title: () => (
                <div className="series-column">
                    Tác phẩm minh họa
                    <Popover content={seriesSearchContent} trigger="click" placement="bottomRight">
                        <div className="series-column-search">
                            <SearchOutlined />
                        </div>
                    </Popover>
                </div>
            ),
            dataIndex: 'series',
            width: '70%',
            filterDropdown: () => (
                <div className="series-viewer">
                    <p onClick={() => setViewerMode('imageViewer')}>
                        <FileImageOutlined />
                        <span style={{ paddingLeft: 5 }}>
                            Chế độ xem <strong>ảnh bìa</strong>
                        </span>
                    </p>
                    <p onClick={() => setViewerMode('titleViewer')}>
                        <FontSizeOutlined />
                        <span style={{ paddingLeft: 5 }}>
                            Chế độ xem <strong>tiêu đề</strong>
                        </span>
                    </p>
                </div>
            ),
            render: (series) => {
                if (viewerMode === 'imageViewer') {
                    return (
                        <div className="series-cover">
                            {series.map((item, index) => (
                                <div className="series-cover-item" key={index}>
                                    <Popover placement="topLeft" content={item.seriesTitle}>
                                        <img src={item.coverUrl} alt="" />
                                    </Popover>
                                </div>
                            ))}
                        </div>
                    );
                } else {
                    return series.length === 1 ? (
                        <div className="series-title">
                            {seriesSearchText !== '' ? (
                                <Highlighter
                                    highlightStyle={{
                                        backgroundColor: '#ffc069',
                                        padding: 0,
                                        fontWeight: 700,
                                        color: '#4e4d4d',
                                    }}
                                    searchWords={[seriesSearchText]}
                                    autoEscape
                                    textToHighlight={series[0].seriesTitle ? series[0].seriesTitle.toString() : ''}
                                />
                            ) : (
                                <p>{series[0].seriesTitle}</p>
                            )}
                        </div>
                    ) : (
                        <div className="series-title">
                            {series.map((item, index) => (
                                <div key={index}>
                                    {seriesSearchText !== '' ? (
                                        <p>
                                            <Highlighter
                                                highlightStyle={{
                                                    backgroundColor: '#ffc069',
                                                    padding: 0,
                                                    fontWeight: 700,
                                                    color: '#4e4d4d',
                                                }}
                                                searchWords={[seriesSearchText]}
                                                autoEscape
                                                textToHighlight={
                                                    item.seriesTitle ? '- ' + item.seriesTitle.toString() : ''
                                                }
                                            />
                                        </p>
                                    ) : (
                                        <p>- {item.seriesTitle}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                }
            },
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            if (selectedRows.length <= maxItems) {
                setSelectedRowKeys(selectedRowKeys);
                setChosenItems(selectedRows);
                localStorage.setItem(`bxhlnvn_${category}_rowkeys`, JSON.stringify(selectedRowKeys));
                localStorage.setItem(`bxhlnvn_${category}_rows`, JSON.stringify(selectedRows));
            } else {
                selectedRowKeys.pop();
                selectedRows.pop();
                alertRef.current(notification);
            }
        },
        getCheckboxProps: (record) => ({
            // disabled: selectedRowKeys.length >= maxItems && !selectedRowKeys.includes(record.id),
            name: record.name,
        }),
    };

    const filteredData = showOnlySelected
        ? listData.filter((item) => selectedRowKeys.includes(item.id))
        : filteredSeries;

    useEffect(() => {
        onSelectionChange(category, title, chosenItems);
    }, [selectedRowKeys]);

    return (
        <div className="favorite-illustrator">
            <Category title={id + '. ' + title} description={description} />
            <Divider />
            <Alert
                message={<strong style={{ color: '#000000ad' }}>Lưu ý</strong>}
                description={
                    <p>
                        Để thuận tiện cho việc bình chọn: <br />- Ở cột{' '}
                        <strong style={{ color: '#000000ad' }}>Họa sĩ</strong> có một nút với chức năng tìm kiếm tên họa
                        sĩ mong muốn. <br />- Ở cột <strong style={{ color: '#000000ad' }}>Tác phẩm minh họa</strong>,
                        có hai nút chức năng, một là{' '}
                        <strong style={{ color: '#000000ad' }}>Tìm kiếm theo tên tác phẩm</strong>, hai là bộ lọc giúp
                        bạn chuyển đổi giữa hai chế độ xem tác phẩm mà họa sĩ đó minh họa (đã phát hành ở Việt Nam), là{' '}
                        <strong>Xem bằng ảnh bìa</strong> và <strong>Xem bằng tiêu đề</strong>, mặc định hiển thị sẽ là
                        Xem bằng tiêu đề. <br />- Cuối cùng, để kiểm tra lại những lựa chọn của mình, hãy ấn nút{' '}
                        <strong style={{ color: '#000000ad' }}>Hiển thị họa sĩ đã chọn</strong> ngay bên dưới.
                    </p>
                }
                type="info"
                showIcon
            />
            <Divider />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Button
                    onClick={() => setShowOnlySelected(!showOnlySelected)}
                    type="primary"
                    style={{ marginBottom: 16 }}
                >
                    {showOnlySelected ? 'Hiển thị tất cả' : 'Hiển thị họa sĩ đã chọn'}
                </Button>
            </div>
            <div className="illustrator-table">
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={filteredData}
                    rowKey={(record) => record.id}
                    pagination={{
                        position: ['bottomCenter'],
                        defaultPageSize: 20,
                        locale: { items_per_page: 'họa sĩ/trang' },
                    }}
                />
            </div>
            <MessageHub>{(msg) => (alertRef.current = msg)}</MessageHub>
        </div>
    );
}

export default Illustrator;
