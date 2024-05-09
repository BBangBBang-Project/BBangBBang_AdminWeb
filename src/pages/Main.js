import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from '../components/Graph';
import Statistics from '../components/Statistics';
import '../css/main.css';

function Main(){
    const [weeklySales, setWeeklySales] = useState(null);

    useEffect(() => {
        // API 호출
        axios.get('http://52.79.172.135:8080/seller/sales')
            .then(response => {
                // API로부터 데이터 가져오기 성공 시
                setWeeklySales(response.data);
            })
            .catch(error => {
                // API로부터 데이터 가져오기 실패 시
                console.error('Error fetching weekly sales data:', error);
            });
    }, []);
    return(
        <div>
            <h1 className='title'>빵 판매 현황</h1>
            <div className='graphContainer'>
            {weeklySales && (
                    <>
                <Statistics weeklySales={weeklySales} />
                <Graph weeklySales={weeklySales} />
                </>
            )}
            </div>
        </div> 
    ); 
}

export default Main;