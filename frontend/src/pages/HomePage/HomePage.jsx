import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Dropdown,
  DropdownButton,
  Form,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import slide1 from "../../assets/images/slider/1_slide.png";
// import slide2 from "../../assets/images/slider/2_slide.webp";
// import slide3 from "../../assets/images/slider/3_slide.webp";
// import slide4 from "../../assets/images/slider/4_slide.webp";

// import "./test.css";


import ProductCard from "../../components/ProductCard"
import About from "../../components/about/About";
import Carousel_top from "../../components/Carousel_top/Carousel_top"
import Categories from "../../components/Categories/Categories"
import SearchBar from "../..//components/SearchBar/SearchBar"


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); //категории


  const [searchQuery, setSearchQuery] = useState(""); //поиск

  const handleSearch = (query) => {
    setSearchQuery(query); // Обновляем строку поиска
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Очищаем строку поиска
  };



  return (
    <Container fluid>
      <Row>
        {/* Left Column: Categories */}
        <Col md={3} className="border-end">
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          {/* <h4>Categories</h4> */}

          {/* Dropdown for mobile */}
          {/* <DropdownButton
            id="dropdown-basic-button"
            title={selectedCategory}
            className="d-block d-md-none" // Show only on mobile
            onSelect={(category) => setSelectedCategory(category)}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            {categories.map((category, index) => (
              <Dropdown.Item key={index} eventKey={category}>
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton> */}

          {/* List for larger screens */}
          {/* <ListGroup className="d-none d-md-block">
            <ListGroup.Item
              onClick={() => setSelectedCategory("All")}
              action
              active={selectedCategory === "All"}
            >
              All
            </ListGroup.Item>
            {categories.map((category, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => setSelectedCategory(category)}
                action
                active={selectedCategory === category}
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup> */}
        </Col>

        {/* Right Column: Product Cards */}
        <Col md={9}>
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
          {/* <Row className="mb-4">
            <Col>
              <Form.Control
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="d-inline-block w-75" // Поле ввода занимает 75% ширины
              />
              <Button
                variant="primary"
                onClick={() => console.log("Search clicked")}
                className="ms-2" // Добавляем отступ слева от поля поиска
              >
                Найти
              </Button>
            </Col>
          </Row> */}

          {/* Banner Carousel */}
          {/* <Row className="mb-4">
            <Col>
              <Carousel className="custom-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row> */}

          <Carousel_top />

          {/* Product Cards */}
          {/* <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}


          <ProductCard selectedCategory={selectedCategory } searchQuery={searchQuery} />
          <About />

          {/* Блоки для информации о Гарантии, Контактах и Доставке */}
          {/* <Row className="mt-5">
            <Col md={4} className="mb-4">
              <div className="info-box">
                <h4>Гарантия</h4>
                <p>
                  У нас есть гарантия на все товары. Условия возврата и обмена —
                  подробности по запросу.
                </p>
                <Link to="/GuaranteePage">Далее</Link>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="info-box">
                <h4>Контакты</h4>
                <p>
                  Наши контактные данные: Телефон — +1 234 567 890, Email —
                  support@example.com
                </p>
                <Link to="/Contacts">далее</Link>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="info-box">
                <h4>Доставка</h4>
                <p>
                  Мы предлагаем бесплатную доставку по всей территории страны.
                  Сроки доставки — 3-5 рабочих дней.
                </p>
                <Link to="/Delivery">далее</Link>
              </div>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
