import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(i => i.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
            // Find the item in the cart that matches the given name
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
