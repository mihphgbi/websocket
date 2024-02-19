import React from "react";
import './style/login.scss';
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";
const Login = () => {
    const [user] = useAuthState(auth);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const handleSubmit = () => {

    }
    return (
        <>
            <div className='login-wrapper'>
                <div className='login-form'>
                    <div className='input-item'>
                        <label>User Name: </label>
                        <input type='text'></input>
                    </div>
                    <div className='input-item'>
                        <label>Password: </label>
                        <input type='password'></input>
                    </div>
                    <div className='submit-btn'>
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                    <div className='login-content'>
                        <p>Sign in with <a onClick={googleSignIn}>Google</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login