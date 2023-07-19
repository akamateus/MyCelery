import express from "express";
import {
  getUser,
  getUserFriends,
  AddRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read ⬇️
router.get("/:id", verifyToken, getUser);
router.get("/:idd/friends", verifyToken, getUserFriends);

// Update ⬇️
router.patch("/:id/:friendId", verifyToken, AddRemoveFriend);

export default router;
