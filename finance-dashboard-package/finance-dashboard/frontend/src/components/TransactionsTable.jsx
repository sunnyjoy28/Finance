import React from 'react';
export default function TransactionsTable(){
  const tx = [
    { activity:'Mobile App Purchase', date:'Wed 10:29 AM', amount:25500, status:'Success' },
    { activity:'Software License', date:'Wed 10:29 AM', amount:25500, status:'Success' }
  ];
  return (
    <div className="card">
      <h3>Recent Transaction</h3>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><th align="left">Activity</th><th align="left">Date</th><th align="right">Amount</th></tr></thead>
        <tbody>
          {tx.map((t,i)=>(
            <tr key={i}><td>{t.activity}</td><td>{t.date}</td><td align="right">${t.amount}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
