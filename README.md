# GitHub OAuth Client

Приложение позволяет выполнять вход через GitHub OAuth, просматривать свой профиль, публичные и приватные репозитории, а также искать других пользователей GitHub.

# Внешние зависимости

Проект использует следующие основные зависимости:

- [React](https://reactjs.org/) — библиотека для построения интерфейса
- [React Router v6](https://reactrouter.com/en/main) — маршрутизация
- [Material UI (MUI)](https://mui.com/) — UI-компоненты
- [Axios](https://axios-http.com/) — HTTP-клиент для работы с API GitHub
- [GitHub API v3](https://docs.github.com/en/rest) — получение данных профиля и репозиториев

# Как развернуть проект локально

# 1. Клонируйте репозиторий

git clone https://github.com/your-username/your-repo-name.git

# 2. Установите зависимости

npm install

# 3. Создание файла .env

В корне проекта создайте файл .env и добавьте в него следующие строки:

VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GITHUB_CLIENT_SECRET=your_github_client_secret
VITE_GITHUB_REDIRECT_URI=http://localhost:5174/callback

Замените your_github_client_id и your_github_client_secret на значения, полученные в настройках вашего GitHub OAuth приложения.

# 4. Как получить CLIENT_ID и CLIENT_SECRET

- Перейдите в [GitHub Developer Settings](https://github.com/settings/apps) для создания OAuth приложения.

- Перейдите в раздел OAuth Apps.

- Нажмите New OAuth App.

- Укажите название, URL и callback URL, который будет соответствовать http://localhost:5174/callback (или тому URL, который вы хотите использовать).

- После создания вы получите client_id и client_secret, которые нужно добавить в .env.

# 5. Запуск проекта

npm run dev
