const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@cluster0.2ktvk.mongodb.net/alpha?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  images: Array,
});

module.exports = mongoose.model("Post", PostSchema);
