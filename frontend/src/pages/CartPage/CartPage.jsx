// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//   }, []);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
//     const updatedCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.package_price * item.quantity), 0);
//   };

//   return (
//     <Container>
//       <h1 className="text-center my-4">Корзина</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-center">Ваша корзина пуста</p>
//       ) : (
//         <ListGroup>
//           {cartItems.map(item => (
//             <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
//               <div className="d-flex flex-column flex-sm-row align-items-center">
//                 {/* Название товара теперь всегда отображается */}
//                 <span className="mr-3">{item.name} - {item.package_price} руб.</span>
                
//                 <div className="d-flex flex-column flex-sm-row align-items-center ml-sm-4 mt-2 mt-sm-0">
//                   <Card className="p-2 border rounded shadow-sm" style={{ width: '150px', marginRight: '10px' }}>
//                     <div className="d-flex justify-content-center align-items-center">
//                       <Button
//                         variant="outline-secondary"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="px-2"
//                       >
//                         -
//                       </Button>
//                       <span className="mx-3">{item.quantity}</span>
//                       <Button
//                         variant="outline-secondary"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="px-2"
//                       >
//                         +
//                       </Button>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//               <div className="d-flex flex-column align-items-center">
//                 <span>{(item.package_price * item.quantity).toFixed(2)} руб.</span>
//                 <Button
//                   variant="danger"
//                   onClick={() => removeFromCart(item.id)}
//                   className="mt-2"
//                 >
//                   Удалить
//                 </Button>
//               </div>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//       <div className="d-flex justify-content-between mt-4">
//         <Button onClick={() => navigate('/')} variant="primary">Вернуться к покупкам</Button>
//         <h3>Общая сумма: {calculateTotal().toFixed(2)} руб.</h3>
//         <Button onClick={() => navigate('/')} variant="primary">Оформить заказ</Button>
        
//       </div>
//     </Container>
//   );
// };

// export default CartPage;





// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//   }, []);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
//     const updatedCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       const itemPrice = item.package_price ? item.package_price : item.price;
//       return total + (itemPrice * item.quantity);
//     }, 0);
//   };


//   return (
//     <Container>
//       <h1 className="text-center my-4">Корзина</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-center">Ваша корзина пуста</p>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th className="text-center">Продукт</th>
//               <th className="text-center">Цена</th>
//               <th className="text-center">Количество</th>
//               <th className="text-center">Общая стоимость</th>
//               <th className="text-center">Удалить</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map(item => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.package_price ? item.package_price : item.price} руб.</td>
//                 <td>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <Button
//                       variant="outline-secondary"
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </Button>
//                     <span className="mx-3">{item.quantity}</span>
//                     <Button
//                       variant="outline-secondary"
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     >
//                       +
//                     </Button>
//                   </div>
//                 </td>
//                 <td>{((item.package_price ? item.package_price : item.price) * item.quantity).toFixed(2)} руб.</td>
//                 <td className="text-center">
//                 <i
//                 className="bi bi-trash text-danger"
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => removeFromCart(item.id)}
//                 ></i>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//       <h3>Общая сумма: {calculateTotal().toFixed(2)} ₽</h3>
//       <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
//         <Button onClick={() => navigate('/')} variant="primary">Вернуться к покупкам</Button>
        
//         <Button onClick={() => navigate('/')} variant="success">Оформить заказ</Button>
//       </div>
//     </Container>
//   );
// };

// export default CartPage;



//work
// import React, { useContext } from 'react';
// import { Container, Button, Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => {
//       const itemPrice = item.package_price ? item.package_price : item.price;
//       return total + (itemPrice * item.quantity);
//     }, 0);
//   };

//   return (
//     <Container>
//       <h1 className="text-center my-4">Корзина</h1>
//       {cart.length === 0 ? (
//         <p className="text-center">Ваша корзина пуста</p>
//       ) : (
//         <>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th className="text-center">Продукт</th>
//                 <th className="text-center">Цена</th>
//                 <th className="text-center">Количество</th>
//                 <th className="text-center">Общая стоимость</th>
//                 <th className="text-center">Удалить</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.package_price ? item.package_price : item.price} руб.</td>
//                   <td>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <Button
//                         variant="outline-secondary"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                       >
//                         -
//                       </Button>
//                       <span className="mx-3">{item.quantity}</span>
//                       <Button
//                         variant="outline-secondary"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         +
//                       </Button>
//                     </div>
//                   </td>
//                   <td>
//                     {(
//                       (item.package_price ? item.package_price : item.price) * item.quantity
//                     ).toFixed(2)} руб.
//                   </td>
//                   <td className="text-center">
//                     <i
//                       className="bi bi-trash text-danger"
//                       style={{ cursor: 'pointer' }}
//                       onClick={() => removeFromCart(item.id)}
//                     ></i>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
          
//           <h3 className="mt-4">Общая сумма: {calculateTotal().toFixed(2)} ₽</h3>
          
//           <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
//             <Button onClick={() => navigate('/')} variant="primary">
//               Вернуться к покупкам
//             </Button>
//             <Button onClick={() => navigate('/checkout')} variant="success">
//               Оформить заказ
//             </Button>
//           </div>
//         </>
//       )}
//     </Container>
//   );
// };

// export default CartPage;



// import React, { useContext } from 'react';
// import { Container, Button, Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => {
//       const itemPrice = item.package_price ? item.package_price : item.price;
//       return total + (itemPrice * item.quantity);
//     }, 0);
//   };

//   return (
//     <Container>
//       <h1 className="text-center my-4">Корзина</h1>
//       {cart.length === 0 ? (
//         <p className="text-center">Ваша корзина пуста</p>
//       ) : (
//         <>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th className="text-center">Продукт</th>
//                 <th className="text-center">Количество</th>
//                 <th className="text-center">Стоимость</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>
//                     <div className="d-flex flex-column align-items-center">
//                       <div className="d-flex justify-content-between align-items-center mb-2 w-100">
//                         <Button
//                           variant="outline-secondary"
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           disabled={item.quantity <= 1}
//                           style={{ width: '40px' }}
//                         >
//                           -
//                         </Button>
//                         <span className="mx-3">{item.quantity}</span>
//                         <Button
//                           variant="outline-secondary"
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           style={{ width: '40px' }}
//                         >
//                           +
//                         </Button>
//                       </div>
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => removeFromCart(item.id)}
//                         size="sm"
//                       >
//                         <i className="bi bi-trash"></i> Удалить
//                       </Button>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     {(
//                       (item.package_price ? item.package_price : item.price) * item.quantity
//                     ).toFixed(2)} руб.
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
          
//           <h3 className="mt-4 text-end">Общая сумма: {calculateTotal().toFixed(2)} ₽</h3>
          
//           <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
//             <Button onClick={() => navigate('/')} variant="primary">
//               Вернуться к покупкам
//             </Button>
//             <Button onClick={() => navigate('/checkout')} variant="success">
//               Оформить заказ
//             </Button>
//           </div>
//         </>
//       )}
//     </Container>
//   );
// };

// export default CartPage;




import React, { useContext } from 'react';
import { Container, Button, Table, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.package_price ? item.package_price : item.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <Container fluid>
      <h1 className="text-center my-4">Корзина</h1>
      {cart.length === 0 ? (
        <p className="text-center">Ваша корзина пуста</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center">НАИМЕНОВАНИЕ</th>
                <th className="text-center">КОЛ-ВО</th>
                <th className="text-center">ЦЕНА</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle text-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="d-flex justify-content-center align-items-center mb-2" style={{ width: '150px' }}>
                        <Button
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          style={{ width: '40px' }}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="number"
                          value={item.quantity}
                          onChange={e => {
                            const newQuantity = parseInt(e.target.value, 10) || 1;
                            updateQuantity(item.id, newQuantity > 0 ? newQuantity : 1);
                          }}
                          className="mx-2 text-center"
                          style={{ width: '60px' }}
                          min="1"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ width: '40px' }}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="outline-danger"
                        onClick={() => removeFromCart(item.id)}
                        style={{ width: '150px' }}
                      >
                        <i className="bi bi-trash"></i> Удалить
                      </Button>
                    </div>
                  </td>
                  <td className="align-middle text-center">
                    {(
                      (item.package_price ? item.package_price : item.price) * item.quantity
                    ).toFixed(2)} ₽
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h3 className="mt-4 text-end">Общая сумма: {calculateTotal().toFixed(2)} ₽</h3>

          <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
            <Button onClick={() => navigate('/')} variant="primary">
              Вернуться к покупкам
            </Button>
            <Button onClick={() => navigate('/checkout')} variant="success">
              Оформить заказ
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
