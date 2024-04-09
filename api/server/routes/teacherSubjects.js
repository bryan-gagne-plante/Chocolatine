const express = require('express');
const teacherSubjects = require('../../models/TeacherMode.js');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json(await teacherSubjects.teacherSubjects());
  console.log('teacherSubjects:', await teacherSubjects.teacherSubjects());
});

module.exports = router;
