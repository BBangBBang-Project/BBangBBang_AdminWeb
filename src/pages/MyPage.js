import React from 'react';
import '../css/mypage.css';
import brandLogo from "../images/image.png";

function MyPage(){
    return (
        <div className="container">
            <img src={brandLogo} alt="보관함" className="brandLogoImg" />
            <div className="textContainer">
                <p className="storeName">빵빵 베이커리 성북점</p>
                    <p className="storeInfo">⭐️ 4.7</p>
                    <p className="storeInfo">월 ~ 토 08:00 ~ 21:00</p>
                    <p className="storeInfo">&nbsp;&nbsp; &nbsp; 일 &nbsp; &nbsp;09:00 ~ 21:00</p>
                    <p className="storeInfo">1588 - 0000</p>
            </div>
        </div>
    );
}

export default MyPage;