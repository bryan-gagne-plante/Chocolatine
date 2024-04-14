import { useState, useEffect } from 'react';
import { getIsTeacherMode } from '~/routes/getIsTeacherMode';

export function useTeacherData() {
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    getIsTeacherMode().then((data) => setIsTeacher(data));
  }, []);
  return { isTeacher };
}
