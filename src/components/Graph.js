import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import '../css/graph.css';

const data = [
    { name: '식빵', value: 200, color: '#FECBA4'},
    { name: '소보로빵', value: 400, color: '#dbb37e'},
    { name: '소금빵', value: 600, color: '#935614'},
  ];
const Graph = ()=> {

    return(
        <div className="container">
            <div className="componentTitle">지난 주 판매 수량 TOP 3</div>
            <PieChart width={400} height={400}>
                <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={120}
                label className="text"
                abelLine={false}>
                  {
                  data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                 ))
                 }
                 </Pie>
                 <Tooltip />
                 <Legend />
                 </PieChart>
                </div>
    );

}

export default Graph;