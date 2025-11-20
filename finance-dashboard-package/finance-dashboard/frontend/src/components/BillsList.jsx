import React from 'react';
export default function BillsList(){
  const bills = [
    { name: 'Netflix', due: '2025-06-28', amount: 15.99, status:'Scheduled' },
    { name: 'Spotify', due: '2025-06-30', amount: 9.99, status:'Scheduled' },
    { name: 'Adobe', due: '2025-07-04', amount: 52.99, status:'Scheduled' }
  ];
  return (
    <div className="card">
      <h3>Upcoming Bills & Payment</h3>
      <ul>
        {bills.map((b,i)=>(
          <li key={i} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>
            <strong>{b.name}</strong><div>{b.due} • ${b.amount.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
