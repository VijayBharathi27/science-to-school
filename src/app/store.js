import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import announceSlice from '../Features/announce/announceSlice';
import eventsSlice from '../Features/events/eventsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice,
  announcements: announceSlice,
  events: eventsSlice,
});

const persitedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
