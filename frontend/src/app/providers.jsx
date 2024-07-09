import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { LazyMotion } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

export const Providers = ({ i18n, router, store }) => {
  const loadFeatures = () => import('shared/config/dom-max.js').then((res) => res.domMax);

  return (
    <LazyMotion features={loadFeatures}>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <NextUIProvider>
          <I18nextProvider i18n={i18n}>
            <ReduxProvider store={store}>
              <RouterProvider router={router} />
            </ReduxProvider>
          </I18nextProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </LazyMotion>
  );
};
