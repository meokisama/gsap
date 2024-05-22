import './ThankYou.scss';
import thankyou_chibi from 'assets/thankyou-chibi.webp';

function ThankYou() {
    return (
        <div className="thankyou-wrapper">
            <div className="thankyou-title">
                <h1>Thank You</h1>
                <p className="subtitle">Xin cảm ơn!</p>
            </div>
            <div className="thankyou-content">
                <img src={thankyou_chibi} alt="" />
                <div className="text-content">
                    <p className="thankyou-graph">
                        <p>
                            Cảm ơn quý độc giả đã hoàn thành đợt bình chọn cho{' '}
                            <strong>Bảng Xếp Hạng Light Novel Việt Nam</strong> lần này.
                        </p>
                        <p>
                            Mỗi lá phiếu của các bạn không chỉ là sự ủng hộ, mà còn là một ngọn lửa nhiệt huyết thắp
                            sáng con đường mỗi chúng ta đang bước đi, con đường hướng tới sự phát triển, tôn vinh giá
                            trị văn học Light Novel và nét đẹp văn hóa đọc nước nhà. Tình yêu và sự tín nhiệm của các
                            bạn là nguồn cảm hứng vô tận, khơi dậy trong chúng tôi lòng đam mê và khát vọng không ngừng
                            để mang đến những sân chơi tuyệt vời, xứng đáng với niềm tin yêu của quý độc giả.
                        </p>
                        <p>
                            Chúng tôi vô cùng biết ơn và mong rằng sẽ tiếp tục được đồng hành cùng các bạn trên hành
                            trình văn chương đầy rực rỡ và thăng hoa phía trước. Trân trọng.
                        </p>
                        <p>
                            Cuối cùng, hãy điền tên của bạn vào ô bên dưới, chụp ảnh màn hình để chuẩn bị tham gia GA
                            của chúng tôi!
                        </p>
                    </p>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
