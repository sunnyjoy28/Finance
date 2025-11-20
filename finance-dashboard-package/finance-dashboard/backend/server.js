const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRouter = require('./routes/transactions');
const billsRouter = require('./routes/bills');
const sampleRouter = require('./routes/sample');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/personal_finance';
mongoose.connect(MONGO)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/transactions', transactionsRouter);
app.use('/api/bills', billsRouter);
app.use('/api/sample', sampleRouter);

app.get('/', (req, res) => res.send('Personal Finance Dashboard API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
