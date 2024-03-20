import { useEffect, useState, useRef } from 'react';
import { Card, Statistic, Alert } from 'antd';
import { HomeOutlined, GlobalOutlined, WifiOutlined, EnvironmentOutlined } from '@ant-design/icons';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import './SendResult.scss';
import Category from '../Category';
import { MessageHub } from 'components';

function SendResult({ result }) {
    const [ipAddress, setIPAddress] = useState('');
    const [ip6Address, setIP6Address] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                setIPAddress(data.ip);
            })
            .catch((error) => console.log(error));

        fetch('https://api64.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                setIP6Address(data.ip);
            })
            .catch((error) => console.log(error));

        fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=6e4ad53275834f7aab02fc3e3d48b0a0`)
            .then((response) => response.json())
            .then((data) => {
                setCountry(data.country.name_native);
            })
            .catch((error) => console.log(error));
    }, []);

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
        <div className="sendResult">
            <Category
                title="Xác nhận và Gửi bình chọn"
                description={
                    <p>
                        Dưới đây là phần tóm tắt các lựa chọn mà bạn đã chọn trước đó. Vui lòng kiểm tra kỹ thông tin và
                        xác nhận lại trước khi gửi bình chọn cuối cùng cho chúng tôi. Xin cảm ơn!
                    </p>
                }
            />
            <div className="votedContent">
                <Card>
                    <div className="infoContent">
                        <Alert
                            message={
                                <span>
                                    Chúng tôi sử dụng thông tin về địa chỉ IP để tránh spam và lọc vote ảo!{' '}
                                    <strong>Thông tin này sẽ được trích xuất tự động.</strong>
                                </span>
                            }
                            type="info"
                            showIcon
                        />
                        <div className="ipInfo">
                            <Card>
                                <Statistic
                                    title="Địa Chỉ IPv4"
                                    value={ipAddress}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<GlobalOutlined />}
                                />
                            </Card>
                            <Card>
                                <Statistic
                                    title="Địa Chỉ IPv6"
                                    value={ip6Address}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<GlobalOutlined />}
                                />
                            </Card>
                            <Card>
                                <Statistic
                                    title="Quốc Gia"
                                    value={country}
                                    valueStyle={{
                                        color: '#cf1322',
                                    }}
                                    prefix={<EnvironmentOutlined />}
                                />
                            </Card>
                            <Card>
                                <Statistic
                                    title="Tinh/Thành Phố"
                                    value={region}
                                    valueStyle={{
                                        color: '#cf1322',
                                    }}
                                    prefix={<HomeOutlined />}
                                />
                            </Card>
                        </div>
                    </div>
                </Card>

                {result.map((resultItem, index) => (
                    <Card key={index} title={<span style={cardTitleStyles}>{index + 1 + '. ' + resultItem.name}</span>}>
                        {resultItem.category !== 'favoritePublisher' ? (
                            resultItem.chosenItems.length !== 0 ? (
                                <div className="listItem">
                                    {resultItem.chosenItems.map((ln, index) => (
                                        <div key={index} className="rItem">
                                            <div className="rCover">
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
                            <div className={`rPublisher ${resultItem.chosenItems[0].publisherLogo}`}>
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
                            <div className="btnContainer">
                                <button type="submit">Gửi Bình Chọn</button>
                            </div>
                        </form>
                    ) : (
                        <div className="showSuccess">
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
