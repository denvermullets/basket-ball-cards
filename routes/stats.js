import express from "express"

function getStatsRoutes() {
  const router = express.Router()
  router.get("/all", getStats)

  router.post("/stats", postStats)
  return router
}

async function getStats(req, res) {
  console.log("hi buddy")
}

async function postStats(req, res) {
  try {
    res.status(201).json({ message: "success" })
  } catch (err) {
    res.status(400).json({ message: err.message })
    console.error(err.message)
  }
}

export { getStatsRoutes }
