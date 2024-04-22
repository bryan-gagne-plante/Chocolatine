import type { FC } from 'react';
import { BookCopy } from 'lucide-react';
import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import { EditPresetDialog, PresetItems } from './Presets';
import { useLocalize, usePresets, useUserRole } from '~/hooks';
import { useChatContext } from '~/Providers';
import { cn } from '~/utils';
import { get } from 'http';
import getIsTeacherMode from '~/routes/getIsTeacherMode';
import { useTeacherData } from '~/hooks/useTeacherData';
import PresetItemsTeacher from './Teacher/PresetItemsTeacher';

const PresetsTeacherMenu: FC = () => {
  const localize = useLocalize();
  const {
    presetsQuery,
    onSelectPreset,
    submitPreset,
    exportPreset,
  } = usePresets();
  const { preset } = useChatContext();

  const presets = presetsQuery.data || [];
  return (
    <Root>
      <Trigger asChild>
        <button
          className={cn(
            'pointer-cursor relative flex flex-col rounded-md border border-gray-100 bg-white text-left focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-700 dark:bg-gray-800 sm:text-sm',
            'hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700',
            'z-50 flex h-[40px] min-w-4 flex-none items-center justify-center px-3 focus:ring-0 focus:ring-offset-0',
          )}
          id="presets-button"
          data-testid="presets-button"
          title={localize('com_endpoint_examples')}
        >
          <BookCopy className="icon-sm" id="presets-button" />
        </button>
      </Trigger>
      <Portal>
        <div
          style={{
            position: 'fixed',
            left: '0px',
            top: '0px',
            transform: 'translate3d(268px, 50px, 0px)',
            minWidth: 'max-content',
            zIndex: 'auto',
          }}
        >
          <Content
            side="bottom"
            align="center"
            className="mt-2 max-h-[495px] overflow-x-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white md:min-w-[400px]"
          >
            <PresetItemsTeacher
              presets={presets}
              onSelectPreset={onSelectPreset}
            />
          </Content>
        </div>
      </Portal>
      {preset && <EditPresetDialog submitPreset={submitPreset} exportPreset={exportPreset} />}
    </Root>
  );
};

export default PresetsTeacherMenu;
