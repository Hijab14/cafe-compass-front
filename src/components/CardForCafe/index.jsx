import React from 'react';

const CardForCafe = ({ cafe }) => {
  const { name, location, contactNumber, image } = cafe;

  return (
    <div className="card mb-4" style={{ border: "1px solid black" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} className="card-img" alt={name}  style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> <strong>Location: </strong>{location}</p>
            <p className="card-text"> <strong>Contact: </strong>{contactNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCafe;
