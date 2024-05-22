import { useState, useEffect, useRef } from 'react';
import { CaretUpFilled, CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { ROUTES } from 'constants';
import { Transition, Footer, DocumentTitle } from 'components/common';
import {
    VoteHeader,
    ListComponent,
    SendResult,
    StepBar,
    PopupModal,
    Feedback,
    Illustrator,
    ThankYou,
} from 'components/vote';
import { favoriteRanobe, favoriteIllustrator, favoritePublisher } from './List';

function Vote() {
    DocumentTitle('Bình Chọn - Bảng Xếp Hạng Light Novel Việt Nam');

    const thanks = localStorage.getItem('isVoteDone') === 'true' ? true : false;
    const [currentComponent, setCurrentComponent] = useState(0);

    //Get selected items from each category
    const [selectedItems, setSelectedItems] = useState([
        {
            category_name: 'Light Novel được yêu thích nhất',
            category_short: 'favoriteRanobe',
            chosenItems: [],
        },
        {
            category_name: 'Họa sĩ minh họa được yêu thích nhất',
            category_short: 'favoriteIllustrator',
            chosenItems: [],
        },
        {
            category_name: 'Nhà phát hành được yêu thích nhất',
            category_short: 'favoritePublisher',
            chosenItems: [],
        },
        {
            category_name: 'Chia sẻ ý kiến và đề xuất',
            category_short: 'feedback',
            chosenItems: [],
        },
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
                    Best of the best, ngôi đền văn học, nơi những xúc cảm tuyệt vời nhất thăng hoa. Đó chính là hạng mục
                    Light Novel được ưa thích nhất. Vẫn như mọi khi, <strong>10</strong> chính là con số tối đa các tác
                    phẩm mà bạn được bình chọn, hãy suy nghĩ khôn ngoan trước khi đưa ra lựa chọn cuối cùng!
                </p>
            }
            maxItems={10}
            notification="Chỉ được chọn tối đa 10 tác phẩm. Hãy thay đổi những lựa chọn trước đó nếu muốn chọn một tác phẩm khác!"
            onSelectionChange={handleChildSelection}
        />,
        <Illustrator
            id="2"
            title="Họa sĩ minh họa được yêu thích nhất"
            category="favoriteIllustrator"
            listData={favoriteIllustrator}
            description={
                <p>
                    Một hạng mục mới với BXH Light Novel được ưa thích nhất nơi chúng ta tôn vinh những họa sĩ đã để lại
                    ấn tượng nhiều nhất, khiến chúng ta mlem mỗi khi đọc Light Novel và là 99% lý do các bạn quan tâm
                    cái bộ truyện đấy. Số lượng lựa chọn ở đây tối đa là <strong>10 họa sĩ</strong>.
                </p>
            }
            maxItems={10}
            notification="Chỉ được chọn tối đa 10 họa sĩ. Hãy thay đổi những lựa chọn trước đó nếu muốn chọn một họa sĩ khác!"
            onSelectionChange={handleChildSelection}
        />,
        <ListComponent
            id="3"
            title="Nhà phát hành được yêu thích nhất"
            category="favoritePublisher"
            listData={favoritePublisher}
            description={
                <p>
                    Bày tỏ tình cảm và tri ân dành cho các đơn vị xuất bản đã mang đến những bộ Light Novel tuyệt vời
                    cho cộng đồng. Con số tối đa được chọn là <strong>3 nhà phát hành</strong> trong một lần bình chọn.
                </p>
            }
            maxItems={3}
            notification="Chỉ được chọn tối đa 3 NPH. Hãy thay đổi những lựa chọn trước đó nếu muốn chọn một NPH khác!"
            onSelectionChange={handleChildSelection}
        />,
        <Feedback
            id="4"
            title="Chia sẻ ý kiến và đề xuất"
            category="feedback"
            description={
                <p>
                    Nơi quý độc giả có thể <strong>tự do đóng góp</strong> ý kiến hay nhận xét về tác phẩm, nhà phát
                    hành, dịch giả, series muốn có bản quyền hoặc bất kỳ vấn đề nào khác liên quan. Hãy cho chúng tôi
                    biết bạn đang nghĩ gì!
                </p>
            }
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

    return thanks ? (
        <ThankYou />
    ) : (
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
                            <CaretUpFilled />
                        </button>

                        {currentComponent !== components.length - 1 ? (
                            <div className="control-button">
                                <button
                                    className={currentComponent === 0 ? 'inactivate' : ''}
                                    id="btnPrev"
                                    onClick={handlePrevious}
                                >
                                    <CaretLeftFilled />
                                </button>
                                <button
                                    className={isLastComponent ? 'inactivate' : ''}
                                    id="btnNext"
                                    onClick={handleNext}
                                >
                                    <CaretRightFilled />
                                </button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <Footer text="Trang Chủ" to={ROUTES.HOME} />
                </div>
            )}
        </div>
    );
}

export default Vote;
