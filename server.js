require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")

import { getRoutes } from "./routes"

// app.use(cors()) // should need
app.use(express.json())
app.use("/", getRoutes())

// ROUTES

app.listen(5000, () => {
  console.log("Server Started")
})
