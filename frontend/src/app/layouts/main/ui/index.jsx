/* eslint-disable */
import { Outlet } from 'react-router-dom';
import { useValidateToken } from 'shared/lib/hooks/use-validate-token';
import { Flex } from 'shared/ui/primitives/flex';
import { Header } from 'widgets/header';

export const MainLayout = () => {
  useValidateToken();

  return (
    <>
      <Header />
      <Flex tag='main' col className='mx-auto min-h-[calc(100dvh-64px-80px)]'>
        <Outlet />
      </Flex>
    </>
  );
};
