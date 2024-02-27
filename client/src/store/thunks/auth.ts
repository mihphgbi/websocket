import {auth} from '../../firebase';
import {LOGIN_WITH_EMAIL, LOGIN_WITH_GOOGLE, OPEN_TOAST_ERROR} from "../type/auth";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const signInWithAccount = createAsyncThunk(
	'LOGIN_WITH_EMAIL',
	async (payload: any, thunkAPI) => {
		try {
			return await signInWithEmailAndPassword(auth, payload.userName, payload.password)
		}
		catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
)

// export const signInWithAccount = (email: string, password: string) => async (dispatch: any) => {
// 	try {
// 		await signInWithEmailAndPassword(auth, email, password);
// 		dispatch({
// 			type: LOGIN_WITH_EMAIL,
// 			payload: ''
// 		});
// 	}
// 	catch (error) {
// 		dispatch({
// 			type: OPEN_TOAST_ERROR,
// 			payload: error
// 		});
// 	}
// };
export const createAccount = (email: string, password: string) => async (dispatch: any) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		dispatch({
			type: LOGIN_WITH_GOOGLE,
			payload: ''
		});
	}
	catch (error) {
		dispatch({
			type: OPEN_TOAST_ERROR,
			payload: error
		});
	}
};