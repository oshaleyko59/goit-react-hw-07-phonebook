import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const updateStateOnFulfilled = state => {
        state.isLoading = false;
        state.error = null;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      updateStateOnFulfilled(state);
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      updateStateOnFulfilled(state);
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      updateStateOnFulfilled(state);
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
