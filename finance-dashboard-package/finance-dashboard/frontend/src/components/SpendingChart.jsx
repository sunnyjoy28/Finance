import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
const COLORS = ['#ff7a7a','#ffb86b','#cbd5e1'];
export default function SpendingChart({data}){
  const d = data.map(x=>({ name: x.name, value: x.amount }));
  return (
    <div className="card">
      <h3>Spending Overview</h3>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie dataKey="value" data={d} innerRadius={40} outerRadius={60}>
            {d.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
