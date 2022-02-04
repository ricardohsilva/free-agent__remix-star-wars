import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store';


// STATE INTERFACE
export interface SearchState {
    isOpened: boolean;
}

// INITIAL STATE
const initialState: SearchState = {
    isOpened: false,
}

// SELECTORS
export const selectSearch = (state: RootState) => {
    return state.searchStore;
}


// SLICE
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        openCloseSearch: (state, action: PayloadAction<boolean>) => {
            state.isOpened = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { openCloseSearch } = searchSlice.actions

export default searchSlice.reducer