import { useEffect, useState, useRef } from 'react';
import { Card } from 'antd';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import './SendResult.scss';
import Category from '../Category';
import { MessageHub } from 'components/common';

function SendResult({ result }) {
    const cardTitleStyles = {
        fontFamily: 'Lexend',
        color: 'rgb(0 0 0 /70%)',
        fontWeight: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    };

    //Captcha
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [token, setToken] = useState(null);
    const [done, setDone] = useState(false);
    const captchaRef = useRef(null);

    const onVerify = (token) => {
        setCaptchaVerified(true);
        setToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        captchaVerified
            ? result.every((item) => item.chosenItems.length !== 0)
                ? setDone(() => {
                      // send result and token to server
                      //...

                      localStorage.clear();
                      return true;
                  })
                : alertRef.current('Bạn chưa hoàn thành hết các hạng mục bình chọn!')
            : alertRef.current('Vui lòng xác minh captcha trước khi gửi! (Captcha được dùng để giảm vote ảo)');
    };

    const alertRef = useRef(null);

    return (
        <div className="result-container">
            <Category
                title="Xác nhận và Gửi bình chọn"
                description={
                    <p>
                        Dưới đây là phần tóm tắt các lựa chọn mà bạn đã chọn trước đó. Vui lòng kiểm tra kỹ thông tin và
                        xác nhận lại trước khi gửi bình chọn cuối cùng cho chúng tôi. Xin cảm ơn!
                    </p>
                }
            />
            <div className="vote-content">
                {result.map((resultItem, index) => (
                    <Card
                        key={index}
                        title={<span style={cardTitleStyles}>{index + 1 + '. ' + resultItem.category_name}</span>}
                    >
                        {resultItem.category_short !== 'favoritePublisher' ? (
                            resultItem.chosenItems.length !== 0 ? (
                                <div className="list-item">
                                    {resultItem.chosenItems.map((ln, index) => (
                                        <div key={index} className="result-item">
                                            <div className="result-cover">
                                                <img alt="" src={ln.coverUrl} />
                                            </div>
                                            <div className="info">
                                                <h4>{ln.seriesName}</h4>
                                                <p>
                                                    (<strong>{ln.publisherName}</strong> phát hành)
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Bạn chưa bình chọn cho hạng mục này.</p>
                            )
                        ) : resultItem.chosenItems.length !== 0 ? (
                            <div className={`result-publisher ${resultItem.chosenItems[0].publisherLogo}`}>
                                <img src={`images/publisher/${resultItem.chosenItems[0].publisherLogo}.webp`} alt="" />
                            </div>
                        ) : (
                            <p>Bạn chưa bình chọn cho hạng mục này.</p>
                        )}
                    </Card>
                ))}

                <div className="captcha">
                    {!done ? (
                        <form onSubmit={handleSubmit}>
                            <HCaptcha
                                sitekey="10000000-ffff-ffff-ffff-000000000001"
                                onVerify={onVerify}
                                ref={captchaRef}
                            />
                            <div className="btn-container">
                                <button type="submit">Gửi Bình Chọn</button>
                            </div>
                        </form>
                    ) : (
                        <div className="show-success">
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
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <h3>Bình chọn đã được ghi nhận!</h3>
                            <p>
                                Cảm ơn bạn đã tham gia bình chọn cho bảng xếp hạng lần này. Chúng tôi sẽ tổng hợp các
                                lượt bình chọn và công bố kết quả của bảng xếp hạng trong thời gian sớm nhất!
                            </p>
                        </div>
                    )}
                </div>

                <MessageHub>{(msg) => (alertRef.current = msg)}</MessageHub>
            </div>
        </div>
    );
}

export default SendResult;
