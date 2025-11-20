const mongoose = require('mongoose');
const billSchema = new mongoose.Schema({
  name: String,
  dueDate: Date,
  amount: Number,
  status: { type: String, enum: ['Scheduled','Paid','Overdue'], default: 'Scheduled' }
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);
