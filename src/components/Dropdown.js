import React from 'react';
import { Link } from 'react-router-dom';
import '../css/dropdown.css';

function Dropdown() {
  return (
    <div className="dropdown">
      <Link className="dropdownItem" to={'/CCTV'}>실시간 모니터링</Link>
      <Link className="dropdownItem" to={'/Recording'}>녹화 영상 확인</Link>
    </div>
  );
}

export default Dropdown;