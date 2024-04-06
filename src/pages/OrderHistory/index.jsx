import React from "react";
import CardForHistory from '../../components/CardForHistory'

const Index = () => {
  const orderItems = [
    {
      description: "Cafe2Go",
      price: 500,
      date: 'March 22, 2024',
      items: [
        { name: "Italian Sandwich", quantity: 2 },
        { name: "Milk Shake", quantity: 1 },
        { name: "Ice cream", quantity: 2 },
      ]
    },
    {
      description: "Nest Cafe",
      price: 450,
      date: 'April 1, 2024',
      items: [
        { name: "Cappuccino", quantity: 1 },
        { name: "Croissant", quantity: 2 },
        { name: "Fruit Salad", quantity: 1 }
      ]
    },
    {
      description: "Tapal Cafe",
      price: 350,
      date: 'April 5, 2024',
      items: [
        { name: "Espresso", quantity: 1 },
        { name: "Chocolate Chip Cookie", quantity: 2 },
        { name: "Green Tea", quantity: 1 }
      ]
    },
    {
      description: "Dhaba",
      price: 300,
      date: 'April 10, 2024',
      items: [
        { name: "Tandoori Chicken", quantity: 1 },
        { name: "Naan", quantity: 2 },
        { name: "Lassi", quantity: 1 }
      ]
    }
  ];

  return (
    <div>
        <h1 className="text-center text-dark my-4">
            Order History
          </h1>
          <hr style={{marginLeft:'120px', marginRight:'120px', marginBottom:"50px"}}></hr>
      <div className="container my-3">
        <div className="row">
          {orderItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              {/* Map each menu item to a CardForHistory component */}
              <CardForHistory key={item.description} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
