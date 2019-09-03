const express = require('express');
const app = express();
const fetch = require("node-fetch");
require('dotenv').config();
const port = 5000;

app.get('/customers', (req, res) => {

    const baseURl = 'http://40.143.160.131:8000/customer_transactions/';
    
    fetch(baseURl, {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          'Authorization': `Token ${process.env.TOKEN}`,
        }
    })
    .then(res => res.json())
    .then(data => {
        res.send({data});
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
})


app.listen(port, () => { console.log(`Server running on port ${port}`) });