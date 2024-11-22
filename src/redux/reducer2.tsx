import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    isCheck: false,
    textInput: ""
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
        check: (state) => {
            state.isCheck = !state.isCheck;
        },
        textInput: (state, action) => {
            state.textInput = action.payload;
        }
    }
});

export const { login, logout, check, textInput } = testSlice.actions;
export default testSlice.reducer;
