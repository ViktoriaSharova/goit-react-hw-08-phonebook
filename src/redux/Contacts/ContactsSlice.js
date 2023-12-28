import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './Operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;

  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      user: [],
      isLoading: false,
      error: null,
    },
    filters: '',
  },
  reducers: {
    filters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.user = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.user.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)

      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.user.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.user.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export const { filters } = contactsSlice.actions;

export const phonebookReduser = contactsSlice.reducer;