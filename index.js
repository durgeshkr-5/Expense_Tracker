const express = require("express");
const transactionRouter = require("./routes/transaction.routes");


const app = express();
const port = 8000;

//middlewares
app.use(express.json())


const data = [];

// routes
app.get("/test",(req,res) => {
    res.status(200).json({msg:"This is test Route"});
})

//transaction routes
app.use("/api/transactions",transactionRouter)


app.listen(port,() => {
    console.log(`Server is running at port : ${port}`);
})