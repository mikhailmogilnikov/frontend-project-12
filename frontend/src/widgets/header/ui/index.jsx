import { useMessengerStore } from 'entities/messenger';
import { LogoutButton } from 'features/auth/logout';
import { ChangeTheme } from 'features/change-theme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PiLightningBold } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const Header = () => {
  useLocation();
  const { activeChat, messages } = useMessengerStore();
  const { t } = useTranslation();

  const [msg, setMsg] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (messages) {
      const activeChatMessages = messages.filter(
        (message) => message.channelId === activeChat.id,
      );
      setMsg(activeChatMessages);
    }
  }, [messages, activeChat]);

  return (
    <nav className='h-16 border-b-1 border-b-divider bg-background w-full z-10'>
      <Flex center className='mx-auto px-4 h-full justify-between'>
        <Flex>
          <Flex center gap={2} className='max-w-72 flex-shrink-0'>
            <PiLightningBold size={20} />
            <Typo tag='h1' size={24} weight={600}>
              Realtime Chat
            </Typo>
          </Flex>

          {activeChat && msg && (
            <Flex col gap={2} className='pl-4'>
              <Typo tag='h4' size={18} weight={600} className='leading-4'>
                {`# ${activeChat.name}`}
              </Typo>
              <Typo
                tag='h5'
                size={16}
                weight={500}
                className='leading-4'
                opacity={0.5}
              >
                {t('chat.messages.t', { count: msg.length })}
              </Typo>
            </Flex>
          )}
        </Flex>

        <Flex center width='min-content'>
          <ChangeTheme />
          {token && <LogoutButton />}
        </Flex>
      </Flex>
    </nav>
  );
};
