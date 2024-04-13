const teacher = {

  teacherPromptEnable: process.env.TEACHER_PROMPT_ENABLED,
  teacherPrompt: process.env.TEACHER_PROMPT,
};

function isTeacherMode() {
  let isTeacher = false;
  if(process.env.TEACHERMODE){
    isTeacher = process.env.TEACHERMODE === 'true';
  }
  
  return isTeacher;
}

function isTeacherPromptEnable() {
  return teacher.teacherPromptEnable;
}

async function addTeacherPrompt(prompt) {
  return prompt + teacher.teacherPrompt;
}

function getTeacherPrompt() {
  return teacher.teacherPrompt;
}

module.exports = {
  isTeacherMode,
  isTeacherPromptEnable,
  addTeacherPrompt,
  getTeacherPrompt,
};
