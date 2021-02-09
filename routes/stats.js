import express from "express"

function getStatsRoutes() {
  const router = express.Router()
  // router.get('/stats', stats)
  router.post("/stats", postStats)
  return router
}

async function stats(req, res) {}

async function postStats(req, res) {
  try {
    console.log("hi")
  } catch (err) {
    console.log("bye")
  }
}
