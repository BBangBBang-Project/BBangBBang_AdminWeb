import React from 'react';
import './OrderList.css';

const OrderList = ({ orders }) => {
    // orderId 내림차순으로 orders 배열 정렬
    const sortedOrders = [...orders].sort((a, b) => b.orderId - a.orderId);

    return (
        <tbody>
            {sortedOrders.map(order => (
                <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>
                        {order.orderItems.map((item, index) => (
                            <div key={item.productId} className={`order-item ${index < order.orderItems.length - 1 ? 'border-bottom' : ''}`}>
                                <img src={item.imageUrl} alt={item.productName} className="product-image" />
                                <span className="product-name">{item.productName}</span>
                            </div>
                        ))}
                    </td>
                    <td>
                        {order.orderItems.map((item, index) => (
                            <div key={item.productId} className={`order-quantity ${index < order.orderItems.length - 1 ? 'border-bottom' : ''}`}>
                                {item.quantity}
                            </div>
                        ))}
                    </td>
                    <td>{order.totalAmount.toLocaleString()}원</td>
                </tr>
            ))}
        </tbody>
    );
};

export default OrderList;
