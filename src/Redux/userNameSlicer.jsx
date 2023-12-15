import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
    name: "userName",
    initialState : {
        value: ""
    },
    reducers: {
        getUserName: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Extract and export each action creator
export const { getUserName } = userNameSlice.actions;
// Export the reducer as a default
export default userNameSlice.reducer;