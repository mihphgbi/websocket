import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import Login from "./pages/Authentication/Login/Index";
import PageNotFoundView from "./pages/Error/PageNotFound";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Home from "./pages/Home/Index";
import Layout from "./pages/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Register from "./pages/Authentication/Register/Index";

const App: React.FC = (): JSX.Element => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Provider store={store}>
                <React.Suspense
                    fallback={
                        <div>
                            Loading !!!!
                        </div>
                    }
                >
                </React.Suspense>
                    <Routes>
                    {
                        !user ? (
                            <>
                                <Route  path='/' element={Layout(<Login/>)}/>
                                <Route  path='/register' element={Layout(<Register/>)}/>
                            </>
                        ) : (
                            <>
                                <Route  path='/' element={Layout(<Home/>)}/>
                                <Route path='*' element={<PageNotFoundView />} />
                            </>
                        )
                    }
                    </Routes>
            </Provider>
        </>
    );
};

export default App;
