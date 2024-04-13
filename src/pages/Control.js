import React, { useState } from 'react';
import '../css/control.css';
import lockerImg from '../images/locker.png';

function Control(){

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        // open 버튼을 누를 때의 동작
        setIsOpen(true);
    };

    const handleClose = () => {
        // close 버튼을 누를 때의 동작
        setIsOpen(false);
    };

    return (
        <div className="container">
            <img src={lockerImg} alt="보관함" className="storageImage" />
            <div className="buttonContainer">
                <button onClick={handleOpen} className="openButton">Open</button>
                <button onClick={handleClose} className="closeButton">Close</button>
            </div>
        </div>
    );
}

export default Control;