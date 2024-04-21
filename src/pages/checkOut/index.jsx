import React from "react";
import OrderDetails from '/Users/hijabfatima/Documents/SE/cafe-compass-front/src/components/OrderDetails'
import { useState } from "react";
import { useSelector } from "react-redux";

function Index() {
  const cartItems = useSelector((state) => state.items);

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
          onClick={() => putorder(email,cartItems)}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Index;