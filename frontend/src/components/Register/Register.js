// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import { Form, Button } from "react-bootstrap";
// import "./Register.css";

// function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!username) newErrors.username = "Username is required";
//     if (!email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (!confirmPassword)
//       newErrors.confirmPassword = "Please confirm your password";
//     else if (confirmPassword !== password)
//       newErrors.confirmPassword = "Passwords do not match";

//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log("Registration attempted with:", {
//         username,
//         email,
//         password,
//       });
//       // Здесь можно отправить запрос на сервер для регистрации
//     }
//   };

//   return (
//     <div className="register-wrapper">
//       <div className="register-form-container">
//         <h2 className="register-title">Регистрация</h2>
//         <Form onSubmit={handleSubmit} className="register-form">
//           <Form.Group className="mb-3" controlId="formBasicUsername">
//             <Form.Label>Имя пользователя</Form.Label>
//             <Form.Control
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.username}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Электронная почта</Form.Label>
//             <Form.Control
//               type="email"
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
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//             <Form.Label>Подтверждение пароля</Form.Label>
//             <Form.Control
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               isInvalid={!!errors.confirmPassword}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.confirmPassword}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="register-button">
//             Зарегистрироваться
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap"; // Импортируем Toast из react-bootstrap
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate для навигации
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false); // Состояние для отображения Toast
  const [toastMessage, setToastMessage] = useState(""); // Состояние для текста сообщения
  const [toastVariant, setToastVariant] = useState("success"); // Состояние для типа Toast (например, успех или ошибка)
  const navigate = useNavigate(); // Хук для навигации

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      const userData = { username, email, password };

      try {
        const response = await fetch("http://localhost:8000/api/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
          setToastMessage("Регистрация прошла успешно!");
          setToastVariant("success");
          setShowToast(true);

          // Перенаправляем пользователя на страницу входа после успешной регистрации
          setTimeout(() => {
            navigate("/login");
          }, 3000); // Перенаправляем через 3 секунды, чтобы пользователь успел увидеть уведомление
        } else {
          setToastMessage(data.error || "Ошибка регистрации!");
          setToastVariant("danger");
          setShowToast(true);
        }
      } catch (err) {
        setToastMessage("Не удалось зарегистрироваться. Попробуйте позже.");
        setToastVariant("danger");
        setShowToast(true);
      }
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-form-container">
        <h2 className="register-title">Регистрация</h2>
        <Form onSubmit={handleSubmit} className="register-form">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
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

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Подтверждение пароля</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="register-button">
            Зарегистрироваться
          </Button>
        </Form>
      </div>

      {/* ToastContainer для отображения уведомлений */}
      <ToastContainer position="top-center">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)} // Скрываем Toast при закрытии
          bg={toastVariant} // Используем цвет в зависимости от типа сообщения (success или danger)
          delay={3000} // Тайм-аут для автоматического скрытия
          autohide // Автоматическое скрытие
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Register;
