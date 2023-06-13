import { createSelector } from "@reduxjs/toolkit";

/* export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading; */
export const selectContactList = state => state.contacts.items;
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectShownContacts = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) =>
    !filter
      ? contacts
      : contacts.filter(contact => contact.name.toLowerCase().includes(filter))
);

/* export const selectAlreadyInContacts = (contacts, newContact) => {
  return contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLowerCase()
  );
}*/
