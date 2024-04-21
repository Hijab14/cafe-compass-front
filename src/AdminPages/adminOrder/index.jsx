import React, { useEffect, useState } from 'react';
import AdminOrdersCard from './AdminOrdersCard';
import AdminNavbar from './AdminNavbar';

function AdminOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data here and update the state
    // This is just placeholder data
    setOrders([
      {
        id: '1',
        customerName: 'John Doe',
        date: '2024-04-12',
        items: [
          { name: 'Burger', quantity: 2, price: 10.00 },
          { name: 'Fries', quantity: 1, price: 3.00 }
        ],
        phoneNumber: '(0312-1234567)'
      },
      {
        id: '2',
        customerName: 'Jane Doe',
        date: '2024-04-11',
        items: [
          { name: 'Pizza', quantity: 1, price: 15.00 },
          { name: 'Soda', quantity: 2, price: 2.00 }
        ],
        phoneNumber: '(0312-1234567)'
      },
      {
        id: '3',
        customerName: 'Alice Smith',
        date: '2024-04-10',
        items: [
          { name: 'Salad', quantity: 1, price: 7.00 },
          { name: 'Water', quantity: 1, price: 1.00 },
          { name: 'Sandwich', quantity: 1, price: 5.00},
          { name: 'Tea', quantity: 2, price: 2.00},
          { name: 'Pizza', quantity: 1, price: 15.00 },
          { name: 'Soda', quantity: 2, price: 2.00 }
        ],
        phoneNumber: '(0312-1234567)'
      },
      // Add more orders as needed
      {id: '4', customerName: 'Bob Brown', date: '2024-04-09', items: [{name: 'Sandwich', quantity: 1, price: 5.00}, {name: 'Tea', quantity: 2, price: 2.00}], phoneNumber: '(0312-1234567)'},
      {id: '5', customerName: 'Bob Brown', date: '2024-04-09', items: [{name: 'Sandwich', quantity: 1, price: 5.00}, {name: 'Tea', quantity: 2, price: 2.00}], phoneNumber: '(0312-1234567)'},
      {id: '6', customerName: 'Bob Brown', date: '2024-04-09', items: [{name: 'Sandwich', quantity: 1, price: 5.00}, {name: 'Tea', quantity: 2, price: 2.00}], phoneNumber: '(0312-1234567)'},

    ]);
    
  }, []);

  return (
    <div className="admin-orders-page"style={{marginTop:'90px'}}>
      <AdminNavbar restaurantName="Your Restaurant Name" />
      <h1>Admin Orders</h1>
      <div className="orders-scroll-container">
        <div className="orders-container">
          {orders.map(order => <AdminOrdersCard key={order.id} order={order} />)}
        </div>
      </div>
    </div>
  );
}

export default AdminOrder;
