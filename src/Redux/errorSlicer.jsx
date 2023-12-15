import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: "error",
    initialState: {
      value: ""
    },
    reducers: {
        getError: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { getError } = errorSlice.actions;
export default errorSlice.reducer;