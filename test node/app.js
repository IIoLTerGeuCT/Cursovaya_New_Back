const express = require("express") // подключаем express
const bodyParser = require('body-parser')
const cors = require('cors');
const autRouter = require('./routers/autRoutes');
const priceListRouter = require('./routers/priceListRouter');


const app = express()

app.use(bodyParser.json())
app.use(cors())
module.exports = app



app.use('/api', autRouter )
app.use('/api', priceListRouter)