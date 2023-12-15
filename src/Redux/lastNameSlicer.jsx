import { createSlice } from "@reduxjs/toolkit";

export const lastNameSlice = createSlice({
    name: "lastName",
    initialState : {
        value: ""
    },
    reducers: {
        getLastName: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { getLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;