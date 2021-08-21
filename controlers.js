require("dotenv").config();
const Post = require("./schema.js");
const Product = require("./productSchema.js");
/////////constant variables

//create post
const addNewPost = async (req, res) => {
  const NewPost = new Post({
    title: req.body.title,
    text: req.body.text,
    images: req.body.images,
  });

  try {
    const savedPost = await NewPost.save();
    res.send(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

//Get all Posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

//Get SPecific post
const getSpecificPost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.postId });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

//Delete specific post
const deleteSpecificPostHandler = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.status(200).send(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

//products

const addNewProduct = async (req, res) => {
  const NewProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    images: req.body.images,
    category: req.body.category,
  });

  try {
    const savedProduct = await NewProduct.save();
    res.send(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
};

//Get SPecific post
const getSpecificProduct = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.productId });
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete specific post
const deleteSpecificProductHandler = async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.productId });
    res.status(200).send(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  addNewPost,
  getAllPosts,
  getSpecificPost,
  addNewProduct,
  getAllProducts,
  getSpecificProduct,
  deleteSpecificPostHandler,
  deleteSpecificProductHandler,
};
