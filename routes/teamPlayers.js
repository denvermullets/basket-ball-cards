import express from 'express'
import pool from '../db'

function getTeamPlayersRoutes() {
  const router = express.Router()

  router.get('/', getTeamPlayers)
  router.post('/', postTeamPlayers)
  // router.get('/:id', getTeam)

  return router
}

async function getTeamPlayers(req, res) {
  try {
    const allTeams = await pool.query('SELECT * FROM team_players')
    res.json(allTeams.rows)
    console.log('SELECT * FROM team_players')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// async function getTeam(req, res) {
//   const { id } = req.params
//   try {
//     const team = await pool.query('SELECT * FROM teams WHERE team_id = $1', [
//       id,
//     ])
//     console.log(`SELECT * FROM teams WHERE team_id = $1, [${id}]`)
//     res.json(team.rows[0])
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// }

async function postTeamPlayers(req, res) {
  const { player_id, team_id } = req.body
  try {
    const newTeamPlayer = await pool.query(
      'INSERT INTO team_players (player_id, team_id) VALUES ($1, $2) RETURNING *',
      [player_id, team_id]
    )
    console.log(
      'INSERT INTO team_players (player_id, team_id) VALUES ($1, $2) RETURNING *'
    )
    res.status(201).json(newTeamPlayer.rows[0])
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export { getTeamPlayersRoutes }
