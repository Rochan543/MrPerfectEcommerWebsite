const express = require("express");
const {
  sendUserMessage,
  getUserMessages,
  getAllChats,
  getChatByUserId,
  sendAdminMessage,
  deleteUserChat, // ✅ ADD
} = require("../../controllers/chat/chat-controller");

const {
  authMiddleware,
  adminMiddleware,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

/* USER */
router.post("/user/send", authMiddleware, sendUserMessage);
router.get("/user/messages", authMiddleware, getUserMessages);


/* ADMIN */
router.get("/admin/chats", authMiddleware, adminMiddleware, getAllChats);
router.get("/admin/chat/:userId", authMiddleware, adminMiddleware, getChatByUserId);
router.post("/admin/send", authMiddleware, adminMiddleware, sendAdminMessage);
router.delete("/admin/chat/:userId", authMiddleware, adminMiddleware, deleteUserChat);

module.exports = router;
