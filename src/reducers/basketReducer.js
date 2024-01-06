import {createSlice} from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            return [...state, action.payload];
        },
        removeOneFromBasket: (state, action) => {
            const indexToRemove = state.findIndex(item => item.slug === action.payload.slug);

            if (indexToRemove !== -1) {
                return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
            }

            return state;
        },
        removeItemFromBasket: (state, action) => {
            return state.filter((item) => item.slug !== action.payload.slug);
        },
    },
});

export const {
    addToBasket,
    removeOneFromBasket,
    removeItemFromBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
