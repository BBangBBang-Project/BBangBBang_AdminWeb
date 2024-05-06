import React from "react";
import '../css/graph.css';
const Statistics = ({ weeklySales })=> {
    const changeRate = ((weeklySales.thisWeekTotalSales - weeklySales.lastWeekTotalSales) / weeklySales.lastWeekTotalSales * 100).toFixed(2);
    
    // 아이콘 및 색상 결정 로직
    const iconStyle = changeRate >= 0 ? { symbol: '🔺', color: 'red' } : { symbol: '🔻', color: 'blue' };
//▼
    return(
        <div className="container">
            <div className="componentTitle">판매 통계</div>
            <div className="statistics">
                <div className="sales">저번 주 매출 금액 &nbsp;&nbsp;&nbsp; {weeklySales.lastWeekTotalSales}</div>
                <div className="sales">이번 주 매출 금액 &nbsp;&nbsp;&nbsp; {weeklySales.thisWeekTotalSales}</div>
                <div className="profit"> 지난 주 대비 매출 증감율   &nbsp;&nbsp;&nbsp;
                    <span style={{ color: iconStyle.color }}>{iconStyle.symbol}</span> {changeRate}% 
                </div>
            </div>
        </div>
    );
}

export default Statistics;