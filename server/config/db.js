
import mysql2 from "mysql2";

// Create the MySQL connection
const db = mysql2.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "myDBuser",
  database: "mydatabase",
  port: 8889,
});

// Connect
db.connect((err) => {
  if (err) console.error("Connection error:", err);
  else console.log("Connected to MySQL database");
});

export default db; //  ES module export
