import React, { createContext, useState, useContext } from "react";

// Создаем контекст для текущего пользователя
const UserContext = createContext();

// Хук для использования контекста
export const useUser = () => {
  return useContext(UserContext);
};

// Компонент провайдер, который будет оборачивать все приложение
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || ""); // Читаем имя из localStorage, если оно есть

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
