# Personal Finance Dashboard - Submission Report

## Project Summary
This project is a MERN-stack Personal Finance Dashboard built to visualize earnings, spending, cash flow, upcoming bills, and recent transactions. The delivered package includes a ready backend scaffold, a minimal React frontend, sample data endpoints, a detailed README, and a presentation.

## Features
- Earnings overview (line chart)
- Spending overview (pie chart)
- Cash flow card
- Upcoming bills list
- Recent transactions table
- Sidebar and topbar layout similar to the provided UI images

## Architecture
- Frontend: React (src/)
- Backend: Express + Node (backend/)
- Database: MongoDB (models/Transaction.js, models/Bill.js)

## API Endpoints (examples)
- `GET /api/sample` - returns sample overview payload used by UI
- `GET /api/transactions` - list transactions
- `POST /api/transactions` - create transaction
- `GET /api/bills` - list bills
- `POST /api/bills` - create bill

## How to Run (locally)
1. Start MongoDB (e.g. `mongod`).
2. Backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. Frontend:
   ```bash
   cd frontend
   # use create-react-app normally; here package.json is a minimal manifest
   npm install
   npm start
   ```

## Files included in the package
- backend/: server, models, routes
- frontend/: minimal React scaffold and components
- presentation.pptx: Slide deck for submission (contains three UI images)
- README.md: this file
