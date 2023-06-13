import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const updateStateOnFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const isRejectedAction=(action) =>{
  return action.type.endsWith('rejected');
}

const isPendingAction=(action)=> {
  return action.type.endsWith('pending');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        updateStateOnFulfilled(state);
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        updateStateOnFulfilled(state);
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        updateStateOnFulfilled(state);
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
