/* eslint-disable react/jsx-props-no-spreading */

import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

export const PasswordInput = ({ ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  const ShowPasswordButton = isVisible ? (
    <button
      type='button'
      onClick={() => setIsVisible(false)}
      aria-label='Hide password'
    >
      <PiEyeClosedBold className='w-6 h-6' opacity={0.5} />
    </button>
  ) : (
    <button
      type='button'
      onClick={() => setIsVisible(true)}
      aria-label='Show password'
    >
      <PiEyeBold className='w-6 h-6' opacity={0.5} />
    </button>
  );

  return (
    <Input
      {...rest}
      endContent={ShowPasswordButton}
      type={isVisible ? 'text' : 'password'}
    />
  );
};
