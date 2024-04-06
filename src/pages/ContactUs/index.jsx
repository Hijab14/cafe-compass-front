import React from "react";
import CardForCafe from "../../components/CardForCafe";
import Dhaba from '../../assets/Dhaba.jpg';
import nest from '../../assets/nest.jpg';
import cafe2 from '../../assets/cafe.jpeg';
import tapal from '../../assets/tapal.jpg';

const Index = () => {
  const cafes = [
    {
      name: 'Cafe2Go',
      location :"Ground floor near the info commons",
      contactNumber: '0313200008',
      image: cafe2
    },
    {
      name: 'Nest Cafe',
      location :"4th floor, the Horizon",
      contactNumber: '0313204408',
      image: nest
    },
    {
      name: 'Dhaba',
      location :"Ground floor near the courts",
      contactNumber: '03132029008',
      image: Dhaba
    },
    {
      name: 'Tapal Cafe',
      location :"Ground floor near the labs",
      contactNumber: '03132000208',
      image: tapal
    }
  ];

  return (
    <div className="container mt-5">
      <h1  style={{marginBottom:"40px", marginTop:'-10px'}}>Contact Us</h1>
      <div className="row">
        {cafes.map((cafe, index) => (
          <div key={index} className="col-12 mb-4">
            <CardForCafe key={cafe.name} cafe={cafe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
