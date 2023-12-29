

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.user;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.contacts.filters;

export const selectFilter = createSelector(
  [selectContacts, selectStatusFilter],
  (user, filters) => {
    return user.filter(item =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);