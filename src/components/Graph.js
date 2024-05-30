import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import '../css/graph.css';

const Graph = ({weeklySales})=> {

  // lastWeekBreadSales에서 quantity가 가장 많은 3종류의 빵을 선택
  const top3Breads = weeklySales.lastWeekBreadSales
  .sort((a, b) => b.quantity - a.quantity)
  .slice(0, 3);

  const colors = ['#FECBA4', '#dbb37e', '#935614'];

  // Pie Chart에 표시할 데이터 형식으로 변환
  const pieData = top3Breads.map((bread, index) => ({
    name: bread.breadName,
    value: bread.quantity,
    color: colors[index]
}));

    return(
        <div className="container">
            <div className="componentTitle">지난 주 판매 수량 TOP 3</div>
            <PieChart width={400} height={400}>
                <Pie
                dataKey="value"
                isAnimationActive={false}
                data={pieData}
                cx={200}
                cy={200}
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value}`} // 이름과 수량을 라벨로 표시
                labelLine={false}>
                  {
                  pieData.map((entry, index) => (
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