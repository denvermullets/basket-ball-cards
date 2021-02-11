// require("dotenv").config()
import "dotenv/config"

const express = require("express")
const cors = require("cors")
const app = express()

import { getRoutes } from "./routes/index"

// app.use(cors()) // should need
app.use(express.json())
app.use("/", getRoutes())

app.listen(5000, () => {
  console.log("Server Started")
})
