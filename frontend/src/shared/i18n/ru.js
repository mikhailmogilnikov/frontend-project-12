const shared = {
  password: 'Пароль',
};

const login = {
  enter: 'Войти',
  error: 'Неверные имя пользователя и пароль',
  noAccount: 'Нет аккаунта?',
  register: 'Зарегистрироваться.',
  testData: 'Тестовые данные:',
  nickname: 'Ваш ник',
};

const signup = {
  signup: 'Регистрация',
  signup_action: 'Зарегистрироваться',
  error: 'Неверные имя пользователя и пароль',
  have_account: 'Есть аккаунт?',
  login: 'Войти.',
  testData: 'Тестовые данные:',
  username: 'Имя пользователя',
  password: 'Пароль',
  confirm_password: 'Подтвердите пароль',
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
    ...shared,
    login,
    signup,
    chat,
  },
};
