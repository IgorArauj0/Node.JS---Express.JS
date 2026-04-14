const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
require("dotenv").config()

const bookSchema = mongoose.Schema({    })
BookModel = mongoose.model("Book", bookSchema)


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

app.post("/books", async(req, res) => {
    const newBook = await BookModel.create(req.body)
    res.status(201).json(newBook)
})

const connectionString = process.env.CONNECTION_STRING


mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })