import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isActive: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
        toggleClass: state => {
            state.isActive = !state.isActive;
        }
    }
});

export const { login, logout, toggleClass } = authSlice.actions;
export default authSlice.reducer;

