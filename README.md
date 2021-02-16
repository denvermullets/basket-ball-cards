### Basket-ball.cards

Just a simple basketball card game.

- Create a .env file with your server information

  - `DB_USER=user`
  - `DB_PASSWORD=pw`
  - `DB_NAME=dbname`
  - `DB_URL=localhost`

- Start server

  - `npm run bball`

- Current routes are:
  - /api/v1
    - /players
      - (GET, POST, DELETE)
      - /players/:id
    - /teams
      - (GET, POST)
      - /teams/:id
    - /team_players
      - (GET, POST)
