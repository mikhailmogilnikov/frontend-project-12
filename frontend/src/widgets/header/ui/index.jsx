import { ChangeTheme } from 'features/change-theme';
import { PiLightningBold } from 'react-icons/pi';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const Header = () => {
  return (
    <nav className='h-16 border-b-1 border-b-divider bg-background w-full z-10'>
      <Flex center className='mx-auto px-4 h-full justify-between'>
        <Flex center gap={2}>
          <PiLightningBold size={20} />
          <Typo tag='h1' size={24} weight={600}>
            Realtime Chat
          </Typo>
        </Flex>

        <ChangeTheme />
      </Flex>
    </nav>
  );
};
