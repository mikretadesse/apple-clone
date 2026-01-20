export const createProducts = `
  CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT,
    product_url VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (product_id)
  )
`;

export const createProductDescription = `
  CREATE TABLE IF NOT EXISTS ProductDescription (
    description_id INT AUTO_INCREMENT,
    product_id INT NOT NULL,
    product_brief_description VARCHAR(255),
    product_description TEXT,
    product_img VARCHAR(255),
    product_link VARCHAR(255),
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )
`;

export const createProductPrice = `
  CREATE TABLE IF NOT EXISTS ProductPrice (
    price_id INT AUTO_INCREMENT,
    product_id INT NOT NULL,
    starting_price VARCHAR(255),
    price_range VARCHAR(255),
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )
`;

export const createUsers = `
  CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_password VARCHAR(255),
    PRIMARY KEY (user_id)
  )
`;

export const createOrders = `
  CREATE TABLE IF NOT EXISTS Orders (
    order_id INT AUTO_INCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
  )
`;
