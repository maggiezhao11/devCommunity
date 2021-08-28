DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
  content TEXT NOT NULL

);