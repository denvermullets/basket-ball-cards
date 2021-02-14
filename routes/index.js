import express from 'express'
import { getPlayersRoutes } from './players'
import { getTeamsRoutes } from './teams'
import { getTeamPlayersRoutes } from './teamPlayers'

function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router()

  // any additional routes would go here
  router.use('/players', getPlayersRoutes())
  router.use('/teams', getTeamsRoutes())
  router.use('/team_players', getTeamPlayersRoutes())

  return router
}

export { getRoutes }
