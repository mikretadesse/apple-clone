import db from "../config/db.js"; //  add .js extension
import {
  createProducts,
  createProductDescription,
  createProductPrice,
  createUsers,
  createOrders,
} from "../config/tables.js"; //  add .js extension

export const installTables = (req, res) => {
  db.query(createProducts, (err) => {
    if (err) return res.status(500).send("Failed to create Products table.");

    db.query(createProductDescription, (err) => {
      if (err)
        return res
          .status(500)
          .send("Failed to create ProductDescription table.");

      db.query(createProductPrice, (err) => {
        if (err)
          return res.status(500).send("Failed to create ProductPrice table.");

        db.query(createUsers, (err) => {
          if (err) return res.status(500).send("Failed to create Users table.");

          db.query(createOrders, (err) => {
            if (err)
              return res.status(500).send("Failed to create Orders table.");

            res.send("All tables created successfully!");
          });
        });
      });
    });
  });
};
