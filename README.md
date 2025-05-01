# GitHub OAuth Client

Приложение позволяет выполнять вход через GitHub OAuth, просматривать свой профиль, публичные и приватные репозитории, а также искать других пользователей GitHub.

# Внешние зависимости

Проект использует следующие основные зависимости:

- [React](https://reactjs.org/) — библиотека для построения интерфейса
- [React Router v7](https://reactrouter.com/en/main) — маршрутизация
- [Material UI (MUI)](https://mui.com/) — UI-компоненты
- [Axios](https://axios-http.com/) — HTTP-клиент для работы с API GitHub
- [GitHub API v3](https://docs.github.com/en/rest) — получение данных профиля и репозиториев

# Как развернуть проект локально

# 1. Клонируйте репозиторий

git clone https://github.com/Samirkosh/oAuth.git

# 2. Установите зависимости

npm install

# 3. Создание файла .env

В корне проекта создайте файл .env и добавьте в него следующие строки:

VITE_GITHUB_CLIENT_ID=your_github_client_id

VITE_GITHUB_CLIENT_SECRET=your_github_client_secret

VITE_GITHUB_REDIRECT_URI=http://localhost:5173/callback

Замените your_github_client_id и your_github_client_secret на значения, полученные в настройках вашего GitHub OAuth приложения.
Важно, до и после знака = не ставить пробелы

# 4. Как получить CLIENT_ID и CLIENT_SECRET

- Перейдите в [GitHub Developer Settings](https://github.com/settings/apps) для создания OAuth приложения.

- Перейдите в раздел OAuth Apps.

- Нажмите New OAuth App.

- Укажите название, URL и callback URL, который будет соответствовать http://localhost:5173/callback (или тому URL, который вы хотите использовать).

- После создания вы получите client_id и client_secret, которые нужно добавить в .env.

# 5 Установите зависимости для файла server

- открываем терминал git bash вводим следующие команды

- cd server

- npm init -y

- npm install express axios cors dotenv

- node index.js

у вас должен выйти:
Сервер работает на http://localhost:4000

# 5. Запуск проекта

Теперь, когда ты используешь .env переменные, нужно перезапустить проект, чтобы изменения вступили в силу:

- Открой терминал в корне проекта.

- Запусти команду для перезапуска проекта:
  npm run dev
