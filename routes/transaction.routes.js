const express = require("express");
const {addTransaction, viewTransaction, editTransaction,deleteTransaction} = require("../controllers/transaction.controller")

const transactionRouter = express.Router()

//
transactionRouter.post("/add",addTransaction);
transactionRouter.get("/view",viewTransaction);
transactionRouter.put("/edit",editTransaction);
transactionRouter.delete("/delete/:id",deleteTransaction);


module.exports = transactionRouter;