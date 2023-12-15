import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "./firstNameSlicer";
import lastNameReducer from "./lastNameSlicer";
import userNameReducer from "./userNameSlicer";
// import errorReducer from "./errorSlicer";
// import tokenReducer from "./tokenSlicer";
import userReducer from "./userSlicer";


const store = configureStore({
    reducer: {
        FirstName: firstNameReducer,
        LastName: lastNameReducer,
        UserName: userNameReducer,
        // Error: errorReducer,
        // Token: tokenReducer,
        user: userReducer
    },
});

export default store