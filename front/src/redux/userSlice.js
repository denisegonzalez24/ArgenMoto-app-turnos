import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: { loggin: false, user: { id: false, 
     }, },
    userAppointment: [],
};

export const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserAppointment: (state, action) => {
            state.userAppointment = action.payload;
        }
    }
});

export const { setUserData, setUserAppointment } = userSlice.actions;
export default userSlice.reducer;
