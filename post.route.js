const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const isAuthenticated = require("../middleware/authMiddleware");

router.post("/create", isAuthenticated, postController.createPost);
router.get("/getAll", postController.getAllPosts);
router.get("/:id", isAuthenticated,postController.getPostById);
router.put("/:id",isAuthenticated, postController.updatePost);
router.delete("/:id",isAuthenticated, postController.deletePost);

module.exports = router;
