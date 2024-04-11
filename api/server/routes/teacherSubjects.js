const express = require('express');
const teacherSubjects = require('../../models/TeacherMode.js');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json(await teacherSubjects.teacherSubjects());
});

module.exports = router;
