import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaVk, FaTelegram, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import "./Footer.css"; // Подключаем стили
import header from "../../assets/images/header.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container fluid>
        <Row>
          {/* Логотип */}
          <Col lg={3} className="mb-3">
            <img
              src={header} // Укажите свой путь к логотипу
              alt="Логотип"
              className="footer-logo"
            />
          </Col>

          {/* Адрес */}
          <Col lg={3} className="mb-3">
            <p>
              <strong>Юридический адрес:</strong>
            </p>
            <p>С-Пб, Пр-кт Стачек, дом 45 корпус 2 Литера А</p>
          </Col>

          {/* Соц. сети */}
          <Col lg={3} className="mb-3">
            <p>
              <strong>Мы в соц. сетях</strong>
            </p>
            <div className="social-icons">
              <a
                href="https://vk.com/napitkiru"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon vk"
              >
                <FaVk size={40} />
              </a>
              <a
                href="https://t.me/napitki_ru"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon telegram"
              >
                <FaTelegram size={40} />
              </a>
            </div>
          </Col>

          {/* Контакты */}
          <Col lg={3} className="text-lg-right">
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="footer-icon" color="red" />{" "}
                <a href="mailto:napitki.ru@inbox.ru" className="footer-link">
                  E-mail:napitki.ru@inbox.ru
                </a>
              </li>
              <li>
                <FaPhone className="footer-icon" color="red" /> +7 962 684-67-94
              </li>
              <li>
                <FaClock className="footer-icon" color="red" /> Пн-Пт c 9:00 до
                17:00
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
