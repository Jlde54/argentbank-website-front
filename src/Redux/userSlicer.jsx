import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: '',
    firstName: null,
    lastName: null,
    userName: null,
    isLoading: false,
    error: null,
  };

// call API to get the token
// two parameters :
// 1.name of the action, the standard convention is "[slice name]/[action name]"
// 2.The callback function that performs the API call and returns the result when it is finished.
export const getToken=createAsyncThunk('user/getToken', async (credential) => {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credential);
    const token = await response.data.body.token;
    return token;
})

// call API to get the user data
export const getUserData=createAsyncThunk('user/getUserData', async (token) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'accept': 'application/json',
            'Authorization': "Bearer " + token
        }
    }
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
    const data = await response.data.body
    return data;
})

// call API to update the user name
export const updateUserName=createAsyncThunk('user/updateUserName', async ({token, newUserName}) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile',
    {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token},
        body: JSON.stringify({userName: newUserName})
    })
    const data = await response.json()
    return data
})
// Avec createSlice, plus besoin d'utiliser createAction  et associer nos actions à notre reducer.
// createSlice  est une fonction de Redux Toolkit qui génère automatiquement des reducers, 
// des actions et des action creators en se basant sur un objet définissant l'état initial et les fonctions réductrices.
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ''
            state.firstName = null
            state.lastName = null
            state.userName = null
            state.isLoading = false
            state.error = null
        }
    },

    // 3 actions générées par asyncThunk
    // extraRducers permet de définir des reducers supplémentaires en dehors du slice
    // extraReducers are used to handle actions that are created by createAsyncThunk. 
    // Based on the status of the promise, we will update our state.
    // For each action that is created using createAsyncThunk, there are three probable state for the promise returned. pending, fulfilled, rejected.
    extraReducers: (builder) => {     // "builder" est la fonction callback pour définir les reducers
        builder
            .addCase(getToken.pending, (state, action) => { // le reducer reçoit le state actuel et l'action à effectuer. l'action contient un type (description) et une donnée (le payload). ici, le type de l'action qui sera dispatchée sera le nom du slice + le nom du reducer"user/loginUser.pending"
                state.isLoading = true
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload;
                state.error = null;
            })
            .addCase(getToken.rejected, (state, action) => {
                state.isLoading = false;
                if(action.error.code === "ERR_BAD_REQUEST") {
                    state.error = "Email and/or password incorrect";
                } else {
                    state.error = action.error.message;
                }
            })

            .addCase(getUserData.pending, (state, action) => { 
                state.isLoading = true
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.firstName = action.payload.firstName
                state.lastName = action.payload.lastName
                state.userName = action.payload.userName
                state.error = null;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(updateUserName.pending, (state, action) => { 
                state.isLoading = true
            })
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userName = action.payload.body.userName;
                state.error = null;
            })
            .addCase(updateUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
})

// "userSlice.reducer" regroupe tous les reducers contenu dans userSlice 
// pour qu'ils soient utilisables dans le store
export default userSlice.reducer;
export const { logout } = userSlice.actions;
