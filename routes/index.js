import express from "express"
import { getStatsRoutes } from "./stats"

function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router()

  router.use("/stats", getStatsRoutes())
  // any additional routes would go here
  return router
}

export { getRoutes }
