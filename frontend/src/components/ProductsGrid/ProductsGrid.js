import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ProductsGrid = ({ products }) => {
  return (
    <Row className="g-4">
      {products.length > 0 ? (
        products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <p>Товары в этой категории отсутствуют</p>
        </Col>
      )}
    </Row>
  );
};

export default ProductsGrid;
