import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: 'customers',
  initialState: {},
  reducers: {
    add(state, action) {
      console.log('incoming action:', action.payload.id);
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    remove(state, action) {
      const filtered = Object.entries(state).filter(([k]) => k !== action.payload.id);
      return Object.fromEntries(filtered);
    },
    load(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    update(state, action) {
      const filtered = Object.fromEntries(Object.entries(state).filter(([k]) => k !== action.payload.id));
      return {
        ...filtered,
        [action.payload.id]: action.payload
      };
    }
  }
});

export const { add, load, remove, update } = customerSlice.actions;

export default customerSlice.reducer;