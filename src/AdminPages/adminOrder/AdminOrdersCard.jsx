import React from 'react';
import './AdminOrdersCard.css';  // Import the CSS file

function AdminOrdersCard({ order }) {
  const totalPrice = order.items.reduce((total, item) => total + item.quantity * item.price, 0);
  return (
    <div className="order-card">
      <h3>Customer Details</h3>
      <p>{order.customerName} - {order.phoneNumber}</p>
      <h3>Order Details</h3>
      {order.items.map(item => (
        <div className="order-details">
          <span>{item.name} ({item.quantity})</span>
          <span>${item.price}</span>
        </div>
      ))}
      <div className="total-price">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <button className="complete-btn">Mark as Completed</button>
    </div>
  );
}

export default AdminOrdersCard;

// expecting the order prop to be an object with the following structure:
// {
//   "id": "123456",
//   "customerName": "Jane Doe",
//   "phoneNumber": "555-1234",
//   "items": [
//     { "name": "Burger", "quantity": 2, "price": 10.00 },
//     { "name": "Fries", "quantity": 1, "price": 3.00 }
//   ]
// }
