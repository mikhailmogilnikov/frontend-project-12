const shared = {
  password: 'Пароль',
  cancel: 'Отменить',
  create: 'Создать',
  send: 'Отправить',
  logout: 'Выйти',
  delete: 'Удалить',
};

const project = {
  title: 'Hexlet Chat',
  networkError: 'Ошибка соединения',
};

const addChat = {
  title: 'Добавить канал',
  placeholder: 'Название канала',
  caption: 'Канал создается публично и доступен всем пользователям чата.',
  success: 'Канал создан',
  validation: {
    required: 'Обязательное поле',
    min: 'От 3 до 20 символов',
    max: 'От 3 до 20 символов',
    unique: 'Должно быть уникальным',
  },
};

const editChat = {
  title: 'Переименовать канал',
  placeholder: 'Название канала',
  caption: 'Изменения увидят все пользователи чата.',
  success: 'Канал переименован',
};

const deleteChat = {
  title: 'Удалить канал',
  caption: 'Уверены?',
  success: 'Канал удален',
};

const notFound = {
  message: 'Этой страницы не существует.',
  back: 'Вернуться.',
};

const login = {
  enter: 'Войти',
  errors: { 401: 'Неверные имя пользователя или пароль' },
  noAccount: 'Нет аккаунта?',
  register: 'Регистрация',
  testData: 'Тестовые данные:',
  nickname: 'Ваш ник',
};

const signup = {
  signup: 'Регистрация',
  signup_action: 'Зарегистрироваться',
  have_account: 'Есть аккаунт?',
  login: 'Войти.',
  testData: 'Тестовые данные:',
  username: 'Имя пользователя',
  password: 'Пароль',
  confirm_password: 'Подтвердите пароль',
  errors: {
    409: 'Такой пользователь уже существует',
  },
  validation: {
    required: 'Обязательное поле',
    min3: 'От 3 до 20 символов',
    min6: 'Не менее 6 символов',
    samepass: 'Пароли должны совпадать',
  },
};

const chat = {
  messages: {
    t_one: '{{count}} сообщение',
    t_few: '{{count}} сообщения',
    t_many: '{{count}} сообщений',
  },
  noMessages: 'Сообщений нет',
  startDialog: 'Начните диалог первым!',
};

export default {
  translation: {
    ...shared,
    project,
    addChat,
    editChat,
    deleteChat,
    notFound,
    login,
    signup,
    chat,
  },
};
