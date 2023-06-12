/*
Форма стану
- Додай у стан Redux обробку індикатора завантаження та помилки:
    {
      contacts: {
        items: [],
        isLoading: false,
        error: null
      },
      filter: ""
    }
 */
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
//import storage from 'redux-persist/lib/storage';
/* import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; */

import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";

const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

/* const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts']
}; */

//const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer, //: persistedReducer,
/*   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), */
});

//export const persistor = persistStore(store);
