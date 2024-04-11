import foodContext from "./foodContext";
import { useState } from "react";

const FoodState = (props) => {
    
    const host = "http://localhost:3000";

    const [food, setFood] = useState(1);

    const editorder = async (id, address, phone) => {
      // API Call 
      const response = await fetch(`${host}/api/orders/updateorder/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({address, phone})
      });
      const json = await response.json(); 

    }
    return (
        <foodContext.Provider value={{food,setFood,editorder}}>
          {props.children}
        </foodContext.Provider>
      )
    
}



export default FoodState;