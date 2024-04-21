import React, { useState } from 'react';
import './ProductCard.css';  // Import the CSS file
import Modal from 'react-modal';  // You'll need to install this package
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  margin-left: 3px;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  margin-top: 0px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 5px;
  border-radius: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: #0f9ea7;
  color: white;
  border: 1px solid #0f9ea7;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: white;
    color: #0f9ea7;
`;


Modal.setAppElement('#root');  // This line is needed for accessibility reasons

function ProductCard({ product }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (event) => {
    setEditedProduct({
      ...editedProduct,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you would typically update the product in your backend
    console.log(editedProduct);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      <div className="left-column">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>
      <div className="right-column">
        <h2>{product.name}</h2>
        <p className='desc-p'>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity Available: {product.quantity}</p>
        <button class="button" onClick={() => setIsEditing(true)}>Edit <i class='bx bx-edit' ></i></button>
      </div>

      <Modal 
        isOpen={isEditing} 
        onRequestClose={() => setIsEditing(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            display: 'flex',
            flexDirection: 'column',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            borderRadius: '10px',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.1), 0px -5px 10px rgba(0,0,0,0.05)',
          }
        }}
      >
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledLabel>Name:</StyledLabel>
          <StyledInput type="text" name="name" value={editedProduct.name} onChange={handleInputChange} style={{border: 'none', backgroundColor: '#ddd'}} />
          <StyledLabel>Price:</StyledLabel>
          <StyledInput type="number" name="price" value={editedProduct.price} onChange={handleInputChange} style={{border: 'none', backgroundColor: '#ddd'}} />
          <StyledLabel>Quantity:</StyledLabel>
          <StyledInput type="number" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} style={{border: 'none', backgroundColor: '#ddd'}} />
          <StyledLabel>Description:</StyledLabel>
          <StyledTextArea name="description" value={editedProduct.description} onChange={handleInputChange} style={{border: 'none', backgroundColor: '#ddd', height: '100px'}} />
          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      </Modal>
    </div>
  );
}

export default ProductCard;
