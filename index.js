const express = require('express');
const app = express();
const pool = require('./queries.js')
const router = require ('./route.js')

app.get('/', (req, res)=>{
    pool.query('SELECT * FROM actor' , (err, result)=>{
        if (err) {
            throw err
        }
        res.send(result.rows) 
    });
});

app.use(router)


pool.connect((e, res) => { 
    console.log(e)
    console.log('connected')
});

app.listen(3000);