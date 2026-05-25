const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
require("dotenv").config()


app.use(express.json())


const bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    }
})
BookModel = mongoose.model("Book", bookSchema)

app.post("/books", async (req, res) => {
    try {
        const newBook = await BookModel.create(req.body)
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


app.get("/books/:id", async (req, res) => {

    try {
        const bookList = await BookModel.find()
        res.status(200).send(bookList)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteBook = await BookModel.findByIdAndDelete(id)

if (!deleteBook) {
    return res.status(404).json({ message: "Book not found" })
}   

        res.status(200).json({message: "Book Deleted Sucessfully"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})




app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        await BookModel.findByIdAndDelete(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


const connectionString = process.env.CONNECTION_STRING


mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error)
    })