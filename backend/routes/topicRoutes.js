const express = require("express");
const TopicController = require("../controllers/topicController");
const router = express.Router();

router.get("/", TopicController.getAll);
router.post("/create", TopicController.create);
router.get("/:id", TopicController.create);
router.put("/:id", TopicController.update);
router.patch("/topics/:id/blocks/:blockId", TopicController.updateBlock);

module.exports = router;
