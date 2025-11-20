import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Running without MongoDB");
});

app.get('/api/sample', (req, res) => {
  res.json({
    earnings: 20520.32,
    spending: 20520.32,
    bills: [
      { name: "Netflix", amount: 15.99, status: "Scheduled" }
    ],
    transactions: [
      { activity: "Mobile Purchase", amount: 25500, status: "Success" }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
