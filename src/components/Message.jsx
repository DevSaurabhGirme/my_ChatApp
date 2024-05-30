import React from "react";

const style = {
    Message : `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `fixed mt-[-4rem]text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5a] text-black float-left rounded-br-full`
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