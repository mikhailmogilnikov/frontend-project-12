import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useTheme } from 'next-themes';

import { Button } from '@nextui-org/react';
import { ThemeIcons } from '../config/theme-icons';
import { ThemeNames } from '../config/theme-names';

export const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = ThemeIcons[theme];

  return (
    <Dropdown backdrop='blur' placement='bottom'>
      <DropdownTrigger>
        <Button
          isIconOnly
          size='sm'
          variant='light'
          radius='full'
          aria-label='Оформление'
        >
          <ThemeIcon className='w-2/3 h-2/3' />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label='Theme selector'
        closeOnSelect={false}
        selectedKeys={new Set([theme])}
        selectionMode='single'
      >
        <DropdownItem key='light' onPress={() => setTheme('light')}>
          {ThemeNames.light}
        </DropdownItem>
        <DropdownItem key='dark' onPress={() => setTheme('dark')}>
          {ThemeNames.dark}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
