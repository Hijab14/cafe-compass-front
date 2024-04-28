import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state';

const Index = (props) => {
  const { item } = props;
  const { productName, cafeName, price, imageUrl } = item;

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = items.find(cartItem => cartItem.productName === item.productName);
    if (existingItem) {
      // Item exists, update the quantity
      console.log("nj");
      dispatch(actionCreators.updateitem({ ...item, quantity: existingItem.quantity + 1 }));
    } else {
      console.log("S");
      // Item does not exist, add new item with quantity set to 1
      dispatch(actionCreators.additem({ ...item, quantity: 1 }));
    }
  };

  return (
    <div className="card">
      <img
        src={!imageUrl ? "https://placekitten.com/300/200" : imageUrl}
        className="card-img-top"
        alt={productName}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{cafeName}</p>
        <p className="card-text">
          <strong>Price: Rs.{price}</strong>
        </p>
        <button
          className="btn btn-success"
          onClick={() => handleAddToCart(item)}
          style={{ backgroundColor: '#0f9ea7' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Index;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { actionCreators } from '../../state';
// const Index = (props) => {
//   const { item } = props;

//   const { productName, cafeName, price, imageUrl } = item;
//   console.log(item);
//   const dispatch = useDispatch()
//   const existingItem = useSelector(state => state.items.find(i => i.name === item.name));
//   const handleAddToCart = () => {
//         if(existingItem){
//             dispatch(actionCreators.updateitem(existingItem));
    
//         }else{
//           dispatch(actionCreators.additem(item));
//         }
//   }
  
//   return (
    
//     <div className="card">
//       <img
//         src={imageUrl}
//         className="card-img-top"
//         alt={productName || "Menu Item"}
//         style={{ width: "100%", height: "200px", objectFit: "cover" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{productName}</h5>
//         <p className="card-text">{cafeName}</p>
//         <p className="card-text">
//           <strong>Price: Rs.{price}</strong>
//         </p>
//         <button className="btn btn-success" onClick={() => handleAddToCart()} style={{ backgroundColor: '#0f9ea7' }}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Index;
