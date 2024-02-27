import {createSlice} from "@reduxjs/toolkit";
import {UserDetails} from "../../module/user";
import {signInWithAccount} from "../thunks/auth";
interface AuthState {
    userDetails: UserDetails;
    status: 'idle' | 'loading' | 'error'; // Add status field
}

const initialState: AuthState = {
    userDetails: {
        userName: '',
        createdDate: '',
        permission: {},
    },
    status: 'idle'
}
const authSlice = createSlice({
    name: 'auth',
    initialState: {initialState},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInWithAccount.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(signInWithAccount.fulfilled, (state: any) => {
                state.status = 'idle';
                state.auth = {...state, isLogin: state.isLogin}
            })
            .addCase(signInWithAccount.rejected, (state: any) => {
            state.status = "error"; // Set status to error when rejected
        });
    }
});

export default authSlice.reducer