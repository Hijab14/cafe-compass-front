import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const items = useSelector(state => state.items);

  const getTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th><h4>Product</h4></th>
            <th><h4>Quantity</h4></th>
            <th><h4>Price</h4></th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td style={{ textAlign: 'center' }}>{item.quantity}</td>
              <td>Rs. {item.price}</td>
            </tr>
          ))}
          <tr>
            <td><h4>Total</h4></td>
            <td></td>
            <td><h4>Rs. {getTotalPrice()}</h4></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
