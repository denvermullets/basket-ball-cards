import express from 'express'
import pool from '../db'

function getStatsRoutes() {
  const router = express.Router()
  router.get('/stats', getStats)

  router.post('/stats', postStats)
  return router
}

async function getStats(req, res) {
  try {
    const allStats = await pool.query('SELECT * FROM stats')
    res.json(allStats.rows)
    console.log('SELECT * FROM stats')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function postStats(req, res) {
  try {
    const { name, points } = req.body
    const newStat = await pool.query(
      'INSERT INTO stats (name, points) VALUES ($1, $2) RETURNING *',
      [name, points]
    )
    console.log(
      `INSERT INTO stats (name, points) VALUES ($1, $2) RETURNING *, [${name}, ${points}]`
    )
    res.status(201).json(newStat.rows[0])
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export { getStatsRoutes }
