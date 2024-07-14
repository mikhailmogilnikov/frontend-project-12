const login = {
  enter: 'Войти',
  error: 'Неверные имя пользователя и пароль',
  noAccount: 'Нет аккаунта?',
  register: 'Зарегистрироваться.',
  testData: 'Тестовые данные:',
  nickname: 'Ваш ник',
  password: 'Пароль',
};

const chat = {
  messages: {
    t_one: '{{count}} сообщение',
    t_few: '{{count}} сообщения',
    t_many: '{{count}} сообщений',
  },
};

export default {
  translation: {
    ...login,
    chat,
  },
};
