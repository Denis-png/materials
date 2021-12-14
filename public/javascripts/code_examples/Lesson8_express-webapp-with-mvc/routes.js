const express = require("express");

const lessonController = require("./controllers/lesson");
const contactController = require("./controllers/contact");

const router = express.Router();

router.get("/", lessonController.getIndex);
router.get("/lesson/:lessonId", lessonController.getLesson);

router.get("/contacts", contactController.getContactPage);

module.exports = router;
