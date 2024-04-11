const initialState = {
    items: [],
    total: 0
};

const reducer = (state=initialState, action) => {
    if(action.type === "add"){
        return {
            ...state,
            items: [...state.items, action.payload],
            total: state.total + action.payload.price  
          }
    }else if(action.type === "update"){
        const existingitem = action.payload;
        existingitem.quantity = existingitem.quantity + 1;
        return {
            ...state,
            items: [...state.items],
            total: state.total + existingitem.price
            
          }
    }
    else if(action.type === "remove"){
        const existingitem = action.payload;
        if(existingitem.quantity === 1){
            return {
                ...state,
                items: state.items.filter(item => item.name !== existingitem.name),
                total: state.total - existingitem.price
              }
        }else{
            existingitem.quantity = existingitem.quantity - 1;
            return {
                ...state,
                items: [...state.items],
                total: state.total - existingitem.price
              }
        }
    }
    else{
        return state
    }
}

export default reducer