import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {

  const items = useSelector(state => state.items);
  const gettotalprice = () => {
    let total = 0;
    items.forEach(item => {
      total = total + item.price*item.quantity;
    });
    return total.toFixed(2);
  }
  return (
    <div className="container">
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th><h4>Product</h4></th>
            <th><h4>Price</h4></th>
          </tr>  
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
          <td><h4>Total</h4></td>
          <td><h4>{gettotalprice()}</h4></td>
        </tbody>
      </table>

    </div>
  );

}

export default Index;