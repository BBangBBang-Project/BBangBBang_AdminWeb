import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from'../Order/Component/OrderList';
import './OrderPage.css'

const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://52.79.172.135:8080/seller/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the orders!", error);
            });
    }, []);

    return (
        <div>
            <h1 className='title'>빵 판매 현황</h1>

        <div className="order-page">
           
            <table className="order-table">
                <thead>
                    <tr>
                        <th>주문 순서</th>
                        <th>주문 날짜</th>
                        <th>주문 상품</th>
                        <th>주문 수량</th>
                        <th>주문 금액</th>
                    </tr>
                </thead>
                <OrderList orders={orders} />
            </table>
        </div>
        </div>
    );
};

export default OrderPage;
