import {createSlice} from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            return [...state, action.payload];
        },
        removeFromBasket: (state, action) => {
            return state.filter((item) => item !== action.payload);
        },
        clearBasket: () => [],
    },
});

export const {addToBasket, removeFromBasket, clearBasket} = basketSlice.actions;
export default basketSlice.reducer;
