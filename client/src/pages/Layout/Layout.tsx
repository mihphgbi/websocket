import React, {ReactElement} from "react";
import NavBar from "../../components/NavBar/NavBar";
import './styles/style.scss';
const Layout = (Component: ReactElement<any, any>) => {
    return (
        <>
            <div className='nav-wrapper'>
                <NavBar/>
            </div>
            <div className='page-container'>
                {Component}
            </div>
        </>
    )
}
export default Layout