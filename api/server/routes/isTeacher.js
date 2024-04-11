const express = require('express');
const isTeacher = require('../../models/TeacherMode.js');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json(await isTeacher.isTeacherMode());
});

module.exports = router;
