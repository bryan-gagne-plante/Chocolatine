const teacher = {
  teacherMode: process.env.TEACHERMODE,
  teacherPromptEnable: process.env.TEACHER_PROMPT_ENABLED,
  teacherPrompt: process.env.TEACHER_PROMPT,
  teacherSubjects: process.env.teacherSubjects,
};

function isTeacherMode() {
  return teacher.teacherMode;
}

function isTeacherPromptEnable() {
  return teacher.teacherPromptEnable;
}

async function addTeacherPrompt(prompt) {
  return prompt + teacher.teacherPrompt;
}

<<<<<<< Updated upstream
async function teacherSubjects() {
  return teacher.teacherSubjects;
=======
function getTeacherPrompt() {
  return teacher.teacherPrompt;
>>>>>>> Stashed changes
}

module.exports = {
  isTeacherMode,
  isTeacherPromptEnable,
  addTeacherPrompt,
<<<<<<< Updated upstream
  teacherSubjects,
=======
  getTeacherPrompt,
>>>>>>> Stashed changes
};
