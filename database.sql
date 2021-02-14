CREATE DATABASE bball_cards;

-- \c into bball_cards database
-- \d to display tables
-- \d tablename to view structure

CREATE TABLE players(
  player_id SERIAL PRIMARY KEY,
  player_name TEXT,
  age INTEGER,
  games_played INTEGER,
  games_started INTEGER,
  minutes_played INTEGER,
  field_goals INTEGER,
  field_goal_attempts INTEGER,
  field_goal_percent INTEGER,
  field_goal_three_made INTEGER,
  field_goal_three_attempts INTEGER,
  field_goal_three_percent INTEGER,
  field_goal_two_made INTEGER,
  field_goal_two_attempts INTEGER,
  field_goal_two_percent INTEGER,
  effective_field_goal_percent INTEGER,
  free_throw_made INTEGER,
  free_throw_attempts INTEGER,
  free_throw_percent INTEGER,
  offensive_rebound INTEGER,
  defensive_rebound INTEGER,
  total_rebound INTEGER,
  assists INTEGER,
  steals INTEGER,
  blocks INTEGER,
  turnovers INTEGER,
  personal_fouls INTEGER,
  points INTEGER
);

CREATE TABLE teams(
  team_id SERIAL PRIMARY KEY,
  team_name TEXT,
  score INTEGER
);

-- Join table for 'teams' and 'players'
CREATE TABLE team_players(
  team_player_id SERIAL PRIMARY KEY,
  player_id INTEGER,
  team_id INTEGER,
  CONSTRAINT player_id
      FOREIGN KEY(player_id)
	      REFERENCES players(player_id)
        ON DELETE CASCADE,
  CONSTRAINT team_id
      FOREIGN KEY(team_id)
	      REFERENCES teams(team_id)
        ON DELETE CASCADE
);