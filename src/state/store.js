import { applyMiddleware, legacy_createStore as createStore } from "redux"
import reducers from "./reducers/itemreducer"
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
  };

  
const persistedReducer = persistReducer(persistConfig, reducers);

// const initialState = {
//     items: [],
//     total: 0
//   };
  
export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);
  