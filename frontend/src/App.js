// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//work
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import GuaranteePage from "./pages/GuaranteePage";
// import Contacts from "./pages/Contacts";
// import Delivery from "./pages/Delivery";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; // Страница 404
// import CartPage from "./pages/CartPage/CartPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

// import ScrollToTop from "./ScrollToTop"; // прокрутка вверх страницы
// import { CartProvider } from "./context/CartContext";

// const App = () => {

//   return (
//     <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
//       <CartProvider>
//         <Router>
//           <ScrollToTop /> {/* Добавляем компонент */}
//           <Header />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/GuaranteePage" element={<GuaranteePage />} />
//             <Route path="/Contacts" element={<Contacts />} />
//             <Route path="/Delivery" element={<Delivery />} />
//             <Route path="/Cart" element={<CartPage />} />
//             <Route path="Checkout" element={<CheckoutPage />} />
//             <Route path="*" element={<NotFoundPage />} />{" "}
//             {/* Обработчик всех неизвестных маршрутов */}
//           </Routes>
//           <Footer />
//         </Router>
//       </CartProvider>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GuaranteePage from "./pages/GuaranteePage";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; // Страница 404
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import UserOrders from "./pages/UserOrderPage/UserOrderPage"; // Страница с заказами пользователя
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute"; // Импортируем PrivateRoute

import ScrollToTop from "./ScrollToTop"; // прокрутка вверх страницы

const App = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <CartProvider>
        <Router>
          <ScrollToTop /> {/* Добавляем компонент */}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/GuaranteePage" element={<GuaranteePage />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/Checkout" element={<CheckoutPage />} />

            {/* Приватный маршрут для страницы с заказами */}
            <Route
              path="/user/orders"
              element={<PrivateRoute element={UserOrders} />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
