const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const {Transaction}  = require('./schemas/Transactions')
const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    
    const resp = await Transaction.find();
    res.json(resp)
})

app.post('/cadastro', async (req,res) => {
    try {
        const response = {
            "data" : req.body.date,
            "referencia": req.body.reference,
            "valor": req.body.value
        }
        await Transaction.create(response)
        res.status(200).json(true);
    }catch (err) {
        console.log(err)
		res.status(500).json({ message: err });

	}

})

app.get('/transactions', (req, res) => {

    
    const arrTransactions = [
        {
            amount: 2500,
            reference: 'Transacao 1',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 12500,
            reference: 'Curso de programacao pro renato66',
            date: new Date(),
            currency: 'BRL'
        },
        {
            amount: 3500,
            reference: 'Mercado caro',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 7500,
            reference: 'Adaptador usb c hdmi que nao funciona',
            date: new Date(),
            currency: 'EUR'
        },
        {
            amount: 9500,
            reference: 'Transacao 1',
            date: new Date(),
            currency: 'EUR'
        },
        {
            amount: 2500,
            reference: 'AIRBNB GmbH',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 600,
            reference: 'Senai',
            date: new Date(),
            currency: 'USD'
        }
    ]

    res.json(arrTransactions)
})

const port = 3000

const serverInit = async () => {
    await mongoose.connect("mongodb+srv://gabriellefialkoski:Gabrielle123@cluster0.tbwxpsl.mongodb.net/?retryWrites=true&w=majority")

    app.listen(port, async () => {
        console.log("Tarodando")
    })
}

serverInit()