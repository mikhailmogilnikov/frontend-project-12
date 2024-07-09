import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { LazyMotion } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

export const Providers = ({ i18n, router }) => {
  const loadFeatures = () => import('shared/config/dom-max.js').then((res) => res.domMax);

  return (
    <LazyMotion features={loadFeatures}>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <NextUIProvider>
          <I18nextProvider i18n={i18n}>
            <RouterProvider router={router} />
          </I18nextProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </LazyMotion>
  );
};
