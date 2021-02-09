CREATE DATABASE bball_cards;

-- \c into bball_cards database
-- \d to display tables
-- \d ${tablename} to view structure

CREATE TABLE stats(
  stat_id SERIAL PRIMARY KEY,
  name TEXT,
  points INTEGER
);