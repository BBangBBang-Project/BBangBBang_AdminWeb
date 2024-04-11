import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
function Nav(){
    return(
    <div>
        <div className="navbar">
            <Link className="navbarMenu" to={'/'}>통계 및 리포트</Link>
            <Link className="navbarMenu" to={'/Control'}>자판기 제어</Link>
            <Link className="navbarMenu" to={'/CCTV'}>모니터링</Link>
            <Link className="navbarMenu" to={'/MyPage'}>내 정보</Link>
            </div>
        </div>
    );
}

export default Nav;