import db from "../config/db.js"; // ✅ add .js extension

export const getIphones = (req, res) => {
  const query = `
    SELECT 
      p.product_id,
      p.product_name,
      p.product_url,
      pd.product_brief_description,
      pd.product_description,
      pd.product_img,
      pd.product_link,
      pp.starting_price,
      pp.price_range
    FROM products p
    LEFT JOIN productdescription pd
      ON p.product_id = pd.product_id
    LEFT JOIN productprice pp
      ON p.product_id = pp.product_id
    WHERE LOWER(p.product_name) LIKE '%iphone%'
    ORDER BY p.product_id DESC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: true });

    const formatted = results.map((p) => ({
      product_id: p.product_id,
      product_name: p.product_name,
      product_url: p.product_url || p.product_link,
      product_img: p.product_img,
      starting_price: p.starting_price,
      price_range: p.price_range,
      product_brief_description: p.product_brief_description,
      product_description: p.product_description,
    }));

    res.json(formatted);
  });
};

export const getSingleIphone = (req, res) => {
  const pid = Number(req.params.pid);

  if (isNaN(pid)) return res.status(400).json({ error: "Invalid ID" });

  const query = `
    SELECT *
    FROM products p
    LEFT JOIN productdescription pd
      ON p.product_id = pd.product_id
    LEFT JOIN productprice pp
      ON p.product_id = pp.product_id
    WHERE p.product_id = ?
  `;

  db.query(query, [pid], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0)
      return res.status(404).json({ error: "Product not found" });

    res.json(results[0]);
  });
};
