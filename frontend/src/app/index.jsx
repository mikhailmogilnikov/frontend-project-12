import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from 'shared/i18n/index.js';
import { router } from './routes.jsx';
import { Providers } from './providers.jsx';
import { store } from './store';

export const initApp = async () => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
  });

  return <Providers router={router} i18n={i18n} store={store} />;
};
