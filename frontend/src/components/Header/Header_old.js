//work
import React from "react";
import { Container, Row, Col, Navbar, Nav, Image } from "react-bootstrap";
import "./Header.css"; // Импортируем файл стилей для дополнительного оформления
import { BiPhone } from "react-icons/bi";

import header from "../../assets/images/header.png";
const Header = () => {
  return (
    <header>
      {/* Навигационная панель */}
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Логотип слева */}
          <Navbar.Brand href="/" className="d-none d-md-block">
            <Image
              src={header} // Замените на путь к вашему логотипу
              alt="Логотип"
              className="logo"
            />
          </Navbar.Brand>

          {/* Кнопка для мобильных устройств */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Навигационные ссылки */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Row className="w-100 align-items-center">
              {/* Телефон и график работы по центру */}
              <Col xs={12} md={8} className="text-center">
                <span className="header-info">
                  <a href="tel:+71234567890" className="phone-number">
                    <BiPhone className="phone-icon" /> +7 962 684-67-94
                  </a>
                  {/* &nbsp;|&nbsp; Пн-Пт 9:00-18:00 */}
                </span>
                <span>&nbsp;|&nbsp; Пн-Пт 9:00-18:00</span>
              </Col>
              {/* Ссылки на вход и регистрацию справа */}
              <Col xs={12} md={4} className="text-md-right">
                <Nav>
                  <Nav.Link href="/login">Вход</Nav.Link>
                  <Nav.Link href="/register">Регистрация</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Container, Navbar, Nav, Image } from "react-bootstrap";
// import "./Header.css";
// import { BiPhone, BiCart } from "react-icons/bi";
// import header from "../../assets/images/header.png";

// const Header = () => {
//   return (
//     <header>
//       <Navbar bg="light" expand="lg" collapseOnSelect>
//         <Container>
//           {/* Логотип только для десктопа */}
//           <Navbar.Brand href="/" className="d-none d-md-block">
//             <Image src={header} alt="Логотип" className="desktop-logo" />
//           </Navbar.Brand>

//           {/* Иконка корзины для мобильных */}
//           <Nav.Link href="/cart" className="d-md-none ms-auto me-3">
//             <BiCart className="cart-icon" />
//           </Nav.Link>

//           <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

//           <Navbar.Collapse id="navbar-nav" className="justify-content-between">
//             {/* Мобильный контент */}
//             <div className="d-md-none text-center mb-4">
//               <Image src={header} alt="Логотип" className="mobile-logo mb-3" />
//               <div className="d-flex flex-column align-items-center">
//                 <a href="tel:+79626846794" className="nav-link phone-link">
//                   <BiPhone className="phone-icon" /> +7 962 684-67-94
//                 </a>
//                 <div className="work-hours mt-2">Пн-Пт 9:00-18:00</div>
//               </div>
//             </div>

//             {/* Десктоп контент */}
//             <div className="d-none d-md-flex flex-column flex-lg-row align-items-center">
//               <div className="me-lg-4">
//                 <a href="tel:+79626846794" className="nav-link phone-link">
//                   <BiPhone className="phone-icon" /> +7 962 684-67-94
//                 </a>
//               </div>
//               <span className="separator">|</span>
//               <div className="mx-lg-3 work-hours">Пн-Пт 9:00-18:00</div>
//             </div>

//             {/* Навигационные ссылки */}
//             <Nav className="mt-3 mt-lg-0">
//               <Nav.Link href="/login" className="nav-link">
//                 Вход
//               </Nav.Link>
//               <Nav.Link href="/register" className="nav-link register-link">
//                 Регистрация
//               </Nav.Link>
//               <Nav.Link href="/cart" className="nav-link d-none d-md-block">
//                 <BiCart className="cart-icon" /> Корзина
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>

//           {/* Иконка корзины для десктопа */}
//           <Nav.Link href="/cart" className="d-none d-md-block ms-3">
//             <BiCart className="cart-icon" />
//           </Nav.Link>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Navbar,
//   Nav,
//   Image,
//   Badge,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { BiPhone } from "react-icons/bi"; // Иконка телефона

// import header from "../../assets/images/header.png";
// import "./Header.css"; // Импортируем файл стилей для дополнительного оформления

// const Header = () => {
//   const [cartQuantity, setCartQuantity] = useState(0);

//   // Функция для получения количества товаров в корзине из localStorage
//   const getCartQuantity = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   // Обновляем количество товаров в корзине
//   const updateCartQuantity = () => {
//     const quantity = getCartQuantity();
//     setCartQuantity(quantity);
//   };

//   useEffect(() => {
//     // Получаем количество товаров в корзине при монтировании компонента
//     updateCartQuantity();

//     // Слушаем изменения в localStorage для обновления состояния
//     const updateCart = () => {
//       updateCartQuantity();
//     };

//     // Добавляем слушатель события для отслеживания изменений в localStorage
//     window.addEventListener("storage", updateCart);

//     // Очистка события при размонтировании компонента
//     return () => {
//       window.removeEventListener("storage", updateCart);
//     };
//   }, []); // Пустой массив зависимостей, чтобы этот эффект выполнялся только один раз

//   return (
//     <header>
//       {/* Навигационная панель */}
//       <Navbar bg="light" expand="lg">
//         <Container>
//           {/* Логотип слева */}
//           <Navbar.Brand href="/" className="d-none d-md-block">
//             <Image
//               src={header} // Замените на путь к вашему логотипу
//               alt="Логотип"
//               className="logo"
//             />
//           </Navbar.Brand>

//           {/* Кнопка для мобильных устройств */}
//           <Navbar.Toggle aria-controls="navbar-nav" />

//           {/* Навигационные ссылки */}
//           <Navbar.Collapse id="navbar-nav" className="justify-content-between">
//             <Row className="w-100 align-items-center">
//               {/* Телефон и график работы по центру */}
//               <Col xs={12} md={8} className="text-center">
//                 <span className="header-info">
//                   <a href="tel:+71234567890" className="phone-number">
//                     <BiPhone className="phone-icon" /> +7 962 684-67-94
//                   </a>
//                 </span>
//                 <span>&nbsp;|&nbsp; Пн-Пт 9:00-18:00</span>
//               </Col>

//               {/* Ссылки на вход и регистрацию справа */}
//               <Col xs={12} md={4} className="text-md-right">
//                 <Nav className="justify-content-end">
//                   <Nav.Link href="/login">Вход</Nav.Link>
//                   <Nav.Link href="/register">Регистрация</Nav.Link>

//                   {/* Иконка корзины */}
//                   <Link
//                     to="/cart"
//                     className="cart-icon-link d-flex align-items-center text-decoration-none ms-3"
//                   >
//                     <i
//                       className="bi bi-cart"
//                       style={{ fontSize: "1.5rem", color: "#333" }}
//                     ></i>
//                     {/* Если в корзине есть товары, отображаем Badge с количеством */}
//                     {cartQuantity > 0 && (
//                       <Badge bg="danger" className="ms-2">
//                         {cartQuantity}
//                       </Badge>
//                     )}
//                   </Link>
//                 </Nav>
//               </Col>
//             </Row>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
