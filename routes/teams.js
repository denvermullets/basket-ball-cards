import express from 'express'
import pool from '../db'

function getTeamsRoutes() {
  const router = express.Router()

  router.get('/', getTeams)
  router.post('/', postTeam)
  router.get('/:id', getTeam)

  return router
}

async function getTeams(req, res) {
  try {
    const allTeams = await pool.query('SELECT * FROM teams')
    res.json(allTeams.rows)
    console.log('SELECT * FROM teams')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getTeam(req, res) {
  const { id } = req.params
  try {
    const team = await pool.query('SELECT * FROM teams WHERE team_id = $1', [
      id,
    ])
    console.log(`SELECT * FROM teams WHERE team_id = $1, [${id}]`)
    res.json(team.rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function postTeam(req, res) {
  const { team_name, score } = req.body
  try {
    const newTeam = await pool.query(
      'INSERT INTO teams (team_name, score) VALUES ($1, $2) RETURNING *',
      [team_name, score]
    )
    console.log(
      'INSERT INTO teams (team_name, score) VALUES ($1, $2) RETURNING *'
    )
    res.status(201).json(newTeam.rows[0])
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export { getTeamsRoutes }
