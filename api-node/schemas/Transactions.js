
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    valor: {
        type: 'Number',
        required: true
    },
    referencia: {
        type: 'String',
        required: true
    },
    data: {
        type: 'String',
        required: true
    }
})

const Transaction = mongoose.model("Transaction", transactionSchema)

module.exports = {Transaction}