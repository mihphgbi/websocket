import React, {useState} from "react";
import {createAccount} from "../../../store/thunks/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {User} from "../../../module/user";
const initialState: User = {
    userName: '',
    password: ''
}
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<User>(initialState)

    const handleSubmit = () => {
        createAccount(formData.userName, formData.password)(dispatch);
        navigate("/");
    }

    const handleChange = (event: any, type: string) => {
        setFormData({...formData, [type]: event.target.value})
    }

    return (
        <>
            <div className='login-wrapper'>
                <div className='login-form'>
                    <div className='input-item'>
                        <label>User Name: </label>
                        <input type='text' value={formData.userName} onChange={(e) => handleChange(e, 'userName')}></input>
                    </div>
                    <div className='input-item'>
                        <label>Password: </label>
                        <input type='password' value={formData.password} onChange={(e) => handleChange(e, 'password')}></input>
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