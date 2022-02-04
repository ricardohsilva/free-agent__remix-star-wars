import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToy } from '~/shared/interfaces/toy.interface';

import { RootState } from '../../store';


// STATE INTERFACE
export interface CartState {
    cart: IToy[];
}

// INITIAL STATE
const initialState: CartState = {
    cart: [],
}

// SELECTORS
export const selectCart = (state: RootState) => {
    return state.cartStore;
}


// SLICE
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IToy>) => {
            state.cart.push(action.payload)
        }
    },

});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer