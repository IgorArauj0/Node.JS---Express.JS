const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
require("dotenv").config()


app.get("/", (req, res) => {
    res.send("Hello, Igor!")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

app.get("/home", (req, res) => {
    res.send("Home Page")
})


app.listen(3000, () => {
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