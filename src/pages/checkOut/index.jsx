import React from "react";
import OrderDetails from '/Users/hijabfatima/Documents/SE/cafe-compass-front/src/components/OrderDetails'
import { useState } from "react";
import { useSelector } from "react-redux";

function Index() {
  const cartItems = useSelector((state) => state.items);

//   const putorder = async (address, phone, total = 0) => {
//     try {
//       // API Call
//       const response = await fetch(`${host}/api/orders/addorder`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           address,
//           phone,
//           total,
//           cartItems,
//           email,
//           location,
//         }),
//       });

//       if (response.ok) {
//         // If the response is successful (status code 2xx), show the alert
//         alert("Order placed successfully");
//       } else {
//         // Handle errors if the response is not successful
//         console.error("Error sending order details:", response.statusText);
//       }
//     } catch (error) {
//       // Handle network errors or other exceptions
//       console.error("Error:", error.message);
//     }
//   };

  return (
    <>
    <div>
      <form>
          <fieldset >
            <h1 style={{marginTop:'10px', marginBottom:'10px'}}>Order Information</h1>
            <OrderDetails />
          </fieldset>
        </form>
      </div>
      <div >
        <button
        className="btn btn-dark"
          type="submit"
          href="/"
          style={{backgroundColor:'#0f9ea7', color:'white'}}
        //   onClick={() => putorder(address, phone)}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Index;