import { Button } from '@nextui-org/react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate(0);
  };

  return (
    <Button
      startContent={<BiLogOut />}
      className='font-medium shadow-base'
      onPress={handleLogout}
    >
      Выйти
    </Button>
  );
};
