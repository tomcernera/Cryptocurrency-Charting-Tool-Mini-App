const express = require('express');
const bodyParser = require('body-parser');
const API = require('./apiHelper.js')

const app = express();
const PORT = 4517;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/stockHistoricalPrices', (req,res)=>{
  API.getHistoricalStockPrices(req,res)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});