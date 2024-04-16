import axios from 'axios';

export function getIsTeacherMode() {
  return axios
    .get('/api/isTeacher')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching isTeacherMode:', error);
    });
}

export default getIsTeacherMode;
