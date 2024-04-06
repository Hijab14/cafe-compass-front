import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'

const Index = (props) => {
  const { item } = props;

  const { name, description, price, imageUrl } = item;
  // const dispatch = useDispatch()
  // const existingItem = useSelector(state => state.items.find(i => i.name === item.name));
  // const handleAddToCart = () => {
  //       if(existingItem){
  //           dispatch(actionCreators.updateitem(existingItem));
    
  //       }else{
  //         dispatch(actionCreators.additem(item));
  //       }
  // }
  
  return (
    <div className="card">
      <img
        src={!imageUrl ? "https://placekitten.com/300/200" : imageUrl}
        className="card-img-top"
        alt="Menu Item"
        style={{ width: "100%", height: "200px", objectFit: "cover" }} // Fixed dimensions for the image
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Price: Rs.{price}</strong>
        </p>
        <button className="btn btn-success" style={{ backgroundColor: '#0f9ea7' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Index;
