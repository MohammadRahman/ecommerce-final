export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});
export const showItem = () => ({
    type: 'HIDDEN_DETAILS'
});

export const deleteItem = item => ({
    type: 'DELETE_ITEM',
    payload: item
});
export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})