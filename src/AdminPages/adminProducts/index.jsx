import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import AdminNavbar from '../adminOrder/AdminNavbar';  // Import the AdminNavbar component

function AdminProducts() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="admin-products-page" style={{marginTop:'90px'}}>
      <AdminNavbar restaurantName="Your Restaurant Name" />
      {/* <h1>Admin Products</h1> */}
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

export default AdminProducts;
