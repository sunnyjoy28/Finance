const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');

router.get('/', async (req, res) => {
  const data = await Bill.find().sort({ dueDate: 1 });
  res.json(data);
});

router.post('/', async (req, res) => {
  const b = new Bill(req.body);
  await b.save();
  res.json(b);
});

module.exports = router;
