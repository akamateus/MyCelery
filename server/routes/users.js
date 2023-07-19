import express from "express";
import { getUser } from "../controllers/user.js";
import { getUserFriends } from "../controllers/user.js";
import { addRemoveFriend } from "../controllers/user.js";
//⬆️can't import together in the same {}
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read ⬇️
router.get("/:id", verifyToken, getUser);
router.get("/:idd/friends", verifyToken, getUserFriends);

// Update ⬇️
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;

// import {
//   getUser,
//   getUserFriends,
//   addRemoveFriend,
// } from "../controllers/users.js";
