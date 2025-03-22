// src/pages/UserOrderPage.js
import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Получаем access_token из localStorage
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      alert("Вы не авторизованы. Пожалуйста, войдите в систему.");
      navigate("/login"); // Перенаправляем на страницу входа
      return;
    }

    // Запрос на получение списка заказов пользователя
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/orders/", {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Передаем access_token
          },
        });
        setOrders(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке заказов.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  return (
    <Container fluid>
      <h1 className="text-center my-4">Мои заказы</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Статус</th>
              <th>Дата создания</th>
              <th>Общая цена</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.first_name}</td>
                <td>{order.last_name}</td>
                <td>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
                <td>{order.total_price} ₽</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default UserOrderPage;
