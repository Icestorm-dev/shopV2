// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import { Form, Button } from "react-bootstrap";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = "Email is required";
//     else if (!/S+@S+.S+/.test(email)) newErrors.email = "Email is invalid";
//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log("Login attempted with:", { email, password });
//       // Here you would typically send a request to your server
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Вход</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Логин</Form.Label>
//             <Form.Control
//               type="email"
//               // placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Пароль</Form.Label>
//             <Form.Control
//               type="password"
//               // placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Войти
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
// import { useNavigate } from "react-router-dom"; // Хук для навигации
// import "./Login.css";

// function Login() {
//   const [username, setUsername] = useState(""); // Используем username вместо email
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [showToast, setShowToast] = useState(false); // Состояние для отображения Toast
//   const [toastMessage, setToastMessage] = useState(""); // Сообщение для Toast
//   const [toastVariant, setToastVariant] = useState("success"); // Тип Toast (success или danger)
//   const navigate = useNavigate(); // Хук для навигации

//   const validateForm = () => {
//     const newErrors = {};
//     if (!username) newErrors.username = "Username is required"; // Валидация для username
//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";
//     return newErrors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       const userData = { username, password }; // Отправляем username вместо email

//       try {
//         const response = await fetch("http://localhost:8000/api/token/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           // Если ответ успешный, сохраняем токены и имя пользователя в localStorage
//           localStorage.setItem("access_token", data.access);
//           localStorage.setItem("refresh_token", data.refresh);
//           localStorage.setItem("username", username); // Сохраняем имя пользователя

//           // Отображаем успешное сообщение
//           setToastMessage("Вход выполнен успешно!");
//           setToastVariant("success");
//           setShowToast(true);

//           // Перенаправляем пользователя на главную страницу
//           setTimeout(() => {
//             navigate("/"); // Перенаправляем на главную страницу
//           }, 2000); // Перенаправляем через 2 секунды
//         } else {
//           setToastMessage(
//             data.detail || "Ошибка при входе. Проверьте введенные данные."
//           );
//           setToastVariant("danger");
//           setShowToast(true);
//         }
//       } catch (err) {
//         setToastMessage("Произошла ошибка. Попробуйте позже.");
//         setToastVariant("danger");
//         setShowToast(true);
//       }
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Вход</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicUsername">
//             <Form.Label>Логин</Form.Label>
//             <Form.Control
//               type="text" // Используем текст для логина
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.username}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Пароль</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Войти
//           </Button>
//         </Form>
//       </div>

//       {/* ToastContainer для отображения уведомлений */}
//       <ToastContainer position="top-center">
//         <Toast
//           show={showToast}
//           onClose={() => setShowToast(false)} // Скрываем Toast при закрытии
//           bg={toastVariant} // Используем цвет в зависимости от типа сообщения (success или danger)
//           delay={3000} // Тайм-аут для автоматического скрытия
//           autohide // Автоматическое скрытие
//         >
//           <Toast.Body>{toastMessage}</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Импортируем контекст пользователя
import "./Login.css";

function Login() {
  const [username, setUsernameInput] = useState(""); // Используем username для поля ввода
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const navigate = useNavigate();
  const { setUsername } = useUser(); // Получаем функцию setUsername из контекста

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      const userData = { username, password };

      try {
        const response = await fetch("http://localhost:8000/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
          // Сохраняем токены и имя пользователя
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);
          localStorage.setItem("username", username);

          // Обновляем контекст с новым именем пользователя
          setUsername(username);

          // Показать успешное сообщение
          setToastMessage("Вход выполнен успешно!");
          setToastVariant("success");
          setShowToast(true);

          // Перенаправление на главную страницу
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setToastMessage(data.detail || "Ошибка при входе.");
          setToastVariant("danger");
          setShowToast(true);
        }
      } catch (err) {
        setToastMessage("Произошла ошибка. Попробуйте позже.");
        setToastVariant("danger");
        setShowToast(true);
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Вход</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Войти
          </Button>
        </Form>
      </div>

      {/* ToastContainer для отображения уведомлений */}
      <ToastContainer position="top-center">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg={toastVariant}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Login;
