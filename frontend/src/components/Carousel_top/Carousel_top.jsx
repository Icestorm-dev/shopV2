import React from 'react';

import slide1 from "../../assets/images/slider/1_slide.png";
import slide2 from "../../assets/images/slider/2_slide.webp";
import slide3 from "../../assets/images/slider/3_slide.webp";
import slide4 from "../../assets/images/slider/4_slide.webp";


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

import "./Carousel_top.css"

function Carousel_top() {
  return (
    <Container fluid>
    <Row className="mb-4">
      <Col>
        <Carousel className="custom-carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    </Container>
  );
}

export default Carousel_top;
