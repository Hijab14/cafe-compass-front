const initialState = {
    items: [],
    total: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price * action.payload.quantity
            };
        case "update":
            return {
                ...state,
                items: state.items.map(item =>
                    item.productName === action.payload.productName
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                total: calculateNewTotal(state.items, action.payload)
            };
        case "remove":
            // Check if item exists and adjust quantity or remove if quantity becomes zero
            return {
                ...state,
                items: state.items.reduce((newItems, item) => {
                    if (item.productName === action.payload.productName) {
                        if (item.quantity > 1) {
                            // Reduce the quantity by 1
                            newItems.push({...item, quantity: item.quantity - 1});
                        } // if quantity is 1, we don't push it to newItems, effectively removing it
                    } else {
                        newItems.push(item);
                    }
                    return newItems;
                }, []),
                total: state.total - action.payload.price
            };
        case "EMPTY_CART": // New action type to empty the cart
            return {
                ...state,
                items: [], // Empty the items array
                total: 0 // Reset the total to zero
            };
        default:
            return state;
    }
};

function calculateNewTotal(items, updatedItem) {
    return items.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
}

export default reducer; // Ensures that this reducer can be imported in the store setup
