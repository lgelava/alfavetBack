const express = require("express");
const route = express.Router();
const {
  getAllPosts,
  getSpecificPost,
  addNewPost,
  getAllProducts,
  getSpecificProduct,
  addNewProduct,
  deleteSpecificPostHandler,
  deleteSpecificProductHandler,
} = require("./controlers.js");

route.post("/addNewPost", addNewPost);
route.get("/getAllPosts", getAllPosts);
route.get("/getSpecificPost/:postId", getSpecificPost);
route.delete("/deletePost/:postId", deleteSpecificPostHandler);
//update specific todo title
route.put("/editPost/:postId", async (req, res) => {
  try {
    const updatePostEdited = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      { title: req.body.title },
      { text: req.body.text },
      { images: req.body.images }
    );
    res.json(updatePostEdited);
  } catch (err) {
    res.json({ message: err });
  }
});

route.post("/addNewProduct", addNewProduct);
route.get("/getAllProducts", getAllProducts);
route.get("/getSpecificProduct/:productId", getSpecificProduct);
route.delete("/deleteProduct/:productId", deleteSpecificProductHandler);

//

module.exports = route;
