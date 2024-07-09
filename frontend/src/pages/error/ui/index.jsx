import { useNavigate } from 'react-router-dom';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Flex col center className='w-dvw h-dvh justify-center' tag='section'>
      <Flex col className='container px-4' gap={2}>
        <Typo
          tag='h1'
          size={32}
          opacity={0.5}
          className=' leading-tight'
          weight={600}
        >
          Этой страницы не существует.
        </Typo>
        <button type='button' className='w-fit' onClick={handleNavigate}>
          <Typo tag='h1' size={32} weight={600}>
            Вернуться.
          </Typo>
        </button>
      </Flex>
    </Flex>
  );
};
