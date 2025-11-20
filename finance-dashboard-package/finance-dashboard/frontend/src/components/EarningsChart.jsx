import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function EarningsChart({data}){
  const d = data.map(x => ({ month: x.month, amount: x.amount }));
  return (
    <div className="card">
      <h3>Earning Overview</h3>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={d}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#0ea5e9" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
