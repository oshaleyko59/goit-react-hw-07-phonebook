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

import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});

