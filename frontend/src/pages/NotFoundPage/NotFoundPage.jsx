import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5); // Таймер на 5 секунд
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Редирект на главную после окончания таймера
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <Container className="text-center mt-5">
      <h1 className="display-3 text-danger">404</h1>
      <h2 className="mb-4">Упс! Такой страницы не существует.</h2>
      <p>Вы будете перенаправлены на главную через <strong>{countdown}</strong> секунд...</p>
      <Button variant="primary" onClick={() => navigate("/")}>Вернуться на главную</Button>
    </Container>
  );
};

export default NotFoundPage;
