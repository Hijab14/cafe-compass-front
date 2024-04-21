// src/components/ShoppingCart.js
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from '/Users/hijabfatima/Documents/SE/cafe-compass-front/src/state'
import { Link } from 'react-router-dom';

const Index = () => {
  const cartItems = useSelector(state => state.items);
  const dispatch = useDispatch()
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price*item.quantity;
        console.log( total);

    });
    return total;
  };

  const handleRemove = (item) => {
    dispatch(actionCreators.removeitem(item));
  }


  return (
    <div className="container mt-4">
      <div className="card bg-white">
        <div className="card-header text-light" style={{backgroundColor:'#0f9ea7'}}>
          <h3>Shopping Cart</h3>
        </div>
        <div className="card-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                  <button type="button" class="btn btn-warning" onClick={()=>handleRemove(item)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <strong>Total Price: Rs. {getTotalPrice()}</strong>
          </div>
        </div>
        <div className="card-footer text-right">
          <Link to="/checkOut"><button className="btn btn-dark" style={{backgroundColor:'#0f9ea7'}}>Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Index;