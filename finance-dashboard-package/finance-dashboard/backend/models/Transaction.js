const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  activity: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Success' },
  category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
