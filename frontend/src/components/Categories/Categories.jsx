// // src/components/Categories.jsx
// import React, { useState, useEffect } from 'react';
// import { ListGroup, DropdownButton, Dropdown, Col } from 'react-bootstrap';
// import axios from 'axios';

// // import {
// //   Container,
// //   Row,
// //   Col,
// //   Card,
// //   ListGroup,
// //   Button,
// //   Dropdown,
// //   DropdownButton,
// //   Form,
// //   Carousel,
// // } from "react-bootstrap";


// const Categories = ({ selectedCategory, setSelectedCategory }) => {
//   const [categories, setCategories] = useState([]);
  
//   // Загрузка категорий с API
//   useEffect(() => {
//     axios
//       .get('http://127.0.0.1:8000/api/categories/')
//       .then((response) => {
//         setCategories(response.data.results); // Получаем список категорий из API
//       })
//       .catch((error) => {
//         console.error('Ошибка при загрузке категорий:', error);
//       });
//   }, []); // Запрос выполняется один раз при монтировании компонента

//   return (
//     <Col md={3} className="border-end">
//       <h4>Categories</h4>

//       {/* Dropdown для мобильных устройств */}
//       <DropdownButton
//         id="dropdown-basic-button"
//         title={selectedCategory}
//         className="d-block d-md-none" // Показывать только на мобильных
//         onSelect={(category) => setSelectedCategory(category)}
//       >
//         <Dropdown.Item eventKey="All">All</Dropdown.Item>
//         {categories.map((category) => (
//           <Dropdown.Item key={category.id} eventKey={category.name}>
//             {category.name}
//           </Dropdown.Item>
//         ))}
//       </DropdownButton>

//       {/* Список для больших экранов */}
//       <ListGroup className="d-none d-md-block">
//         <ListGroup.Item
//           onClick={() => setSelectedCategory('All')}
//           action
//           active={selectedCategory === 'All'}
//         >
//           All
//         </ListGroup.Item>
//         {categories.map((category) => (
//           <ListGroup.Item
//             key={category.id}
//             onClick={() => setSelectedCategory(category.name)}
//             action
//             active={selectedCategory === category.name}
//           >
//             {category.name}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Col>
//   );
// };

// export default Categories;




// src/components/Categories.jsx
import React, { useState, useEffect } from 'react';
import { ListGroup, DropdownButton, Dropdown, Col } from 'react-bootstrap';
import axios from 'axios';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  // Загрузка категорий с API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/categories/')
      .then((response) => {
        setCategories(response.data.results); // Получаем список категорий из API
      })
      .catch((error) => {
        console.error('Ошибка при загрузке категорий:', error);
      });
  }, []); // Запрос выполняется один раз при монтировании компонента

  return (
    <>
      <h4 className="text-center">категории</h4>

      {/* Dropdown для мобильных устройств */}
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedCategory}
        className="d-block d-md-none" // Показывать только на мобильных
        onSelect={(category) => setSelectedCategory(category)}
      >
        <Dropdown.Item eventKey="All">Все</Dropdown.Item>
        {categories.map((category) => (
          <Dropdown.Item key={category.id} eventKey={category.name}>
            {category.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      {/* Список для больших экранов */}
      <ListGroup className="d-none d-md-block">
        <ListGroup.Item
          onClick={() => setSelectedCategory('All')}
          action
          active={selectedCategory === 'All'}
        >
          Все
        </ListGroup.Item>
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            action
            active={selectedCategory === category.name}
          >
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Categories;
