import express from 'express'
import { getStatsRoutes } from './stats'
import { getPlayersRoutes } from './players'

function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router()

  // any additional routes would go here
  router.use('/v1', getPlayersRoutes())
  // router.use('/', getStatsRoutes())
  return router
}

export { getRoutes }
