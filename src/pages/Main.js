import React from 'react';
import Graph from '../components/Graph';
import Statistics from '../components/Statistics';
import '../css/main.css';

function Main(){
    return(
        <div>
            <h1 className='title'>빵 판매 현황</h1>
            <div className='graphContainer'>
               <Graph/>
               <Statistics/>
            </div>
        </div>

        
    )
    
}

export default Main;