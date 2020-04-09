const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./books');

const app = express ();
const port = 8732;

app.use('/api/books',booksRouter);





app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Listerning at port ${port}`);
});