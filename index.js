const express=require("express")
const mongoose=require("mongoose");
const app = express();
const BookModel=require('./book_data');
app.use(express.json());

const port=8000;

mongoose.connect("mongodb://localhost:27017/books");

app.post('/books/add',(req,res)=>{
    const book=new BookModel(req.body);
    book.save();
    res.send(book);
})

app.get("/books/get",async(req,res)=>{
    const book= await BookModel.find();
    res.send(book);
})

app.get("/books/get/:id",async(req,res)=>{
    const id=req.params.id;
    const book= await BookModel.findById(id);
    res.send(book);
})
app.put("/books/update/:id",async(req,res)=>{
    const id=req.params.id;
    const book= await BookModel.findByIdAndUpdate(id,req.body);
    res.send("Updated Successfully");
})

app.delete("/books/delete/:idd",async(req,res)=>{
    const idd=req.params.idd;
    const book= await BookModel.findByIdAndDelete(idd);
    console.log("deleted");
    res.send("Deleted Successfully");
})


app.listen(port, () => {
    console.log("Server Started");
});


