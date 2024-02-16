import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

const Home = () => {
    const [user] = useAuthState(auth);
    const signOut = () => {
        auth.signOut();
    };
    return (
        <>
            <div onClick={signOut}>Home working</div>
        </>
    )
}
export default Home