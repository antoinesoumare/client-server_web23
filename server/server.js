import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import 'dotenv/config';

const server = express();
server.use(express.json()); // we've create a server out of express, and we're using the json parser
server.use(cors()); // we're using cors to allow cross origin resource sharing
// const port = process.env.NODEPORT

server.listen(4600, function(){
    console.log('Server is running on port 4600')
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'Teezy',
})

db.connect(function(error){
    if(error){
        console.log('Connection to SQL failed', error);
    } else {
        console.log('Successfully connected to MySQL');
    }
})

// Design APIs

// GET API
server.get('/products', (req, res) => {
    let SQLQuery = "CALL `getAllProducts`()";
    db.query(SQLQuery, (error, data) => {
        if(error){
            res.json({error_message: error});
        } else {
            res.json({products:data[0]});
        }
    })
});

// GET API with parameter
// Param is URL
server.get('/products/:id', (req,res) => {
    let SQLQuery = "CALL `getProductByID`(?)";
    db.query(SQLQuery, [req.params.id], (error, data) => {
        (error)? res.json({error_message: error}) : res.json({data:data[0]});
    })

});


// POST API
server.post('/addnewproduct', function(req, res){
    let SQLQuery = "CALL `addNewProduct`(?, ?, ?, ?, ?, ?)";
    db.query(SQLQuery, [req.body.name, req.body.description, req.body.availability, req.body.price, req.body.images, req.body.online], function(error, data){
        if(error){
            res.json({error_message: error});
        } else {
            res.json({data:data[0]});
        }
    })
});



// Update API

server.put('/updateprice/:id', function(req, res){
    let SQLQuery = "CALL `updateProduct`(?, ?, ?)";
    db.query(SQLQuery, [req.params.id, req.body.name, req.body.price], function(error, data){
        if(error){
            res.json({message: 'update failed'});
        } else {
            res.json({message: "Successfully updated product", data:data[0]});
        }
    })
});



// Update API with parameter
server.put('/updateprice/:id', (req, res) => {
    let SQLQuery = "CALL `updatePrice`(?, ?)";
    db.query(SQLQuery, [req.params.id, req.body.price], (error, data) => {
        (error)? res.json({error_message: error}) : res.json({message: "Successfully updated price by ID"});
    })
});



// Delete API

server.delete('/deleteproduct', function(req, res){
    let SQLQuery = "CALL `deleteProduct`(?)";
    db.query(SQLQuery, [req.body.id], function(error, data){
        if(error){
            res.json({error_message: error});
        } else {
            res.json({message: "Successfully deleted product"});
        }
        
    })
})

// Delete API with parameter

server.delete('/deleteproduct/:id', (req, res) => {
    let SQLQuery = "CALL `deleteProduct`(?)";
    db.query(SQLQuery, [req.params.id], (error, data) => {
        (error)? res.json({error_message: error}) : res.json({message: "Successfully deleted product by ID"});
    })
});

// Login API

server.post('/validateuser', (req, res) => {
    let SQLQuery = "CALL `validateUser`(?, ?)";
    db.query(SQLQuery, [req.body.email, req.body.password], (error, data) => {
        if(error){
            res.json({ error_message: error});
        }
        else{
           if(data[0].length > 0){
            res.json(true);
           }
           else{
            res.json(false);
           }
        }
    })
})

// Online Status API

server.put('/setstatus/:id', (req, res) => {
    let SQLQuery = "CALL `setLiveStatus`(?, ?)";
    db.query(SQLQuery, [req.params.id, req.body.status],(error,data) => {
        if(error){
            res.json(error)
        }
        else{
            res.json(req.body.status)
        }
    })
})

