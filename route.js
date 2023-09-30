const express = require('express');
const router = express.Router();
const pool = require('./queries.js')

//Query menampilkan seluruh list film
router.get('/film', (req, res)=>{
    pool.query('SELECT * FROM film' , (err, result)=>{
        if (err) {
            throw err
        }
        res.send(result.rows) 
    });
});

//Query menampilkan data film tertentu berdasarkan id
router.get('/film/id/:id', (req, res)=>{
    const id = req.params.id;
    pool.query('SELECT * FROM film WHERE film_id = $1' , [id], (e, result)=>{
        if(e){
            throw e
        }
        res.send(result.rows)
    })
});

//Query menampilkan data list category
router.get('/category', (req, res)=>{
    pool.query('SELECT * FROM category' ,(e, result)=>{
        if(e){
            throw e
        }
        res.send(result.rows)
    })
});

//Query menampilkan list film tertentu berdasarkan category
router.get('/film/category/:categoryid', (req, res) => {
    const categoryid = req.params.categoryid;
    pool.query(
        'SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1',
        [categoryid],
        (err, result) => {
          if (err) {
            console.error( err);
          }
          res.send(result.rows);
            
        }
    );
});


module.exports = router;