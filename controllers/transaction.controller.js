const fs = require("fs");

// Add Transaction


let filePath = "../db.json"

const addTransaction = async(req,res) => {
    try {
        // Extract data
        const {amount, type, category, description} = req.body;
        // validate data
        if(!amount || !type || !category){
            return res.status(400).json({message:"Amount, type and category are required fields"})
        }
        //  add data into db
        

        return res.status(200).json({message:"Added New Transaction"})
    } catch (error) {
      return res.status(500).json({message: "Internal Server Error"})  
    }
}

// View Transactions
const viewTransaction = async(req,res) => {
    try {
        // 
        return res.status(200).json({message:"View Transaction"})
    } catch (error) {
      return res.status(500).json({message: "Internal Server Error"})  
    }
}


//Update Transaction
const editTransaction = async(req,res) => {
    try {
        return res.status(200).json({message:"Edit Transaction"})
    } catch (error) {
      return res.status(500).json({message: "Internal Server Error"})  
    }
}



// Delete Transaction
const deleteTransaction = async(req,res) => {
    try {
        return res.status(200).json({message:"Delete Transaction"})
    } catch (error) {
      return res.status(500).json({message: "Internal Server Error"})  
    }
}



module.exports = {addTransaction, viewTransaction, editTransaction,deleteTransaction}