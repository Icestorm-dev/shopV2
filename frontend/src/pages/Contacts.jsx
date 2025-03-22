import React from 'react';

function Contacts() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Контакты</h1>
      <div className="card p-4">
        <div className="mb-3">
          <p><strong>Время приёма заказов через сайт:</strong></p>
          <p>Круглосуточно 24 часа в сутки, 7 дней в неделю</p>
        </div>
        <div>
          <p><strong>Время приёма заказов по телефону:</strong></p>
          <p>С Пн-Пт с 9.00 до 17.00</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
