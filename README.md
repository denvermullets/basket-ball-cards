### Basket-ball.cards

Just a simple basketball card game. This is the NodeJs api for the game. It uses an AWS S3 bucket to store the images. Pre-signed image url will be added to JSON output from the players GET request.

Eventually we'll keep a scoreboard of all the teams played so we can laugh at some of the random makeup of teams.

![basketball-cards](https://i.imgur.com/DsgiJkq.gif)

- Create a .env file with your server information

  - `DB_USER=user`
  - `DB_PASSWORD=pw`
  - `DB_NAME=dbname`
  - `DB_URL=localhost`
  - `AWS_ACCESS_KEY_ID=yourKey`
  - `AWS_SECRET_KEY_ID=yourSecret`

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
