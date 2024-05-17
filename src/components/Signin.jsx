import React from "react";
import GoogleButton from "react-google-button";

const style = {
    wrapper: `flex justify-center`
}



const SignIn = () => {
    return (
        <div className={style.wrapper}>
            <GoogleButton />
        </div>
    )
}

export default SignIn