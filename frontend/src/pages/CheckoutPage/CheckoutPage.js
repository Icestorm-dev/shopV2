// import React, { useState, useEffect } from "react";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CheckoutPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//   });
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Получаем товары из корзины (например, из localStorage)
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Проверяем, если корзина пуста
//     if (cart.length === 0) {
//       alert("Ваша корзина пуста");
//       return;
//     }

//     // Отправляем данные заказа на сервер
//     const orderData = {
//       ...formData,
//       products: cart.map((item) => ({
//         product_id: item.id,
//         quantity: item.quantity,
//       })),
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/orders/",
//         orderData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 201) {
//         alert("Заказ оформлен успешно!");
//         localStorage.removeItem("cart"); // Очищаем корзину
//         navigate("/"); // Перенаправляем на главную страницу
//       } else {
//         alert("Ошибка при оформлении заказа. Попробуйте позже.");
//       }
//     } catch (error) {
//       console.error("Ошибка при оформлении заказа:", error);
//       alert("Произошла ошибка. Попробуйте позже.");
//     }
//   };

//   return (
//     <Container fluid>
//       <h1 className="text-center my-4">Оформление заказа</h1>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFirstName" className="mb-3">
//               <Form.Label>Имя</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите ваше имя"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formLastName" className="mb-3">
//               <Form.Label>Фамилия</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите вашу фамилию"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formPhone" className="mb-3">
//               <Form.Label>Мобильный телефон</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Введите ваш мобильный телефон"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Введите ваш email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <div className="d-flex justify-content-between align-items-center mt-4">
//               <Button variant="secondary" onClick={() => navigate("/cart")}>
//                 Назад в корзину
//               </Button>
//               <Button variant="success" type="submit">
//                 Оформить заказ
//               </Button>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CheckoutPage;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Form,
//   Button,
//   Row,
//   Col,
//   Toast,
//   ToastContainer,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CheckoutPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//   });
//   const [cart, setCart] = useState([]);
//   const [showToast, setShowToast] = useState(false); // Состояние для отображения Toast
//   const [toastMessage, setToastMessage] = useState(""); // Сообщение для Toast
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Получаем товары из корзины (например, из localStorage)
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Проверяем, если корзина пуста
//     if (cart.length === 0) {
//       alert("Ваша корзина пуста");
//       return;
//     }

//     // Проверка на валидность формы (проверка обязательных полей)
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.phone ||
//       !formData.email
//     ) {
//       alert("Пожалуйста, заполните все поля формы.");
//       return;
//     }

//     // Получаем access_token из localStorage
//     const accessToken = localStorage.getItem("access_token");

//     // Если токен отсутствует, показываем ошибку
//     if (!accessToken) {
//       alert("Вы не авторизованы. Пожалуйста, войдите в систему.");
//       navigate("/login"); // Перенаправляем на страницу входа
//       return;
//     }

//     // Формируем данные заказа
//     const orderData = {
//       user: 1, // Здесь предполагается, что пользователь с ID = 1 (можно заменить на динамический id, если есть система аутентификации)
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       phone: formData.phone,
//       email: formData.email,
//       status: "pending", // Статус может быть другим в зависимости от логики приложения
//       order_items: cart.map((item) => ({
//         product: item.id,
//         quantity: item.quantity,
//         price: parseFloat(item.paca), // Убедитесь, что price имеет правильный тип
//       })),
//     };

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/orders/create/", // Путь для создания заказа
//         orderData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`, // Передаем access_token в заголовке
//           },
//         }
//       );

//       if (response.status === 201) {
//         // Успешный заказ
//         setToastMessage("Заказ оформлен успешно!");
//         setShowToast(true); // Показать Toast
//         localStorage.removeItem("cart"); // Очищаем корзину
//         setTimeout(() => navigate("/"), 3000); // Перенаправляем на главную страницу через 3 секунды
//       } else {
//         setToastMessage("Ошибка при оформлении заказа. Попробуйте позже.");
//         setShowToast(true); // Показать Toast
//       }
//     } catch (error) {
//       console.error("Ошибка при оформлении заказа:", error);
//       setToastMessage("Произошла ошибка. Попробуйте позже.");
//       setShowToast(true); // Показать Toast
//     }
//   };

//   return (
//     <Container fluid>
//       <h1 className="text-center my-4">Оформление заказа</h1>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFirstName" className="mb-3">
//               <Form.Label>Имя</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите ваше имя"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formLastName" className="mb-3">
//               <Form.Label>Фамилия</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите вашу фамилию"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formPhone" className="mb-3">
//               <Form.Label>Мобильный телефон</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Введите ваш мобильный телефон"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Введите ваш email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <div className="d-flex justify-content-between align-items-center mt-4">
//               <Button variant="secondary" onClick={() => navigate("/cart")}>
//                 Назад в корзину
//               </Button>
//               <Button variant="success" type="submit">
//                 Оформить заказ
//               </Button>
//             </div>
//           </Form>
//         </Col>
//       </Row>

//       {/* Toast для отображения сообщений */}
//       <ToastContainer className="position-fixed top-0 start-50 translate-middle-x p-3">
//         <Toast
//           bg="success"
//           onClose={() => setShowToast(false)}
//           show={showToast}
//           delay={1500}
//           autohide
//         >
//           <Toast.Body className="text-white text-center">
//             {toastMessage}
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </Container>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false); // Состояние для отображения Toast
  const [toastMessage, setToastMessage] = useState(""); // Сообщение для Toast
  const navigate = useNavigate();

  useEffect(() => {
    // Получаем товары из корзины (например, из localStorage)
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверяем, если корзина пуста
    if (cart.length === 0) {
      alert("Ваша корзина пуста");
      return;
    }

    // Проверка на валидность формы (проверка обязательных полей)
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    // Получаем access_token из localStorage
    const accessToken = localStorage.getItem("access_token");

    // Если токен отсутствует, показываем ошибку
    if (!accessToken) {
      alert("Вы не авторизованы. Пожалуйста, войдите в систему.");
      navigate("/login"); // Перенаправляем на страницу входа
      return;
    }

    // Формируем данные заказа
    const orderData = {
      user: 1, // Здесь предполагается, что пользователь с ID = 1 (можно заменить на динамический id, если есть система аутентификации)
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      status: "pending", // Статус может быть другим в зависимости от логики приложения
      order_items: cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        price: parseFloat(item.price), // Цена товара
        package_price: parseFloat(item.package_price), // Цена за пакет (если есть)
      })),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/orders/create/", // Путь для создания заказа
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Передаем access_token в заголовке
          },
        }
      );

      if (response.status === 201) {
        // Успешный заказ
        setToastMessage("Заказ оформлен успешно!");
        setShowToast(true); // Показать Toast
        localStorage.removeItem("cart"); // Очищаем корзину
        setTimeout(() => navigate("/"), 3000); // Перенаправляем на главную страницу через 3 секунды
      } else {
        setToastMessage("Ошибка при оформлении заказа. Попробуйте позже.");
        setShowToast(true); // Показать Toast
      }
    } catch (error) {
      console.error("Ошибка при оформлении заказа:", error);
      setToastMessage("Произошла ошибка. Попробуйте позже.");
      setShowToast(true); // Показать Toast
    }
  };

  return (
    <Container fluid>
      <h1 className="text-center my-4">Оформление заказа</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваше имя"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите вашу фамилию"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Мобильный телефон</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Введите ваш мобильный телефон"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите ваш email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <Button variant="secondary" onClick={() => navigate("/cart")}>
                Назад в корзину
              </Button>
              <Button variant="success" type="submit">
                Оформить заказ
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Toast для отображения сообщений */}
      <ToastContainer className="position-fixed top-0 start-50 translate-middle-x p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={1500}
          autohide
        >
          <Toast.Body className="text-white text-center">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default CheckoutPage;
