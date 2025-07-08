CREATE TABLE IF NOT EXISTS menu_item (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price NUMERIC,
  image VARCHAR(255),
  calorie INTEGER,
  category VARCHAR(255),
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  is_best_sale BOOLEAN
);
