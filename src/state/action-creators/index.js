export const additem = (item) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: item
        })
    }
}


export const removeitem = (item) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: item
        })
    }
}

export const updateitem = (item) => {
    return (dispatch) => {
        dispatch({
            type: "update",
            payload: item
        })
    }
}