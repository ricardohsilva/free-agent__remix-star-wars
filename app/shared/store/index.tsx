import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './cart/cart.slice';
import searchReducer from './search/search.slice';

export const store = configureStore({
  reducer: {
    cartStore: cartReducer,
    searchStore: searchReducer, 
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
