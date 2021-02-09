require("dotenv").config()
const express = require("express")
const app = express()
const pool = require("./db")

app.use(express.json())

// ROUTES

app.listen(5000, () => {
  console.log("Server Started")
})
