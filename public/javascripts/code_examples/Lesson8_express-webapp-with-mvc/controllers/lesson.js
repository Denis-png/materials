const Lesson = require("../models/lesson");

exports.getIndex = (req, res) => {
  res.render("index", {
    path: "/",
    lessons: Lesson.selectAll(),
  });
};

exports.getLesson = (req, res) => {
  res.render("lesson", {
    path: "/",
    lesson: Lesson.select(req.params.lessonId),
  });
};
