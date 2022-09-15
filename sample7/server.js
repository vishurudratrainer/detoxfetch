const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/hello", (req, res) =>{ console.log('here'); return res.json({ success: true })});
app.get("/users", (req, res) =>
  res.json([
    { userId: 1, username: "raju" },
    { userId: 2, username: "John" }
  ])
);
app.listen(3000, () => {
  console.log("started");
});
