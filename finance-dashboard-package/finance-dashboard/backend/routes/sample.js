// simple sample data endpoint
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const payload = {
    earningsOverview: {
      current: 20520.32,
      change: 1.5,
      monthly: [
        { month: 'Jan', amount: 5000 },
        { month: 'Feb', amount: 7000 },
        { month: 'Mar', amount: 6500 },
        { month: 'Apr', amount: 8689.2 },
        { month: 'May', amount: 5200 },
        { month: 'Jun', amount: 6000 }
      ]
    },
    spendingOverview: {
      total: 20520.32,
      categories: [
        { name: 'House Rent', amount: 2000 },
        { name: 'Foods', amount: 1500 },
        { name: 'Others', amount: 800 }
      ]
    }
  };
  res.json(payload);
});

module.exports = router;
