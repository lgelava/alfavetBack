const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();
const addNewPost = require("./routes");
const getAllPosts = require("./routes");
app.use("/", getAllPosts);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
