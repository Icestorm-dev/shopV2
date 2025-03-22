// src/components/SearchBar.jsx
// import React, { useState } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import axios from 'axios';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   const handleSearch = () => {
//     if (searchQuery.trim() !== '') {
//       onSearch(searchQuery); // Отправляем запрос родительскому компоненту
//     }
//   };

//   return (
//     <Row className="mb-4">
//       <Col>
//         <Form.Control
//           type="text"
//           placeholder="Search products"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="d-inline-block w-75" // Поле ввода занимает 75% ширины
//         />
//         <Button
//           variant="primary"
//           onClick={handleSearch}
//           className="ms-2" // Добавляем отступ слева от поля поиска
//         >
//           Найти
//         </Button>
//       </Col>
//     </Row>
//   );
// };

// export default SearchBar;


// src/components/SearchBar.jsx

// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery); // Отправляем запрос родительскому компоненту
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onClearSearch(); // Отправляем очистку родительскому компоненту
  };

  return (
<Row className="mb-4 mt-4 d-flex flex-wrap align-items-center">
  {/* Колонка для поиска, занимает 6 из 12 частей на мобильных устройствах, 2 из 4 на десктопе */}
  <Col xs={6} md={6} className="d-flex">
    <Form.Control
      type="text"
      placeholder="Поиск продуктов"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="d-inline-block w-100" // Поле ввода занимает всю ширину колонки
    />
  </Col>

  {/* Колонка для кнопки поиска, занимает 3 из 12 частей на мобильных устройствах, 1 из 4 на десктопе */}
  <Col xs={3} md={3} className="d-flex align-items-center">
    <Button
      variant="primary"
      onClick={handleSearch}
      className="w-100" // Кнопка занимает всю ширину колонки
    >
      <i className="bi bi-search"></i> {/* Иконка поиска */}
    </Button>
  </Col>

  {/* Колонка для кнопки очистки, занимает 3 из 12 частей на мобильных устройствах, 1 из 4 на десктопе */}
  <Col xs={3} md={3} className="d-flex align-items-center">
    <Button
      variant="secondary"
      onClick={handleClearSearch}
      className="w-100" // Кнопка занимает всю ширину колонки
    >
      <i className="bi bi-x-circle"></i> {/* Иконка отмены */}
    </Button>
  </Col>
</Row>
  );
};

export default SearchBar;




