// index.js
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/users", require("./routes/userRoute"));

app.listen(port, () => 
    console.log(`Server running on http://localhost:${port}`)
    );