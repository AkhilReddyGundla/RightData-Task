import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './rootReducers';

// This file helps in Persisting State information upon page refresh

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



// FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER These are predefined action types provided by the redux-persist library, which is commonly used for persisting Redux state to storage and rehydrating it when the application loads. 
const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(reduxStore);

export default () => {
    return { store: reduxStore, persistor };
};