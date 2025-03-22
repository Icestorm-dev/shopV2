// import React from "react";

// import React, { useContext } from "react";
// import { Container, Navbar, Nav } from "react-bootstrap";
// import header from "../../assets/images/header.png";
// import { CartContext } from "../../context/CartContext";
// const CustomNavbar = () => {
//   const { cartCount } = useContext(CartContext);

//   return (
//     <Navbar bg="light" expand="lg" collapseOnSelect>
//       <Container fluid>
//         {/* Логотип */}
//         <Navbar.Brand href="/">
//           <img
//             src={header}
//             alt="Логотип"
//             className="d-inline-block align-top"
//             style={{ maxHeight: "40px" }}
//           />
//         </Navbar.Brand>

//         {/* Бургер-меню для мобильных */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Контактная информация (десктоп) */}
//           <div className="d-none d-lg-flex align-items-center ms-3 gap-4">
//             <div className="d-flex align-items-center">
//               <i className="bi bi-clock me-2"></i>
//               <span>Пн-Пт 9:00-18:00</span>
//             </div>
//             <div className="d-flex align-items-center">
//               <i className="bi bi-telephone me-2"></i>
//               <a
//                 href="tel:+79991234567"
//                 className="text-decoration-none text-dark"
//               >
//                 +7 (999) 123-45-67
//               </a>
//             </div>
//           </div>

//           {/* Правая часть меню */}
//           <Nav className="ms-auto">
//             {/* Мобильная версия контактов */}
//             <div className="d-lg-none">
//               <div className="d-flex flex-column gap-2 mb-3">
//                 <div className="d-flex align-items-center">
//                   <i className="bi bi-clock me-2"></i>
//                   <span>Пн-Пт 9:00-18:00</span>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <i className="bi bi-telephone me-2"></i>
//                   <a
//                     href="tel:+79991234567"
//                     className="text-decoration-none text-dark"
//                   >
//                     +7 (999) 123-45-67
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Иконка корзины в десктопной версии */}
//             <Nav.Link
//               href="/cart"
//               className="d-none d-lg-block me-3 position-relative"
//             >
//               <i className="bi bi-cart fs-5"></i>
//               {cartCount > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {cartCount}
//                 </span>
//               )}
//             </Nav.Link>

//             {/* Ссылки авторизации */}
//             <div className="d-flex flex-column flex-lg-row gap-2">
//               <Nav.Link href="/login" className="d-flex align-items-center">
//                 <i className="bi bi-box-arrow-in-right me-2"></i>
//                 Вход
//               </Nav.Link>
//               <Nav.Link href="/register" className="d-flex align-items-center">
//                 <i className="bi bi-person-plus me-2"></i>
//                 Регистрация
//               </Nav.Link>
//             </div>

//             {/* Иконка корзины в мобильной версии */}
//             <Nav.Link
//               href="/cart"
//               className="d-lg-none mt-2 position-relative d-flex align-items-center"
//             >
//               <i className="bi bi-cart me-2"></i>
//               <span>Корзина</span>
//               {cartCount > 0 && (
//                 <span className="ms-2 badge rounded-pill bg-danger">
//                   {cartCount}
//                 </span>
//               )}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;

// import React, { useContext } from "react";
// import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
// import header from "../../assets/images/header.png";
// import { CartContext } from "../../context/CartContext";
// // import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa"; // Иконки телефона и корзины

// const CustomNavbar = () => {
//   const { cartCount } = useContext(CartContext);

//   return (
//     <>
//       <Navbar bg="light" expand="lg" collapseOnSelect>
//         <Container fluid>
//           <Row className="w-100">
//             {/* Логотип - занимает 3 колонки на экранах среднего размера и выше */}
//             <Col
//               md={3}
//               className="d-flex justify-content-start align-items-center d-none d-md-block" //скрыл лого на маленьких экранах
//             >
//               <Navbar.Brand href="/">
//                 <img
//                   src={header}
//                   alt="Логотип"
//                   className="d-inline-block align-top"
//                   style={{ maxHeight: "55px", maxWidth: "100%" }}
//                   // style={{ maxHeight: "55px" }}
//                 />
//               </Navbar.Brand>
//             </Col>

//             {/* Центр - контактная информация (десктоп) */}
//             <Col
//               md={6}
//               className="d-none d-lg-flex justify-content-start align-items-center gap-4"
//             >
//               <div className="d-flex align-items-center">
//                 <i className="bi bi-clock me-2"></i>
//                 <span>Пн-Пт 9:00-18:00</span>
//               </div>
//               <div className="d-flex align-items-center">
//                 <i className="bi bi-telephone me-2"></i>
//                 <a
//                   href="tel:+79991234567"
//                   className="text-decoration-none text-dark"
//                 >
//                   +7 (999) 123-45-67
//                 </a>
//               </div>
//             </Col>

//             {/* Правая часть - ссылки и корзина */}
//             <Col
//               md={3}
//               className="d-flex justify-content-end align-items-center gap-2"
//             >
//               {/* Иконка корзины в десктопной версии */}
//               <Nav.Link
//                 href="/cart"
//                 className="d-none d-lg-block me-3 position-relative"
//               >
//                 <i className="bi bi-cart fs-5"></i>
//                 {cartCount > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                     {cartCount}
//                   </span>
//                 )}
//               </Nav.Link>

//               {/* Ссылки авторизации */}
//               <div className="d-flex flex-column flex-lg-row gap-2">
//                 <Nav.Link
//                   href="/login"
//                   className="d-flex align-items-center d-none d-lg-block" //скрыл на мобиле
//                 >
//                   <i className="bi bi-box-arrow-in-right me-2"></i>
//                   Вход
//                 </Nav.Link>
//                 <Nav.Link
//                   href="/register"
//                   className="d-flex align-items-center d-none d-lg-block" //скрыл на мобиле
//                 >
//                   <i className="bi bi-person-plus me-2"></i>
//                   Регистрация
//                 </Nav.Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Navbar>

//       {/* мобильная версия */}
//       <Navbar bg="light" expand="lg" collapseOnSelect>
//         {/* Логотип для мобилок */}
//         <Container
//           fluid
//           className="mb-3 d-flex justify-content-center d-block d-sm-none"
//         >
//           <Row className="">
//             <Col>
//               <div>
//                 <a
//                   href="tel:+79991234567"
//                   className="text-decoration-none text-dark"
//                 >
//                   <i className="bi bi-telephone me-2"></i>
//                 </a>
//               </div>
//             </Col>
//             <Col>
//               <Navbar.Brand href="/">
//                 <img
//                   src={header}
//                   alt="Логотип"
//                   className="d-inline-block align-top"
//                   style={{ maxHeight: "30px" }}
//                 />
//               </Navbar.Brand>
//             </Col>
//             <Col>
//               {/* Иконка корзины только для мобильных устройств */}
//               <Nav.Link
//                 href="/cart"
//                 className="d-block d-sm-none mt-2 position-relative d-flex align-items-center"
//               >
//                 <i className="bi bi-cart me-2"></i>
//                 {cartCount > 0 && (
//                   <span
//                     className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                     style={{ width: "20px", height: "20px", fontSize: "12px" }}
//                   >
//                     {cartCount}
//                   </span>
//                 )}
//               </Nav.Link>
//             </Col>
//           </Row>
//         </Container>

//         {/* Бургер-меню для мобильных */}
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="w-100 mb-2"
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Мобильная версия контактов */}
//           <div className="d-lg-none">
//             <div className="d-flex flex-column gap-2 mb-3">
//               {/* Ссылки авторизации */}
//               <div className="d-flex flex-column flex-lg-row gap-3">
//                 <Nav.Link href="/login" className="d-flex align-items-center">
//                   <i className="bi bi-box-arrow-in-right me-2"></i>
//                   Вход
//                 </Nav.Link>
//                 <Nav.Link
//                   href="/register"
//                   className="d-flex align-items-center"
//                 >
//                   <i className="bi bi-person-plus me-2"></i>
//                   Регистрация
//                 </Nav.Link>
//               </div>
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default CustomNavbar;

// import React, { useState, useEffect, useContext } from "react";
// import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
// import header from "../../assets/images/header.png";
// import { CartContext } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useUser } from "../../context/UserContext"; // Импортируем контекст

// const CustomNavbar = () => {
//   const { cartCount } = useContext(CartContext);
//   const [username, setUsername] = useState(); // Состояние для хранения имени пользователя
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Проверяем, если имя пользователя есть в localStorage
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   // Функция для выхода из аккаунта
//   const logout = async () => {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const accessToken = localStorage.getItem("access_token");

//     if (!refreshToken || !accessToken) {
//       alert("Вы не авторизованы.");
//       return;
//     }

//     const logoutData = {
//       refresh_token: refreshToken,
//     };

//     console.log("Отправляем запрос на выход с данными:", logoutData);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/logout/",
//         logoutData, // отправляем refresh_token в теле
//         {
//           headers: {
//             "Content-Type": "application/json", // Убедитесь, что заголовок правильный
//             Authorization: `Bearer ${accessToken}`, // Добавляем access_token в заголовок
//           },
//         }
//       );

//       if (response.status === 200) {
//         // Удаляем токены из localStorage
//         localStorage.removeItem("access_token");
//         localStorage.removeItem("refresh_token");
//         localStorage.removeItem("username");

//         alert("Выход выполнен успешно.");
//         setUsername(null); // Обнуляем состояние имени пользователя
//         navigate("/login"); // Перенаправляем на страницу входа
//       } else {
//         alert("Ошибка при выходе. Пожалуйста, попробуйте позже.");
//       }
//     } catch (error) {
//       console.error("Ошибка при выходе:", error);
//       alert("Произошла ошибка. Попробуйте позже.");
//     }
//   };

//   return (
//     <>
//       <Navbar bg="light" expand="lg" collapseOnSelect>
//         <Container fluid>
//           <Row className="w-100">
//             {/* Логотип - занимает 3 колонки на экранах среднего размера и выше */}
//             <Col
//               md={3}
//               className="d-flex justify-content-start align-items-center d-none d-md-block"
//             >
//               <Navbar.Brand href="/">
//                 <img
//                   src={header}
//                   alt="Логотип"
//                   className="d-inline-block align-top"
//                   style={{ maxHeight: "55px", maxWidth: "100%" }}
//                 />
//               </Navbar.Brand>
//             </Col>

//             {/* Центр - контактная информация (десктоп) */}
//             <Col
//               md={6}
//               className="d-none d-lg-flex justify-content-start align-items-center gap-4"
//             >
//               <div className="d-flex align-items-center">
//                 <i className="bi bi-clock me-2"></i>
//                 <span>Пн-Пт 9:00-18:00</span>
//               </div>
//               <div className="d-flex align-items-center">
//                 <i className="bi bi-telephone me-2"></i>
//                 <a
//                   href="tel:+79991234567"
//                   className="text-decoration-none text-dark"
//                 >
//                   +7 (999) 123-45-67
//                 </a>
//               </div>
//             </Col>

//             {/* Правая часть - ссылки и корзина */}
//             <Col
//               md={3}
//               className="d-flex justify-content-end align-items-center gap-2"
//             >
//               {/* Иконка корзины */}
//               <Nav.Link
//                 href="/cart"
//                 className="d-none d-lg-block me-3 position-relative"
//               >
//                 <i className="bi bi-cart fs-5"></i>
//                 {cartCount > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                     {cartCount}
//                   </span>
//                 )}
//               </Nav.Link>

//               {/* Если пользователь авторизован */}
//               {username ? (
//                 <div className="d-flex flex-column flex-lg-row gap-2">
//                   <span className="d-flex align-items-center">
//                     Привет, {username}
//                   </span>
//                   <Button
//                     variant="link"
//                     onClick={logout}
//                     className="d-flex align-items-center"
//                   >
//                     Выйти
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="d-flex flex-column flex-lg-row gap-2">
//                   <Nav.Link
//                     href="/login"
//                     className="d-flex align-items-center d-none d-lg-block"
//                   >
//                     <i className="bi bi-box-arrow-in-right me-2"></i>
//                     Вход
//                   </Nav.Link>
//                   <Nav.Link
//                     href="/register"
//                     className="d-flex align-items-center d-none d-lg-block"
//                   >
//                     <i className="bi bi-person-plus me-2"></i>
//                     Регистрация
//                   </Nav.Link>
//                 </div>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </Navbar>

//       {/* мобильная версия */}
//       <Navbar bg="light" expand="lg" collapseOnSelect>
//         <Container
//           fluid
//           className="mb-3 d-flex justify-content-center d-block d-sm-none"
//         >
//           <Row className="">
//             <Col>
//               <div>
//                 <a
//                   href="tel:+79991234567"
//                   className="text-decoration-none text-dark"
//                 >
//                   <i className="bi bi-telephone me-2"></i>
//                 </a>
//               </div>
//             </Col>
//             <Col>
//               <Navbar.Brand href="/">
//                 <img
//                   src={header}
//                   alt="Логотип"
//                   className="d-inline-block align-top"
//                   style={{ maxHeight: "30px" }}
//                 />
//               </Navbar.Brand>
//             </Col>
//             <Col>
//               {/* Иконка корзины только для мобильных устройств */}
//               <Nav.Link
//                 href="/cart"
//                 className="d-block d-sm-none mt-2 position-relative d-flex align-items-center"
//               >
//                 <i className="bi bi-cart me-2"></i>
//                 {cartCount > 0 && (
//                   <span
//                     className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                     style={{ width: "20px", height: "20px", fontSize: "12px" }}
//                   >
//                     {cartCount}
//                   </span>
//                 )}
//               </Nav.Link>
//             </Col>
//           </Row>
//         </Container>

//         {/* Бургер-меню для мобильных */}
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="w-100 mb-2"
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <div className="d-lg-none">
//             <div className="d-flex flex-column gap-2 mb-3">
//               {/* Ссылки авторизации */}
//               {!username ? (
//                 <div className="d-flex flex-column flex-lg-row gap-3">
//                   <Nav.Link href="/login" className="d-flex align-items-center">
//                     <i className="bi bi-box-arrow-in-right me-2"></i>
//                     Вход
//                   </Nav.Link>
//                   <Nav.Link
//                     href="/register"
//                     className="d-flex align-items-center"
//                   >
//                     <i className="bi bi-person-plus me-2"></i>
//                     Регистрация
//                   </Nav.Link>
//                 </div>
//               ) : (
//                 <div className="d-flex flex-column flex-lg-row gap-3">
//                   <span>Привет, {username}</span>
//                   <Button
//                     variant="link"
//                     onClick={logout}
//                     className="d-flex align-items-center"
//                   >
//                     Выйти
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default CustomNavbar;

import React, { useState, useEffect, useContext } from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import header from "../../assets/images/header.png";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext"; // Импортируем контекст

const CustomNavbar = () => {
  const { cartCount } = useContext(CartContext);
  const { username, setUsername } = useUser(); // Получаем username и setUsername из контекста
  const navigate = useNavigate();

  // Функция для выхода из аккаунта
  const logout = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");

    if (!refreshToken || !accessToken) {
      alert("Вы не авторизованы.");
      return;
    }

    const logoutData = {
      refresh_token: refreshToken,
    };

    console.log("Отправляем запрос на выход с данными:", logoutData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/logout/",
        logoutData, // отправляем refresh_token в теле
        {
          headers: {
            "Content-Type": "application/json", // Убедитесь, что заголовок правильный
            Authorization: `Bearer ${accessToken}`, // Добавляем access_token в заголовок
          },
        }
      );

      if (response.status === 200) {
        // Удаляем токены из localStorage
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("username");

        alert("Выход выполнен успешно.");
        setUsername(null); // Обнуляем состояние имени пользователя в контексте
        navigate("/login"); // Перенаправляем на страницу входа
      } else {
        alert("Ошибка при выходе. Пожалуйста, попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка при выходе:", error);
      alert("Произошла ошибка. Попробуйте позже.");
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <Row className="w-100">
            {/* Логотип - занимает 3 колонки на экранах среднего размера и выше */}
            <Col
              md={3}
              className="d-flex justify-content-start align-items-center d-none d-md-block"
            >
              <Navbar.Brand href="/">
                <img
                  src={header}
                  alt="Логотип"
                  className="d-inline-block align-top"
                  style={{ maxHeight: "55px", maxWidth: "100%" }}
                />
              </Navbar.Brand>
            </Col>

            {/* Центр - контактная информация (десктоп) */}
            <Col
              md={6}
              className="d-none d-lg-flex justify-content-start align-items-center gap-4"
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-clock me-2"></i>
                <span>Пн-Пт 9:00-18:00</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>
                <a
                  href="tel:+79991234567"
                  className="text-decoration-none text-dark"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </Col>

            {/* Правая часть - ссылки и корзина */}
            <Col
              md={3}
              className="d-flex justify-content-end align-items-center gap-2"
            >
              {/* Иконка корзины */}
              <Nav.Link
                href="/cart"
                className="d-none d-lg-block me-3 position-relative"
              >
                <i className="bi bi-cart fs-5"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Nav.Link>

              {/* Если пользователь авторизован */}
              {username ? (
                <div className="d-none d-lg-flex flex-column flex-lg-row gap-2">
                  {" "}
                  {/* скрыл на мобилках */}
                  <span className="d-flex align-items-center">
                    Привет, {username}
                  </span>
                  <span>
                    <Nav.Link
                      href="/user/orders" // ссылка на страницу заказов
                      className="d-flex align-items-center"
                    >
                      <i
                        className="bi bi-card-list"
                        style={{ fontSize: "1.5rem" }}
                      />{" "}
                      {/* Иконка заказов */}
                    </Nav.Link>
                  </span>
                  <Button
                    variant="danger"
                    onClick={logout}
                    className="d-flex align-items-center"
                  >
                    Выйти
                  </Button>
                </div>
              ) : (
                <div className="d-flex flex-column flex-lg-row gap-2">
                  <Nav.Link
                    href="/login"
                    className="d-flex align-items-center d-none d-lg-block"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Вход
                  </Nav.Link>
                  <Nav.Link
                    href="/register"
                    className="d-flex align-items-center d-none d-lg-block"
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Регистрация
                  </Nav.Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* мобильная версия */}
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container
          fluid
          className="mb-3 d-flex justify-content-center d-block d-sm-none"
        >
          <Row className="">
            <Col>
              <div>
                <a
                  href="tel:+79991234567"
                  className="text-decoration-none text-dark"
                >
                  <i className="bi bi-telephone me-2"></i>
                </a>
              </div>
            </Col>
            <Col>
              <Navbar.Brand href="/">
                <img
                  src={header}
                  alt="Логотип"
                  className="d-inline-block align-top"
                  style={{ maxHeight: "30px" }}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              {/* Иконка корзины только для мобильных устройств */}
              <Nav.Link
                href="/cart"
                className="d-block d-sm-none mt-2 position-relative d-flex align-items-center"
              >
                <i className="bi bi-cart me-2"></i>
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ width: "20px", height: "20px", fontSize: "12px" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Nav.Link>
            </Col>
          </Row>
        </Container>

        {/* Бургер-меню для мобильных */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="w-100 mb-2"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-lg-none">
            <div className="d-flex flex-column gap-2 mb-3">
              {/* Ссылки авторизации */}
              {!username ? (
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <Nav.Link href="/login" className="d-flex align-items-center">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Вход
                  </Nav.Link>
                  <Nav.Link
                    href="/register"
                    className="d-flex align-items-center"
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Регистрация
                  </Nav.Link>
                </div>
              ) : (
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <span>Привет, {username}</span>
                  <span>
                    <Nav.Link
                      href="/user/orders" // ссылка на страницу заказов
                      className="btn btn-info d-flex align-items-center"
                    >
                      <i
                        className="bi bi-card-list"
                        style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} // добавим отступ между иконкой и текстом
                      />{" "}
                      Ваши заказы
                    </Nav.Link>
                  </span>
                  <Button
                    variant="danger"
                    onClick={logout}
                    className="d-flex align-items-center"
                  >
                    Выйти
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
