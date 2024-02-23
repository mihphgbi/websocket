import React from "react";
import './style/style.scss';

const ErrorToast = (errorMsg: string) => {

    return (
        <>
            <div className='toast-wrapper error'>
                {errorMsg}
            </div>
        </>
    )
}
export default ErrorToast