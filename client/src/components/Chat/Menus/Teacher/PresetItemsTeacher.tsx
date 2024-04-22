import { Trash2 } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { Close } from '@radix-ui/react-popover';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { useGetEndpointsQuery } from 'librechat-data-provider/react-query';
import type { FC } from 'react';
import type { TPreset } from 'librechat-data-provider';
import FileUpload from '~/components/Chat/Input/Files/FileUpload';
import { PinIcon, EditIcon, TrashIcon } from '~/components/svg';
import DialogTemplate from '~/components/ui/DialogTemplate';
import { getPresetTitle, getEndpointField } from '~/utils';
import { Dialog, DialogTrigger, Label } from '~/components/ui/';
import { MenuSeparator, MenuItem } from '../UI';
import { icons } from '../Endpoints/Icons';
import { useLocalize, useUserRole } from '~/hooks';
import store from '~/store';
import { useTeacherData } from '~/hooks/useTeacherData';

const PresetItemsTeacher: FC<{
  presets: TPreset[];
  onSelectPreset: (preset: TPreset) => void;
}> = ({
  presets,
  onSelectPreset,
}) => {
  const { data: endpointsConfig } = useGetEndpointsQuery();
  const defaultPreset = useRecoilValue(store.defaultPreset);
  const localize = useLocalize();
  return (
    <>
      <div
        role="menuitem"
        className="pointer-none group m-1.5 flex h-8 min-w-[170px] gap-2 rounded px-5 py-2.5 !pr-3 text-sm !opacity-100 focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50  md:min-w-[240px]"
        tabIndex={-1}
      >
        
        <div className="flex h-full grow items-center justify-end gap-2">
          <label
            htmlFor="default-preset"
            className="w-40 truncate rounded bg-transparent py-1 text-xs font-medium font-normal text-gray-600 transition-colors dark:bg-transparent dark:text-gray-300 sm:w-72"
          >
            {defaultPreset
              ? `${localize('com_endpoint_preset_default_item')} ${defaultPreset.title}`
              : localize('com_endpoint_preset_default_none')}
          </label>
        </div>
      </div>
      {presets && presets.length === 0 && (
        <div
          role="menuitem"
          className="pointer-none group m-1.5 flex h-8 min-w-[170px] gap-2 rounded px-5 py-2.5 !pr-3 text-sm !opacity-100 focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 md:min-w-[240px]"
          tabIndex={-1}
        >
          <div className="flex h-full grow items-center justify-end gap-2 text-gray-600 dark:text-gray-300">
            {/* TODO: Create Preset from here */}
            {localize('com_endpoint_no_presets')}
          </div>
        </div>
      )}
      <Flipper flipKey={presets.map(({ presetId }) => presetId).join('.')}>
        {presets &&
          presets.length > 0 &&
          presets.map((preset, i) => {
            if (!preset || !preset.presetId) {
              return null;
            }

            const iconKey = getEndpointField(endpointsConfig, preset.endpoint, 'type')
              ? 'unknown'
              : preset.endpointType ?? preset.endpoint ?? 'unknown';
            const Icon = icons[iconKey];

            return (
              <Close asChild key={`preset-${preset.presetId}`}>
                <div key={`preset-${preset.presetId}`}>
                  <Flipped flipId={preset.presetId}>
                    <MenuItem
                      key={`preset-item-${preset.presetId}`}
                      textClassName="text-xs max-w-[150px] sm:max-w-[200px] truncate md:max-w-full "
                      title={getPresetTitle(preset)}
                      onClick={() => onSelectPreset(preset)}
                      icon={
                        Icon &&
                        Icon({
                          context: 'menu-item',
                          iconURL: getEndpointField(endpointsConfig, preset.endpoint, 'iconURL'),
                          className: 'icon-md mr-1 dark:text-white',
                          endpoint: preset.endpoint,
                        })
                      }
                      selected={false}
                      data-testid={`preset-item-${preset}`}
                    >
                    </MenuItem>
                  </Flipped>
                  {i !== presets.length - 1 && <MenuSeparator />}
                </div>
              </Close>
            );
          })}
      </Flipper>
    </>
  );
};

export default PresetItemsTeacher;
