
const mongoose=require('mongoose');
const Book_schema=new mongoose.Schema({
title:{
    type:String,
    required:true
},

author:{
    type:String,
    required:true
},  
publishedYear:{
    type:Number,
    required:true
}, 
genre:{
    type:String,
    required:true
},
available:{
    type:Boolean,
    required:true
}

});

const Book = mongoose.model('Books',Book_schema);

module.exports=Book;