const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const booksRouter = express.Router();
booksRouter.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/nodeProjectDB',(err)=>{
    if(err) throw err;
    console.log('Connected to Mongo DB using mongoose ... !!!');
});

let booksSchema = mongoose.Schema({
    book_Title: String,
    book_Author: String,
    book_Quantity:Number
});

let booksModel = mongoose.model('booksCollection',booksSchema);



async function getBook(){
const result =await booksModel.find();
console.log(result);}


getBook();



 booksRouter.post('/',(req,res,next)=>{
    let book = new booksModel({
        book_Title:req.body.title,
        book_Author:req.body.author,
        book_Quantity:req.body.quantity
    });
    book.save((err)=>{
        if (err)    throw err;
        console.log('Given book is save using post method in Database...!!!');
    });
    res.json({bookadded:book});
    next();
});

booksRouter.get('/',(req,res,next)=>{
     res.send(getBook());
    next();
}); 


module.exports=booksRouter;