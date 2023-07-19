import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read ⬇️

//grab the user feed when its in the home page
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//Update ⬇️

//like & unlike
router.patch("/:id/like", verifyToken, likePost);

export default router;
