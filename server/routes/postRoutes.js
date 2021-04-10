const express = require("express");
const {
  getPosts,
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
