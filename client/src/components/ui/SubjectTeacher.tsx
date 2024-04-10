import type { FC } from 'react';
import { cn } from '~/utils';
import { useContext } from 'react';
import { PresetTeacherContext } from '~/Providers/PresetTeacherContext';
import { getPresetTitle } from '../../utils/presets';

function SubjectTeacher(){
  const context = useContext(PresetTeacherContext);

  if(!context)
  {
    throw new Error('usePresetTeacher must be used within a PresetTeacherProvider');
  }
  const { selectedPreset } = context;
  const title = selectedPreset ? getPresetTitle(selectedPreset) : '';
  return (
    <div className={cn(
      'mt-2 max-h-[52vh] min-w-full overflow-hidden overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white lg:max-h-[52vh]')}>
      <h1>Preset selectionne:</h1>
      <div className={cn('truncate')}>
        {title}
      </div>
    </div>
  );
}

export default SubjectTeacher;