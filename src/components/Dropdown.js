import React from 'react';
import { Link } from 'react-router-dom';
import '../css/dropdown.css';

function Dropdown({ items, onItemClick }) {
    return (
        <div className="dropdown">
            {items.map((item, index) => (
                <Link key={index} className="dropdownItem" to={item.path} onClick={() => onItemClick(item.label)}>
                    {item.label}
                </Link>
            ))}
        </div>
    );
}

export default Dropdown;
