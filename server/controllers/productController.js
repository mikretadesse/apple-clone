import db from "../config/db.js"; // ✅ include .js

export const addProduct = (req, res) => {
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    user_name,
    user_password,
  } = req.body;

  // Insert Product
  db.query(
    "INSERT INTO Products (product_url, product_name) VALUES (?, ?)",
    [product_url, product_name],
    (err, result) => {
      if (err)
        return res.status(500).json({ success: false, message: err.message });

      const productId = result.insertId;

      // Insert Description
      db.query(
        "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)",
        [
          productId,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        (err) => {
          if (err)
            return res
              .status(500)
              .json({ success: false, message: err.message });

          // Insert Price
          db.query(
            "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)",
            [productId, starting_price, price_range],
            (err) => {
              if (err)
                return res
                  .status(500)
                  .json({ success: false, message: err.message });

              // Insert User
              db.query(
                "INSERT INTO Users (user_name, user_password) VALUES (?, ?)",
                [user_name, user_password],
                (err, userResult) => {
                  if (err)
                    return res
                      .status(500)
                      .json({ success: false, message: err.message });

                  const userId = userResult.insertId;

                  // Insert Order
                  db.query(
                    "INSERT INTO Orders (product_id, user_id) VALUES (?, ?)",
                    [productId, userId],
                    (err) => {
                      if (err)
                        return res
                          .status(500)
                          .json({ success: false, message: err.message });

                      // All done
                      res.json({ success: true, productId, userId });
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
};
