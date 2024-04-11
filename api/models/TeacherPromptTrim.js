const { getTeacherPrompt } = require('./TeacherMode');

function TeacherPromptTrim(messages) {
  return messages.map(message => {
    if (message.sender === 'User') {
      message.text = message.text.replace(getTeacherPrompt(), '');
    }
    return message;
  });
}
exports.TeacherPromptTrim = TeacherPromptTrim;
