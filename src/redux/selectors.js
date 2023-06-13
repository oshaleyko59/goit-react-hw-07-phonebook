import { createSelector } from "@reduxjs/toolkit";

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

