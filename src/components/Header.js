import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Header.css';
import logoImg from '../images/bread.png';
import Dropdown from './Dropdown';

function Header(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('통계 및 리포트');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const reportItems = [
        { path: '/Main', label: '통계 및 리포트' },
        { path: '/OrderPage', label: '주문내역 조회' }
    ];

    const handleItemClick = (label) => {
        setSelectedItem(label);
        setIsDropdownOpen(false);
    };

    return (
        <div className="header">
            <Link to="/Main" className="logo">
                <img src={logoImg} alt="Logo" className="logoImage" />
                <span className="logoText">BBANGBBANG</span>
            </Link>
            <div className="navbar">
                <div className="navbarMenu" onClick={toggleDropdown}>
                    {selectedItem}
                    <span className="arrow">{isDropdownOpen ? ' ▲' : ' ▼'}</span>
                    {isDropdownOpen && <Dropdown items={reportItems} onItemClick={handleItemClick} />}
                </div>
                <Link className="navbarMenu" to={'/Control'}>자판기 제어</Link>
                <Link className="navbarMenu" to={'/CCTV'}>모니터링</Link>
                <Link className="navbarMenu" to={'/MyPage'}>내 정보</Link>
            </div>
        </div>
    );
}

export default Header;
