import React from "react";
import OrderDetails from '../../components/OrderDetails'
import { useState } from "react";
import { useSelector } from "react-redux";

function Index() {
  const Items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  const confirmOrder = async () => {
    if (!userEmail.trim()) {
      alert('Please confirm your ID.');
      return;
    }

    try {
      const items = Items.map(item => ({
        productName: item.productName,
        quantity: item.quantity,
        price: item.price
      }));
      const response = await fetch('http://localhost:3000/api/orders/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify({ userEmail, items }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
      alert('Order successfully placed!');
    
      // Empty the cart
      dispatch({ type: 'EMPTY_CART' });
      // Handle successful response here, if needed

      // Redirect to the search page
      Navigate('/search');
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <>
      <div>
        <form>
          <fieldset>
            <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>Order Information</h1>
            <OrderDetails />
          </fieldset>
        </form>
      </div>
      <label style={{ marginBottom: "20px" }}>
        Confirm User ID:
        <input
          type="text"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
      </label>
      <div>
        <button
          className="btn btn-dark"
          type="button"
          onClick={confirmOrder}
          style={{ backgroundColor: '#0f9ea7', color: 'white' }}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Index;
