import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { ROUTES } from 'constants';
import './PopupModal.scss';
import bannerimg from 'assets/popup_img.webp';

function PopupModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(showModal, 2000);
        return () => clearTimeout(timer);
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                footer={[]}
                width={isMobile ? 600 : 820}
                zIndex={479}
                destroyOnClose={true}
            >
                <div className="popup-modal">
                    <div className="popup-banner">
                        <div className="bannerimg">
                            <img src={bannerimg} alt="" />
                        </div>
                        <div className="bannertext">
                            <h1>
                                <span id="bannertext01">Bảng Xếp Hạng </span>
                                <br />
                                <span id="bannertext02"> Light Novel</span>
                                <br />
                                <span id="bannertext03"> Việt Nam</span>
                            </h1>
                        </div>
                    </div>
                    <div className="popup-content">
                        <p id="greeting">Quý độc giả thân mến,</p>
                        <p>
                            Sau đây là phần bình chọn chính thức cho <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong>
                            . Bảng xếp hạng kì này sẽ được chia làm những hạng mục sau:
                        </p>
                        <div className="split-categories">
                            <span>
                                <strong>1.</strong> Light Novel được yêu thích nhất <br />
                                <strong>2.</strong> Họa sĩ minh họa được yêu thích nhất <br />
                            </span>
                            <span>
                                <strong>3.</strong> Nhà phát hành được yêu thích nhất <br />
                                <strong>Bonus.</strong> Tự do đóng góp ý kiến và đề xuất <br />
                            </span>
                        </div>
                        <p>
                            Sau khi hoàn thành mỗi một hạng mục, quý độc giả có thể chuyển sang hạng mục tiếp theo bằng
                            cách tương tác với thanh steps bar nằm ở phía trên với{' '}
                            <strong style={{ color: '#fa7667' }}>hai nút mũi tên tiến/lùi </strong>
                            và <strong style={{ color: '#fa7667' }}>4 nút được đánh số tương ứng với 4 hạng mục</strong>
                            .
                        </p>
                        <p>
                            Cuối cùng, hãy bắt đầu khám phá và bình chọn cho những tác phẩm bạn yêu thích nhất. Ý kiến
                            của bạn sẽ giúp tạo ra một bảng xếp hạng phản ánh chính xác sự đa dạng và sở thích của cộng
                            đồng. Cảm ơn bạn đã tham gia và hãy sẵn sàng cho một cuộc hành trình đầy thú vị lần này!
                            Trân trọng.
                        </p>
                        <span id="start-btn" onClick={handleOk}>
                            BẮT ĐẦU
                        </span>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default PopupModal;
