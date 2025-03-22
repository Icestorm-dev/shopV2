//work

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Container, Modal } from "react-bootstrap";

// export default function ProductCard() {
//   const [products, setProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Функция для загрузки товаров
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/products") // Укажите ваш реальный URL API
//       .then((response) => {
//         setProducts(response.data.results); // Извлекаем данные из ответа
//       })
//       .catch((error) => {
//         console.error("Ошибка загрузки товаров:", error);
//       });
//   }, []); // Пустой массив в зависимости гарантирует, что запрос выполнится только один раз при монтировании компонента

//   // Открыть модальное окно
//   const handleShowModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   // Закрыть модальное окно
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <Container>
//       <h1 className="text-center mb-4">Наши Товары</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "100%", height: "200px", objectFit: "contain" }}
//               />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text className="product-description">
//                   {product.description.length > 100
//                     ? product.description.slice(0, 100) + "..." // Ограничиваем описание до 100 символов
//                     : product.description}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за шт. - {product.price} руб.</strong>
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за уп. - {product.package_price} руб.</strong>
//                 </Card.Text>
//                 <Button variant="primary">Добавить в корзину</Button>
//                 <Button variant="link" onClick={() => handleShowModal(product)}>
//                   Подробнее
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Модальное окно с полным описанием */}
//       {selectedProduct && (
//         <Modal show={showModal} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedProduct.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>{selectedProduct.description}</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Закрыть
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </Container>
//   );
// }

// src/components/ProductCard.jsx

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Container } from "react-bootstrap";

// const ProductCard = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);

//   // Загружаем товары с фильтрацией по категории
//   useEffect(() => {
//     const fetchProducts = () => {
//       const categoryQuery =
//         selectedCategory !== "All" ? `&category=${selectedCategory}` : "";
//       axios
//         .get(`http://127.0.0.1:8000/api/products/?name=${categoryQuery}`)
//         .then((response) => {
//           setProducts(response.data.results); // Извлекаем данные о товарах
//         })
//         .catch((error) => {
//           console.error("Ошибка загрузки товаров:", error);
//         });
//     };

//     fetchProducts();
//   }, [selectedCategory]); // Запрос выполняется каждый раз, когда меняется категория

//   return (
//     <Container>
//       <h1 className="text-center mb-4">Наши Товары</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "100%", height: "200px", objectFit: "contain" }}
//               />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text className="product-description">
//                   {product.description.length > 100
//                     ? product.description.slice(0, 100) + "..." // Ограничиваем описание до 100 символов
//                     : product.description}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за шт. - {product.price} руб.</strong>
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за уп. - {product.package_price} руб.</strong>
//                 </Card.Text>
//                 <Button variant="primary">Добавить в корзину</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductCard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Container, Modal } from "react-bootstrap";

// const ProductCard = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false); // Состояние для показа модального окна
//   const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для выбранного товара

//   // Загружаем товары с фильтрацией по категории
//   useEffect(() => {
//     const fetchProducts = () => {
//       const categoryQuery =
//         selectedCategory !== "All" ? `&category=${selectedCategory}` : "";
//       axios
//         .get(`http://127.0.0.1:8000/api/products/?name=${categoryQuery}`)
//         .then((response) => {
//           setProducts(response.data.results); // Извлекаем данные о товарах
//         })
//         .catch((error) => {
//           console.error("Ошибка загрузки товаров:", error);
//         });
//     };

//     fetchProducts();
//   }, [selectedCategory]); // Запрос выполняется каждый раз, когда меняется категория

//   // Открыть модальное окно
//   const handleShowModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   // Закрыть модальное окно
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <Container>
//       <h1 className="text-center mb-4">Наши Товары</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "100%", height: "200px", objectFit: "contain" }}
//               />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text className="product-description">
//                   {product.description.length > 100
//                     ? product.description.slice(0, 100) + "..." // Ограничиваем описание до 100 символов
//                     : product.description}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за шт. - {product.price} руб.</strong>
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за уп. - {product.package_price} руб.</strong>
//                 </Card.Text>
//                 <Button variant="primary">Добавить в корзину</Button>
//                 <Button variant="link" onClick={() => handleShowModal(product)}>
//                   Подробнее
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Модальное окно с полным описанием */}
//       {selectedProduct && (
//         <Modal show={showModal} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedProduct.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>{selectedProduct.description}</p>
//             <p>
//               <strong>Цена за шт. - {selectedProduct.price} руб.</strong>
//             </p>
//             <p>
//               <strong>
//                 Цена за уп. - {selectedProduct.package_price} руб.
//               </strong>
//             </p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Закрыть
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </Container>
//   );
// };

// export default ProductCard;

// src/components/ProductCard.jsx

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, Col, Card, Button, Container, Modal } from "react-bootstrap";

// const ProductCard = ({ selectedCategory, searchQuery }) => {
//   const [products, setProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Загружаем товары с фильтрацией по категории и поисковому запросу
//   useEffect(() => {
//     const fetchProducts = () => {
//       const categoryQuery =
//         selectedCategory !== "All" ? `&category=${selectedCategory}` : "";
//       const searchQueryParam = searchQuery ? `&name=${searchQuery}` : "";

//       axios
//         .get(
//           `http://127.0.0.1:8000/api/products/?${categoryQuery}${searchQueryParam}`
//         )
//         .then((response) => {
//           setProducts(response.data.results); // Извлекаем данные о товарах
//         })
//         .catch((error) => {
//           console.error("Ошибка загрузки товаров:", error);
//         });
//     };

//     fetchProducts();
//   }, [selectedCategory, searchQuery]); // Запрос выполняется при изменении категории или поискового запроса

//   const handleShowModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <Container>
//       <h1 className="text-center mb-4">Наши Товары</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "100%", height: "200px", objectFit: "contain" }}
//               />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text className="product-description">
//                   {product.description.length > 100
//                     ? product.description.slice(0, 100) + "..."
//                     : product.description}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за шт. - {product.price} руб.</strong>
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Цена за уп. - {product.package_price} руб.</strong>
//                 </Card.Text>
//                 <Button variant="primary">Добавить в корзину</Button>
//                 <Button variant="link" onClick={() => handleShowModal(product)}>
//                   Подробнее
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Модальное окно с полным описанием */}
//       {selectedProduct && (
//         <Modal show={showModal} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>{selectedProduct.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>{selectedProduct.description}</p>
//             <p>
//               <strong>Цена за шт. - {selectedProduct.price} руб.</strong>
//             </p>
//             <p>
//               <strong>
//                 Цена за уп. - {selectedProduct.package_price} руб.
//               </strong>
//             </p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Закрыть
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </Container>
//   );
// };

// export default ProductCard;

// src/components/ProductCard.jsx
// src/components/ProductCard.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Container, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

const ProductCard = ({ selectedCategory, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { addToCart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Загружаем товары с фильтрацией по категории или поисковому запросу
  useEffect(() => {
    const fetchProducts = () => {
      const categoryQuery =
        selectedCategory !== "All" ? `&category=${selectedCategory}` : "";
      const nameQuery = searchQuery ? `&name=${searchQuery}` : "";

      axios
        .get(`http://127.0.0.1:8000/api/products/?${categoryQuery}${nameQuery}`)
        .then((response) => {
          const data = response.data.results;
          if (data.length === 0) {
            setErrorMessage("Товары не найдены");
          } else {
            setErrorMessage("");
          }
          setProducts(data); // Извлекаем данные о товарах
        })
        .catch((error) => {
          console.error("Ошибка загрузки товаров:", error);
        });
    };

    fetchProducts();
  }, [selectedCategory, searchQuery]); // Запрос выполняется каждый раз, когда меняется категория или поисковый запрос

  // Открыть модальное окно
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Закрыть модальное окно
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Функция для добавления товара в корзину
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    addToCart(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    // alert(`${product.name} добавлен в корзину!`);

    // Устанавливаем сообщение и показываем уведомление
    setToastMessage(`${product.name} добавлен в корзину!`);
    setShowToast(true);
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Наши Товары</h1>
      <Row>
        {errorMessage ? (
          <Col className="text-center">
            <p>{errorMessage}</p>
          </Col>
        ) : (
          products.map((product) => (
            // <Col key={product.id} md={4} className="mb-4">
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
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
                <Card.Body>
                  <Card.Title className="product-name">
                    {product.name.length > 40
                      ? product.name.slice(0, 40) + "..." // Ограничиваем название до 20 символов
                      : product.name}
                  </Card.Title>
                  <Card.Text className="product-description">
                    {product.description.length > 100
                      ? product.description.slice(0, 100) + "..." // Ограничиваем описание до 100 символов
                      : product.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Цена за шт. - {product.price} ₽</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Цена за уп. - {product.package_price} ₽</strong>
                  </Card.Text>
                  <Container
                    fluid
                    // className="d-flex justify-content-between align-items-center mt-3"
                    className="d-flex flex-column gap-2 mt-3"
                  >
                    <Button
                      variant="secondary"
                      onClick={() => handleShowModal(product)}
                    >
                      <InfoCircle />
                      Подробнее
                    </Button>

                    <Button
                      variant="success"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart className="me-2" /> Добавить в корзину
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Модальное окно с полным описанием */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Добавляем изображение товара */}
            <Card.Img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "20px", // Добавляем отступ снизу
              }}
            />
            {/* <p>{selectedProduct.description}</p> */}
            {/* Используем textarea для отображения описания товара */}
            <textarea
              className="form-control"
              value={selectedProduct.description}
              readOnly
              style={{
                height: "250px", // Максимальная высота области текста
                resize: "none", // Запрещаем изменение размера
                overflowY: "auto", // Вертикальная прокрутка
                backgroundColor: "#f9f9f9",
              }}
            />
            <p>
              <strong>Цена за шт. - {selectedProduct.price} ₽</strong>
            </p>
            <p>
              <strong>Цена за уп. - {selectedProduct.package_price} ₽</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => {
                handleAddToCart(selectedProduct); // Добавляет товар в корзину
                handleCloseModal(); // Закрывает модальное окно
              }}
            >
              <FaShoppingCart className="me-2" /> Добавить в корзину
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ProductCard;
