import { Outlet } from 'react-router-dom';
import { Flex } from 'shared/ui/flex';
import { Header } from 'widgets/header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Flex
        tag='main'
        col
        className='container mx-auto mt-20 mb-4 px-4 min-h-[calc(100dvh-64px-80px-16px)]'
      >
        <Outlet />
      </Flex>
    </>
  );
};
