import axios from "axios";

// Базовый URL для всех запросов API
const API_URL = "http://127.0.0.1:8000/api/"; // Замените на ваш адрес API

// Функция для получения JWT токена из localStorage (или любого другого хранилища)
const getAuthToken = () => {
  return localStorage.getItem("access_token"); // Получаем токен из localStorage
};

// Создаем экземпляр axios с базовой настройкой
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json", // Тип содержимого для отправки в JSON
  },
});

// Добавляем интерсептор для автоматической вставки токена в заголовки запроса
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); // Получаем токен
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Добавляем токен в заголовок
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Если ошибка, отклоняем запрос
  }
);
