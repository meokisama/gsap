import { useState, useEffect, useRef } from 'react';

import VoteHeader from './VoteHeader';
import ListComponent from './ListComponent';
import { novelList } from './NovelData/NovelList';
import Transition from '../../components/Transition';
import Footer from '../../components/Footer';
import SendResult from './SendResult';
import DocumentTitle from '../../components/DocumentTitle';

function Vote() {
    DocumentTitle('Bình Chọn - Bảng Xếp Hạng Light Novel Việt Nam');

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const [currentComponent, setCurrentComponent] = useState(0);

    //------------Get selected items from each category
    const [selectedItems, setSelectedItems] = useState([]);
    const handleChildSelection = (category, title, selectedItemsFromChild) => {
        setSelectedItems((prevSelectedItems) => {
            const updatedSelectedItems = [...prevSelectedItems];
            const existingIndex = updatedSelectedItems.findIndex((item) => item.category === category);

            if (existingIndex !== -1) {
                // Update existing item
                updatedSelectedItems[existingIndex] = {
                    name: title,
                    category: category,
                    chosenItems: selectedItemsFromChild,
                };
            } else {
                // Add new item
                updatedSelectedItems.push({
                    name: title,
                    category: category,
                    chosenItems: selectedItemsFromChild,
                });
            }

            return updatedSelectedItems;
        });
    };

    useEffect(() => {
        console.log(JSON.stringify(selectedItems));
    }, [selectedItems]);
    //---------------End

    //---------------Change category component
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
    //-----------------End

    const components = [
        <ListComponent
            id="1"
            title="Light Novel được yêu thích nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn tối đa <strong>10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={novelList}
            maxItems={3}
            notification="Bạn chỉ được chọn tối đa 3 tựa sách cho hạng mục này!"
            category="mostFavorite"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="2"
            title="Light Novel được mong chờ nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn tối đa <strong>10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={novelList}
            maxItems={2}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="mostExpected"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="3"
            title="Light Novel được mong chờ nhất"
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn tối đa <strong>10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            listData={novelList}
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            category="mostTest"
            onSelectionChange={handleChildSelection}
        />,
        <SendResult result={selectedItems} />,
    ];

    const isLastComponent = currentComponent === components.length - 1;

    //---------Scroll to top
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
    //----------End

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
