import React from "react";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from "./SignIn";
import Logout from "./Logout";

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center px-6 py-4 shadow-md`,
    heading: `text-white text-2xl font-semibold`,
    signInButton: `text-white bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md transition duration-300 ease-in-out`,
    logoutButton: `text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition duration-300 ease-in-out`,
}

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
            {user ? <Logout style={style.logoutButton} /> : <SignIn style={style.signInButton} />}
        </div>
    );
};

export default Navbar;
