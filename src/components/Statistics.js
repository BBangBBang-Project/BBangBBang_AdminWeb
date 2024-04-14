import React from "react";
import '../css/graph.css';
const Statistics = ()=> {

    return(
        <div className="container">
            <div className="componentTitle">판매 통계</div>
            <div className="statistics">
                <div className="sales">저번 주 매출 금액 &nbsp;&nbsp;&nbsp; 200,000</div>
                <div className="sales">이번 주 매출 금액 &nbsp;&nbsp;&nbsp; 230,000</div>
                <div className="profit"> 지난 주 대비 매출 증감율   &nbsp;&nbsp;&nbsp; 🔺 15%</div>
            </div>
        </div>
    );
}

export default Statistics;