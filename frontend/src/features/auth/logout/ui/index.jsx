import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      {t('logout')}
    </Button>
  );
};
