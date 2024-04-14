import { useState } from 'react';
import { useTeacherData } from './useTeacherData';

function useSubjectOnClick(onCLick) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selected, setSelected] = useState(false);
  const isTeacher = useTeacherData().isTeacher;

  const handleSubjectClick = (subject) => {
    if (isTeacher) {
      setSelectedSubject(subject);
      setSelected(subject === selectedSubject);
      if (onCLick) {
        onCLick(subject);
      }
    }
  };

  return { selectedSubject, selected, handleSubjectClick };
}

export default useSubjectOnClick;
