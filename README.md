
# 💸 Expense Tracker API

A simple Node.js and Express-based REST API to track income and expense transactions. This backend provides basic CRUD functionality for managing personal financial data.

---

## 🛠️ Features

- Add income and expense transactions
- View total income, total expense, and net balance
- Retrieve all transactions
- Update or delete specific transactions

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)

### Installation

```bash
git clone https://github.com/your-username/expense-tracker-api.git
cd expense-tracker-api
npm install
````

### Running the Server

```bash
node index.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### `GET /`

Returns a financial summary.

**Response:**

```json
{
  "Expense": 250,
  "Income": 2500,
  "Net": 2250
}
```

---

### `GET /transactions`

Returns all stored transactions.

**Response:**

```json
{
  "transaction": [
    {
      "amount": 2500,
      "category": "Salary",
      "expenseType": "income",
      "desc": "July salary",
      "date": "2025-07-01"
    },
    ...
  ]
}
```

---

### `POST /transaction`

Adds a new transaction.

**Request Body:**

```json
{
  "amount": 500,
  "category": "Shopping",
  "expenseType": "expense",
  "desc": "Train ticket",
  "date": "2025-07-07"
}
```

---

### `PATCH /transaction/:index`

Updates an existing transaction by array index.

**Request Body (partial or full):**

```json
{
  "amount": 600,
  "desc": "Updated train ticket"
}
```

---

### `DELETE /transcation/:index`

Deletes a transaction by index.

**Response:**

```json
{
  "message": "Transcation deleted"
}
```

> Note: This uses `delete` and leaves a hole in the array. Consider replacing with `.splice()` for clean deletion.

---

## 🧠 Future Improvements

* Replace in-memory storage with a database (e.g., MongoDB)
* Add transaction ID instead of array index for safer updates
* Input validation using middleware (e.g., `Joi`, `express-validator`)
* Use `.splice()` instead of `delete` for array cleanup

---

## 🤝 Contributing

Feel free to open issues or submit PRs to enhance this project!

---

## 📄 License

This project is licensed under the MIT License.

```

---

Let me know if you'd like me to generate the `.gitignore`, `package.json`, or suggestions for folder structure as well!
```
