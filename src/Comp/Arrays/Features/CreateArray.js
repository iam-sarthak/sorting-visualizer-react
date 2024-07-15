import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [
    { number: 20, correct: false, checking: false, wrong: false, swap: false },
    { number: 13, correct: false, checking: false, wrong: false, swap: false },
    { number: 49, correct: false, checking: false, wrong: false, swap: false },
    { number: 10, correct: false, checking: false, wrong: false, swap: false },
  ],
};

export const ArraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    createArray: (state, action) => {
      const newarray = [];
      for (let index = 0; index < action.payload.length; index++) {
        newarray.push({
          number: Math.floor(Math.random() * 100),
          correct: false,
          checking: false,
          wrong: false,
          swap: false,
        });
      }
      state.array = newarray;
    },
    updateArray: (state, action) => {
      state.array = action.payload;
    },
    setArrayState: (state, action) => {
      const { index, key, value } = action.payload;
      state.array = state.array.map((item, idx) => 
        idx === index ? { ...item, [key]: value } : item
      );
    }
  },
});

export const { createArray, updateArray, setArrayState } = ArraySlice.actions;
export default ArraySlice.reducer;
