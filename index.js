const express = require("express");
const app = express();
const port = 3000;

// Middleware to log requests
app.use(express.json());

const transaction = [];

// Getting all Transcation 

app.get("/", (req, res) => {
  let totalExpense = 0;
  let totalIncome = 0;

  // looping throught the transaction array and checking its type 
  for (const tx of transaction) {
    if (!tx || typeof tx !== "object") continue; // prevent undefined errors

    if (tx.expenseType.toLowerCase() === "expense") {
      totalExpense += tx.amount;
    } else if (tx.expenseType.toLowerCase() === "income") {
      totalIncome += tx.amount;
    }
  }

  // sending the response 
  res.json({
    Expense: totalExpense,
    Income: totalIncome,
    Net: totalIncome - totalExpense
  });
});


// Showing all responses 
app.get("/transactions", (req, res) => {
  // Showing all the transactions
  res.json({
    transaction: transaction,
  });
});

// Adding new transactions data 

app.post("/transaction", (req, res) => {
  // Adding new transcation
  transaction.push(req.body);
  res.json({
    transaction: transaction,
  });
});

// Updating the exising transaction

app.patch("/transaction/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= transaction.length || !transaction[index]) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  const { amount, category, expenseType, desc, date } = req.body;

  if (amount !== undefined) transaction[index].amount = amount;
  if (category !== undefined) transaction[index].category = category;
  if (expenseType !== undefined) transaction[index].expenseType = expenseType;
  if (desc !== undefined) transaction[index].desc = desc;
  if (date !== undefined) transaction[index].date = date;

  res.json({
    message: "Transaction updated",
    transaction: transaction[index],
  });
});

// Deleting the Transcation
app.delete("/transcation/:index", (req, res) => {
  const index = req.params.index;
  delete transaction[index];
  res.json({
    message: "Transcation deleted",
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
