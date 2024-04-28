import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import AdminNavbar from '../adminOrder/AdminNavbar';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true); 
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    price: '',
    cafeName: '',
    category: '',
    location: '',
    imageUrl:' ' 
  });

  useEffect(() => {
    // Fetch products data here and update the state
    // This is just placeholder data
    setProducts([
        {
            name: "Crispy Chicken",
            description: "Cafe2Go",
            price: 10.99,
            imageUrl:
              "https://hungryforever.net/wp-content/uploads/2016/04/Fried-Chicken-Featured-1000x600.jpg",
            quantity:1
          },
          {
            name: "Candy Bites",
            description: "Tapal Cafe",
            price: 12.99,
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ff907b7-c498-4802-965a-06dfee6ec6ff-retina-large.png",
            quantity:1
          },
          {
            name: "Nashville Hot Chicken",
            description: "Tapal Cafe",
            price: 8.99,
            imageUrl:
              "https://www.mashed.com/img/gallery/better-call-saul-inspired-los-pollos-hermanos-chicken-recipe/l-intro-1685627299.jpg",
            quantity:1
          },
          {
            name: "Mushroom Melt",
            description: "Cafe2Go",
            price: 15.99,
            imageUrl: "https://media.timeout.com/images/105541804/image.jpg",
            quantity:1
          },
          {
            name: "Teriyaki Chicken",
            description: "Nest Cafe",
            price: 18.99,
            imageUrl: "https://i.ytimg.com/vi/Ysshkgj2XHo/maxresdefault.jpg",
            quantity:1
          },
          {
            name: "Maryland Crab Cakes",
            description: "Nest Cafe",
            price: 14.99,
            imageUrl:
              "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/08/15133537/LOS-POLLOS-HERMANOS.jpg",
            quantity:1
          },
          {
            name: "BBQ Shrimp Skewers",
            description: "Cafe2Go",
            price: 22.99,
            imageUrl:
              "https://images.squarespace-cdn.com/content/v1/5babd6a3ebfc7f1d5fd228d5/1565718585976-IO42B9HLFLFE8AP98ERK/Grilled+Shrimp+skewers+recipe",
            quantity: 1,
          }
      // Add more products as needed
    ]);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCafeChange = (e) => {
    const selectedCafe = e.target.value;
    let location = '';
    switch (selectedCafe) {
      case 'Tapal Cafe':
        location = 'Lower Ground Floor';
        break;
      case 'Nest Cafe':
        location = '4th Floor';
        break;
      case 'Dhaba':
        location = 'Lower Ground Floor';
        break;
      case 'Cafe2Go':
        location = 'Ground Floor';
        break;
      default:
        location = '';
    }
    setFormData({
      ...formData,
      cafeName: selectedCafe,
      location: location
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isFormFilled = Object.values(formData).every(value => value !== '');
    setIsFormValid(isFormFilled);

    if (isFormFilled) {
      const response = await fetch('http://localhost:3000/api/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setProducts([...products, data]); // Assuming the API returns the newly created product
        toggleModal();
        alert('Product successfully added!');
        setFormData({
          productName: '',
          quantity: '',
          price: '',
          cafeName: '',
          category: '',
          location: '',
          imageUrl: ''
        });
      } else {
        console.error('Failed to add product:', data);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };
  return (
    <div className="admin-products-page">
      <AdminNavbar restaurantName="Your Restaurant Name" />
      {products.map(product => <ProductCard key={product.id} product={product} />)}
      <button onClick={toggleModal} style={{marginBottom:'20px', backgroundColor:'#0f9ea7', color:'white', border:'none'}}>
        Add Product!
      </button>
      {isModalOpen && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
          <div style={{background: 'white', padding: '20px', borderRadius: '10px', width: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
            <span style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '24px'}} onClick={toggleModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <h2>Add New Product</h2>
              <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" />
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" />
              <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
              <select name="cafeName" value={formData.cafeName} onChange={handleCafeChange}>
                <option value="">Select Cafe</option>
                <option value="Tapal Cafe">Tapal Cafe</option>
                <option value="Nest Cafe">Nest Cafe</option>
                <option value="Dhaba">Dhaba</option>
                <option value="Cafe2Go">Cafe2Go</option>
              </select>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Sweet">Sweet</option>
                <option value="Savoury">Savoury</option>
                <option value="Drink">Drink</option>
              </select>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" disabled />
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="ImageUrl" />
              <button type="button" onClick={toggleModal}>Cancel</button>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;



// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import AdminNavbar from '../adminOrder/AdminNavbar';  // Import the AdminNavbar component

// function AdminProducts() {
//   const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch products data here and update the state
  //   // This is just placeholder data
  //   setProducts([
  //       {
  //           name: "Crispy Chicken",
  //           description: "Cafe2Go",
  //           price: 10.99,
  //           imageUrl:
  //             "https://hungryforever.net/wp-content/uploads/2016/04/Fried-Chicken-Featured-1000x600.jpg",
  //           quantity:1
  //         },
  //         {
  //           name: "Candy Bites",
  //           description: "Tapal Cafe",
  //           price: 12.99,
  //           imageUrl:
  //             "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ff907b7-c498-4802-965a-06dfee6ec6ff-retina-large.png",
  //           quantity:1
  //         },
  //         {
  //           name: "Nashville Hot Chicken",
  //           description: "Tapal Cafe",
  //           price: 8.99,
  //           imageUrl:
  //             "https://www.mashed.com/img/gallery/better-call-saul-inspired-los-pollos-hermanos-chicken-recipe/l-intro-1685627299.jpg",
  //           quantity:1
  //         },
  //         {
  //           name: "Mushroom Melt",
  //           description: "Cafe2Go",
  //           price: 15.99,
  //           imageUrl: "https://media.timeout.com/images/105541804/image.jpg",
  //           quantity:1
  //         },
  //         {
  //           name: "Teriyaki Chicken",
  //           description: "Nest Cafe",
  //           price: 18.99,
  //           imageUrl: "https://i.ytimg.com/vi/Ysshkgj2XHo/maxresdefault.jpg",
  //           quantity:1
  //         },
  //         {
  //           name: "Maryland Crab Cakes",
  //           description: "Nest Cafe",
  //           price: 14.99,
  //           imageUrl:
  //             "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/08/15133537/LOS-POLLOS-HERMANOS.jpg",
  //           quantity:1
  //         },
  //         {
  //           name: "BBQ Shrimp Skewers",
  //           description: "Cafe2Go",
  //           price: 22.99,
  //           imageUrl:
  //             "https://images.squarespace-cdn.com/content/v1/5babd6a3ebfc7f1d5fd228d5/1565718585976-IO42B9HLFLFE8AP98ERK/Grilled+Shrimp+skewers+recipe",
  //           quantity: 1,
  //         }
  //     // Add more products as needed
  //   ]);
  // }, []);

//   return (
//     <div className="admin-products-page">
//       <AdminNavbar restaurantName="Your Restaurant Name" />
//       {/* <h1>Admin Products</h1> */}
//       {products.map(product => <ProductCard key={product.id} product={product} />)}
//       <button style={{marginBottom:'20px', backgroundColor:'#0f9ea7', color:'white', border:'none'}}>Add Product!</button>
//     </div>
//   );
// }

// export default AdminProducts;
