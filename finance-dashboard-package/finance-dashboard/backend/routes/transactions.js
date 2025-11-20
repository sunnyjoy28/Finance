const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
  const data = await Transaction.find().sort({ date: -1 });
  res.json(data);
});

router.post('/', async (req, res) => {
  const t = new Transaction(req.body);
  await t.save();
  res.json(t);
});

module.exports = router;
