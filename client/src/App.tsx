import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';

import Login from "./pages/Login/Index";
import PageNotFoundView from "./pages/Error/PageNotFound";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Home from "./pages/Home/Index";
import Layout from "./pages/Layout/Layout";

const App: React.FC = (): JSX.Element => {
    const [user] = useAuthState(auth);
    console.log("========auth",user)
    return (
        <>
            {
                user ? (
                    <Routes>
                        <Route  path='/' element={Layout(<Home/>)}/>
                        <Route path='*' element={<PageNotFoundView />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route  path='/' element={Layout(<Login/>)}/>
                        <Route path='*' element={<PageNotFoundView />} />
                    </Routes>
                )
            }

        </>
    );
};

export default App;
