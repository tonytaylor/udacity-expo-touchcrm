import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    test: {
      firstName: 'Rob',
      lastName: 'Johnson',
      email: 'robj@example.com',
      created: Date.now(),
      salesRegion: 'e',
      source: 'none',
      id: 'test',
      phoneNumber: '+0 912 166 8280'
    }
  },
  reducers: {
    add(state, action) {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    remove(state, action) {
      const filtered = Object.entries(state).filter(([k]) => k !== action.payload.id);
      return Object.fromEntries(filtered);
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

export const { add, remove, update } = customerSlice.actions;

export default customerSlice.reducer;