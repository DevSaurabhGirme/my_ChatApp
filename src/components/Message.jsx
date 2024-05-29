import React from "react";

const style = {
    Message : `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
}

const Message = () => {
    return (
        <div>
            <div className ={style.Message}>
                <p className={style.name}>Dave</p>
                <p>I am learning React</p>
            </div>
        </div>
    )
};

export default Message;