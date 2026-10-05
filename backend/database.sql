-- Inventory database for Lab 03 (SQLite / standard SQL)

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  name      TEXT    NOT NULL,
  category  TEXT    NOT NULL,
  price     INTEGER NOT NULL,
  stock     INTEGER NOT NULL DEFAULT 0
);

INSERT INTO products (name, category, price, stock) VALUES
  ('Notebook A4',     'Stationery',  150,  120),
  ('Ball Pen (Blue)', 'Stationery',  30,   8),
  ('School Bag',      'Bags',        1800, 25),
  ('Water Bottle',    'Accessories', 450,  5),
  ('Calculator',      'Electronics', 900,  40);

-- Example queries
-- SELECT * FROM products;
-- SELECT * FROM products WHERE stock < 10;
-- SELECT category, SUM(stock) AS total FROM products GROUP BY category;
