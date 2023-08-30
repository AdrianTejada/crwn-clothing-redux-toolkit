import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser (state, action) {
      // this looks like its mutating the data, but its using a library called immer that sees immutability and generates a new state object with the changes
      // this is so we can make use of the legibility of mutable code while still meeting the requirements of immutability from react
      state.currentUser = action.payload;
    }
  }
});


export const {setCurrentUser} = userSlice.actions;
export const userReducer = userSlice.reducer;