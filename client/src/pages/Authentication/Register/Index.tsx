import React, {useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import {createAccount} from "../../../action/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        createAccount(userName, password)(dispatch);
        navigate("/");
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
                        <button onClick={handleSubmit}>Create an account</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register