import React, {useState, useEffect} from "react";
import {auth, db} from "../firebase";
import {addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
    form : `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input : `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button : `w-[20%] bg-green-500`,
}

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState("")
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    
    const sendMessage = async (e) => {
        e.preventDefault()

        if(input === ""){
            alert("Please enter a valid message")
            return
        }

        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text : input,
            name : displayName,
            uid,
            timestamp : serverTimestamp()
        })

        setInput("")
        scroll.current.scrollIntoView({behaviour: 'smooth'})

    }
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);
    
    const formStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '6px',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxSizing: 'border-box',
        
    };

    const inputStyle = {
        flex: '1',
        padding: '10px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#4d4d4d',
        fontSize: windowWidth > 600 ? '16px' : '14px', // Adjust font size based on window width
    };

    const buttonStyle = {
        padding: windowWidth > 600 ? '10px 20px' : '8px 16px', // Adjust padding based on window width
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: windowWidth > 600 ? '16px' : '14px', // Adjust font size based on window width
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    };

    const buttonHoverStyle = {
        backgroundColor: '#218838',

    };

    return (
        <form onSubmit={sendMessage} style={formStyle}>
            <input value={input} 
                onChange={(e) => setInput(e.target.value)} 
                style={inputStyle} type="text" placeholder="Message" />
            {/* <button className={style.button} type="submit">Send</button> */}

            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                type="submit"
            >
                Send
            </button>
        
        </form>
    )
}

export default SendMessage