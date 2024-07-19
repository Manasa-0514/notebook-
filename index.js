
const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/item')
const cors = require('cors')

const app = express()
app.use(express.json())

connectDB()

app.get('/', async (req,res) => {
    const response = itemModel.find()
    return res.json({items : response})
})

app.listen(3000, () =>{
    console.log("app is running")
})