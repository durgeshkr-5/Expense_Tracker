const mongoose = require("mongoose")


const transactionSchema = mongoose.Schema({
    amount : {type : Number,required:true},
    type : {type : String,required:true},
    category : {type : String,required:true},
    Description : {type : String,},
})

const Transaction = mongoose.model("Transaction",transactionSchema);

module.exports = Transaction;