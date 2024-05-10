import { useState, useEffect, useRef } from 'react';
import { ROUTES } from 'constants';
import { Transition, Footer, DocumentTitle } from 'components/common';
import { VoteHeader, ListComponent, SendResult, StepBar, PopupModal } from 'components/vote';
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

    const [currentComponent, setCurrentComponent] = useState(0);

    //Get selected items from each category
    const [selectedItems, setSelectedItems] = useState([
        { category_name: 'Light Novel được yêu thích nhất', category_short: 'favoriteRanobe', chosenItems: [] },
        { category_name: 'Light Novel tân binh của năm', category_short: 'rookieRanobe', chosenItems: [] },
        { category_name: 'Light Novel được mong chờ nhất', category_short: 'anticipatedRanobe', chosenItems: [] },
        { category_name: 'Light Novel gây thất vọng nhất', category_short: 'disappointingRanobe', chosenItems: [] },
        { category_name: 'Light Novel muốn có bản quyền nhất', category_short: 'copyrightRanobe', chosenItems: [] },
        { category_name: 'Nhà phát hành được yêu thích nhất', category_short: 'favoritePublisher', chosenItems: [] },
    ]);
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
            scrollToTop();
        }
    };

    const handlePrevious = () => {
        if (currentComponent > 0) {
            setCurrentComponent(currentComponent - 1);
            scrollToTop();
        }
    };

    //onChange for Steps
    const onChange = (current) => {
        setCurrentComponent(current);
        scrollToTop();
    };

    const components = [
        <ListComponent
            id="1"
            title="Light Novel được yêu thích nhất"
            category="favoriteRanobe"
            listData={favoriteRanobe}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={10}
            notification="Bạn chỉ được chọn tối đa 10 tựa sách cho hạng mục này!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="2"
            title="Light Novel tân binh của năm"
            category="rookieRanobe"
            listData={rookieRanobe}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={2}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="3"
            title="Light Novel được mong chờ nhất"
            category="anticipatedRanobe"
            listData={anticipatedRanobe}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="4"
            title="Light Novel gây thất vọng nhất"
            category="disappointingRanobe"
            listData={disappointingRanobe}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="5"
            title="Light Novel muốn có bản quyền nhất"
            category="copyrightRanobe"
            listData={copyrightRanobe}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 2 tựa sách cho hạng mục này!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="6"
            title="Nhà phát hành được yêu thích nhất"
            category="favoritePublisher"
            listData={favoritePublisher}
            description={
                <p>
                    Hạng mục đầu tiên chính là Light Novel được yêu thích nhất. Yêu không thể nín, đói không thể nhịn,
                    và harem cũng không thể chỉ một người. Các bạn có thể chọn <strong>tối đa 10 tác phẩm </strong> cho
                    hạng mục này.
                </p>
            }
            maxItems={1}
            notification="Bạn chỉ được chọn tối đa 1 nhà phát hành yêu thích nhất!"
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

    //Hide Transition on small screen
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isWideScreen && <Transition />}
            <PopupModal />
            {contentMouted && (
                <div>
                    <StepBar
                        currentComponent={currentComponent}
                        onChange={onChange}
                        isLastComponent={isLastComponent}
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                    />
                    <VoteHeader />
                    <div className="voteContainer">
                        {components.map((component, index) => (
                            <div key={index} style={{ display: currentComponent === index ? 'block' : 'none' }}>
                                {component}
                            </div>
                        ))}

                        <button
                            id="toTop"
                            onClick={scrollToTop}
                            style={{
                                display: isVisible ? 'flex' : 'none',
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
                    <Footer text="Trang Chủ" to={ROUTES.HOME} />
                </div>
            )}
        </div>
    );
}

export default Vote;
