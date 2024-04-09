import { useState, useEffect } from 'react';
import { getIsTeacherMode } from '~/routes/getIsTeacherMode';
import { getTeacherSubjects } from '~/routes/getTeacherSubjects';

export function useTeacherData() {
  const [isTeacher, setIsTeacher] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    getIsTeacherMode().then((data) => setIsTeacher(data));
    getTeacherSubjects().then((data) => setSubjects(data));
  }, []);
  return { isTeacher, subjects };
}
