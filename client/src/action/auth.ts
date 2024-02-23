import {auth} from '../firebase';
import {LOGIN_WITH_GOOGLE, OPEN_TOAST_ERROR} from "./type/auth";
import {signInWithEmailAndPassword} from "@firebase/auth";

export const signInWithAccount = (email: string, password: string) => async (dispatch: any) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
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