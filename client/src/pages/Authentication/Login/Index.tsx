import React, {useState} from "react";
import './style/login.scss';
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../../firebase";
import {signInWithAccount} from "../../../action/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const handleSubmit = () => {
        signInWithAccount(userName, password)(dispatch);
    }

    const handleChange = (event: any, type: string) => {
        if (type === 'password') {
            setPassword(event.target.value)
        } else {
            setUserName(event.target.value)
        }
    }

    const createNewUser = () => {navigate('/register')}
    return (
        <>
            <div className='login-wrapper'>
                <div className='login-form'>
                    <div className='input-item'>
                        <label>User Name: </label>
                        <input type='text' value={userName} onChange={(e) => handleChange(e, 'userName')}></input>
                    </div>
                    <div className='input-item'>
                        <label>Password: </label>
                        <input type='password' value={password} onChange={(e) => handleChange(e, 'password')}></input>
                    </div>
                    <div className='submit-btn'>
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                    <div className='login-content'>
                        <p>Sign in with <a onClick={googleSignIn}>Google</a></p>
                        <p>Don't have account? <a onClick={createNewUser}>Create one</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login