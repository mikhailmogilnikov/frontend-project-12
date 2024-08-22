/* eslint-disable */
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { LazyMotion } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastProvider } from 'shared/lib/providers/toast-provider';
import { ProfanityProvider } from 'shared/lib/providers/profanity-provider';
import { RollbarProvider } from 'shared/lib/providers/rollbar-provider';

export const Providers = ({ i18n, router, store }) => {
  const loadFeatures = () => import('shared/config/dom-max.js').then((res) => res.domMax);

  return (
    <RollbarProvider>
      <LazyMotion features={loadFeatures}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          <NextUIProvider>
            <I18nextProvider i18n={i18n}>
              <ReduxProvider store={store}>
                <ProfanityProvider>
                  <ToastProvider>
                    <RouterProvider router={router} />
                  </ToastProvider>
                </ProfanityProvider>
              </ReduxProvider>
            </I18nextProvider>
          </NextUIProvider>
        </NextThemesProvider>
      </LazyMotion>
    </RollbarProvider>
  );
};
