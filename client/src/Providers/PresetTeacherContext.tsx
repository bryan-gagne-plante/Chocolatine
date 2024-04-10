import React, { createContext, useState, FC } from 'react';
import type { TPreset } from 'librechat-data-provider';

type PresetTeacherContextType = {
    selectedPreset: TPreset | undefined;
    setSelectedPreset: (value: TPreset) => void;
}

export const PresetTeacherContext = createContext<PresetTeacherContextType | undefined>(undefined);

export const PresetTeacherProvider : FC<{children: React.ReactNode}> = ({ children }) => {
  const [selectedPreset, setSelectedPreset] = useState<TPreset | undefined>();
  return (
    <PresetTeacherContext.Provider value={{ selectedPreset, setSelectedPreset }}>
      {children}
    </PresetTeacherContext.Provider>
  );
};