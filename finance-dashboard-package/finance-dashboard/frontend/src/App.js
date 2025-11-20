import React, {useEffect, useState} from 'react';
import EarningsChart from './components/EarningsChart';
import SpendingChart from './components/SpendingChart';
import CashFlowChart from './components/CashFlowChart';
import BillsList from './components/BillsList';
import TransactionsTable from './components/TransactionsTable';

export default function App(){
  const [sample, setSample] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/api/sample')
      .then(r=>r.json())
      .then(setSample)
      .catch(()=>{});
  },[]);

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Finance</h2>
        <nav>
          <a className="active">Dashboard</a>
          <a>Wallets</a>
          <a>Analytics</a>
          <a>Transactions</a>
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <h1>Welcome back, Student</h1>
        </header>

        <section className="grid-3">
          <EarningsChart data={sample?.earningsOverview?.monthly || []} />
          <SpendingChart data={sample?.spendingOverview?.categories || []} />
          <CashFlowChart />
        </section>

        <section className="grid-2">
          <BillsList />
          <TransactionsTable />
        </section>
      </main>
    </div>
  );
}
