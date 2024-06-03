import React from "react";
import { auth } from '../firebase';

const style = {
    button: `bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 transition duration-300 ease-in-out`,
}

const Logout = () => {
    const signOut = () => {
        signOut(auth);
    }

    return (
        <button onClick={signOut} className={style.button}>
            Logout
        </button>
    );
}

export default Logout;
