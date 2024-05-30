import React, { useState } from 'react';
import '../css/control.css';
import lockerImg from '../images/locker.png';
import axios from 'axios';

function Control(){

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        // API 호출
        axios.post('http://52.79.172.135:8080/api/unlock')
            .then(response => {
                // API로부터 데이터 가져오기 성공 시
                console.log('Locker opened:', response);
                setIsOpen(true); // 상태 업데이트
            })
            .catch(error => {
                // API로부터 데이터 가져오기 실패 시
                console.error('Error unlocking:', error);
            });
    };

    const handleClose = () => {
        axios.post('http://52.79.172.135:8080/api/lock')
        .then(response => {
            // API로부터 데이터 가져오기 성공 시
            console.log('Locker closed:', response);
            setIsOpen(false); // 상태 업데이트
        })
        .catch(error => {
            // API로부터 데이터 가져오기 실패 시
            console.error('Error locking:', error);
        });
    };

    return (
        <div className="container">
            <img src={lockerImg} alt="보관함" className="storageImage" />
            <div className="buttonContainer">
                <button onClick={handleOpen} className="openButton">Open</button>
                <button onClick={handleClose} className="closeButton">Close</button>
            </div>
            {isOpen ? <p>자판기 문이 열렸습니다.</p> : <p>자판기 문이 닫혔습니다.</p>}
        </div>
    );
}

export default Control;