import thunk from 'redux-thunk';
import reducers from './reducers';
import {configureStore} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof reducers>;

const middlewares = [thunk];

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export type StoreDispatch = typeof store.dispatch;

export type StoreGetState = ReturnType<typeof store.getState>;

export default store;
