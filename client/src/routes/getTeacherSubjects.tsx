import axios from 'axios';

export function getTeacherSubjects() {
  return axios
    .get('http://localhost:3080/api/teacherSubjects')
    .then((response) => {
      return response.data.split(',').map((subject) => subject.trim());
    })
    .catch((error) => {
      console.error('Error fetching teacherSubjects:', error);
    });
}

export default getTeacherSubjects;
