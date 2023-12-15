import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk('loginUser', async (credential) => {
    // const request = await fetch('http://localhost:3001/api/v1/user/login',{
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
    //     body: JSON.stringify({credential})
    //     });
        console.log("Credential : ",credential);
        const requestLogin = await axios.post('http://localhost:3001/api/v1/user/login', credential);
        console.log("requestLogin : ",requestLogin);

        const token = requestLogin.data.body.token;
        console.log("token : ",token);
        
        sessionStorage.setItem('user', JSON.stringify(requestLogin.data.body.token));
        console.log("JSON.stringify(requestLogin.data.body.token : ",JSON.stringify(requestLogin.data.body.token));

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'accept': 'application/json',
                'Authorization': token
            }
        }
        console.log("config: ", config)
        const requestProfile = await axios.post('http://localhost:3001/api/v1/user/profile', config);
        console.log("requestProfile: ", requestProfile)
        const response = requestProfile;
        return response;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: '',
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
            state.user = '';
            state.error = '';
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = '';
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = '';
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;