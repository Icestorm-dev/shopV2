import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./about.css"

function About() {
  return (
    <Row className="mt-5">
      <Col md={4} className="mb-4">
        <div className="info-box">
          <h4>Гарантия</h4>
          <p>
            Весь товар, продаваемый в гипермаркете «Напитки.ру», имеет официальную гарантию. Заботясь о здоровье и качестве жизни наших покупателей, мы предлагаем только свежие товары.
          </p>
          <Link to="/GuaranteePage">Далее</Link>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="info-box">
          <h4>Контакты</h4>
          <p>
            Специалисты нашего контакт-центра помогут в решении любого вопроса. Пожалуйста, обращайтесь, нам важно приносить вам пользу.
          </p>
          <Link to="/Contacts">Далее</Link>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="info-box">
          <h4>Доставка</h4>
          <p>
            Заказав товары с доставкой, вы сокращаете путь заказа до входной двери квартиры или офиса и делаете более легким и удобным весь процесс покупки.
          </p>
          <Link to="/Delivery">Далее</Link>
        </div>
      </Col>
    </Row>
  );
}

export default About;
