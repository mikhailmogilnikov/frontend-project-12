/* eslint-disable functional/no-expression-statement */

import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import resources from 'shared/i18n/index.js';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { router } from './routes.jsx';

export const initApp = async () => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
  });

  return (
    <NextThemesProvider attribute='class' defaultTheme='light'>
      <NextUIProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
};
