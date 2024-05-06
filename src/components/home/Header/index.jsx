import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';
import './Header.scss';
import Sakura from '../Sakura';

function Header() {
    const [imgHeight, setImgHeight] = useState(null);
    const [shouldHide, setShouldHide] = useState(false);
    const bannerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const bannerElement = bannerRef.current;
        const imgElement = imgRef.current;

        const handleResize = () => {
            if (imgElement) {
                setImgHeight(bannerElement.clientHeight);
                setShouldHide(window.innerWidth < 900);
            }
        };

        window.addEventListener('resize', handleResize);

        const handleImageLoad = () => {
            if (imgElement) {
                setImgHeight(bannerElement.clientHeight);
            }
        };

        if (imgElement) {
            imgElement.addEventListener('load', handleImageLoad);
        }

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (imgElement) {
                imgElement.removeEventListener('load', handleImageLoad);
            }
        };
    }, []);

    return (
        <div className="header">
            <div className="headerContent" ref={bannerRef}>
                <Sakura density={60} />
                <div className="textContent">
                    <div className="textTitle">
                        <h1>
                            <span id="text01">Bảng Xếp Hạng </span>
                            <br />
                            <span id="text02"> Light Novel</span>
                            <br />
                            <span id="text03"> Việt Nam</span>
                        </h1>
                        <img id="rotSakura1" alt="" src={'src/assets/sakura1.svg'} />
                        <img id="rotSakura2" alt="" src={'src/assets/sakura2.svg'} />
                    </div>
                    <p>
                        Bạn là nhà thám hiểm rong ruổi trong những thế giới giả tưởng kỳ bí, là nhà lãnh đạo của những
                        cuộc phiêu lưu bất tận được thêu dệt bởi những con chữ! Đến, và đem quyền lực của bạn để bình
                        chọn cho những Light Novel độc đáo nhất, góp phần làm nên một bảng xếp hạng xuất sắc nhất lịch
                        sử Light Novel Việt Nam. Hãy là phù thủy của chính câu chuyện bạn yêu thích, và hãy để cái tên
                        của câu chuyện đó ghi danh bảng vàng!
                    </p>
                    <div id="textBtn">
                        <Link id="votebtn" to={ROUTES.VOTE} target="_blank">
                            <span>Bình Chọn</span>
                            <img alt="" src={'src/assets/sakura1.svg'} />
                        </Link>
                    </div>
                </div>
                <div className="imgContent">
                    <img alt="" src={'src/assets/headerimg.webp'} ref={imgRef} />
                </div>
            </div>
            {shouldHide ? null : <div style={{ height: imgHeight }}></div>}
        </div>
    );
}

export default Header;
