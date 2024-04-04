import { useState, useEffect, useRef } from 'react';

import { Transition, Footer, DocumentTitle } from 'components';
import { VoteHeader, ListComponent, SendResult } from './components';
import {
    favoriteRanobe,
    rookieRanobe,
    anticipatedRanobe,
    disappointingRanobe,
    copyrightRanobe,
    favoritePublisher,
} from './List';

function Vote() {
    DocumentTitle('Bình Chọn - Bảng Xếp Hạng Light Novel Việt Nam');

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const [currentComponent, setCurrentComponent] = useState(0);

    //Get selected items from each category
    const [selectedItems, setSelectedItems] = useState([]);
    const handleChildSelection = (category, title, selectedItemsFromChild) => {
        setSelectedItems((prevSelectedItems) => {
            const updatedSelectedItems = [...prevSelectedItems];
            const existingIndex = updatedSelectedItems.findIndex((item) => item.category_short === category);

            if (existingIndex !== -1) {
                // Update existing item
                updatedSelectedItems[existingIndex] = {
                    category_name: title,
                    category_short: category,
                    chosenItems: selectedItemsFromChild,
                };
            } else {
                // Add new item
                updatedSelectedItems.push({
                    category_name: title,
                    category_short: category,
                    chosenItems: selectedItemsFromChild,
                });
            }

            return updatedSelectedItems;
        });
    };

    useEffect(() => {
        console.log(JSON.stringify(selectedItems));
    }, [selectedItems]);

    //Change category component
    const handleNext = () => {
        if (currentComponent < components.length - 1) {
            setCurrentComponent(currentComponent + 1);
        }
    };

    const handlePrevious = () => {
        if (currentComponent > 0) {
            setCurrentComponent(currentComponent - 1);
        }
    };

    const components = [
        <ListComponent
            id="1"
            title="Light Novel được yêu thích nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={favoriteRanobe}
            maxItems={10}
            notification="Bạn chỉ được chọn tối đa 10 tựa sách cho hạng mục này!"
            category="favoriteRanobe"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="2"
            title="Light Novel tân binh của năm"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={rookieRanobe}
            maxItems={2}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="rookieRanobe"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="3"
            title="Light Novel được mong chờ nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={anticipatedRanobe}
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="anticipatedRanobe"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="4"
            title="Light Novel gây thất vọng nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={disappointingRanobe}
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="disappointingRanobe"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="5"
            title="Light Novel muốn có bản quyền nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={copyrightRanobe}
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="copyrightRanobe"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="6"
            title="Nhà phát hành được yêu thích nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={favoritePublisher}
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 1 nhà phát hành yêu thích nhất!"
            category="favoritePublisher"
            onSelectionChange={handleChildSelection}
        />,
        <SendResult result={selectedItems} />,
    ];

    const isLastComponent = currentComponent === components.length - 1;

    //Scroll to top
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => setIsVisible(window.scrollY > 400);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //Fix first second of content when transition's opacity = 0
    const [contentMouted, setContentMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setContentMounted(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <Transition />
            {contentMouted && (
                <div>
                    <VoteHeader />
                    <div className="voteContainer">
                        {components[currentComponent]}
                        <button
                            className={currentComponent === 0 ? 'inactivate' : ''}
                            id="btnPrev"
                            onClick={handlePrevious}
                            ref={ref1}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                            </svg>
                        </button>
                        <button
                            className={isLastComponent ? 'inactivate' : ''}
                            id="btnNext"
                            onClick={handleNext}
                            ref={ref2}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                        <button
                            id="toTop"
                            onClick={scrollToTop}
                            style={{
                                display: isVisible ? 'block' : 'none',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                                />
                            </svg>
                        </button>
                    </div>
                    <Footer text="Trang Chủ" to={import.meta.env.VITE_HOMEPATH} />
                </div>
            )}
        </div>
    );
}

export default Vote;
