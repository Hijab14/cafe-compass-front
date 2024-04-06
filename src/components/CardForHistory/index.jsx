import React from 'react';

const CardForHistory = ({ item }) => {
  const { description, price, date, items } = item;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{description}</h5>
        <p className="card-text">{date}</p>
        <p className="card-text">
          <strong>Total: Rs.{price}</strong>
        </p>
        <ul className="list-group mt-3">
          {items.map((innerItem, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {innerItem.name}
              <span className="badge badge-primary badge-pill" style={{backgroundColor:"#0f9ea7"}}>
                {innerItem.quantity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardForHistory;
