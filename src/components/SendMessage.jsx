import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (input === "") {
            alert("Please enter a valid message");
            return;
        }

        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        });

        setInput("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    const formStyle = {
        display: "flex",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f1f1f1",
        position: "fixed",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
        borderTop: "1px solid #ccc",
    };

    const inputStyle = {
        flex: "1",
        color: "white",
        padding: "10px",
        marginRight: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#4d4d4d",
        fontSize: windowWidth > 600 ? "16px" : "14px",
    };

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        border: "none",
        borderRadius: "4px",
        color: "white",
        fontSize: windowWidth > 600 ? "16px" : "14px",
        cursor: "pointer",
        whiteSpace: "nowrap",
    };

    const buttonHoverStyle = {
        backgroundColor: "#218838",
    };

    return (
        <form onSubmit={sendMessage} style={formStyle}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={inputStyle}
                type="text"
                placeholder="Type your message here"
            />
            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                type="submit"
            >
                Send
            </button>
        </form>
    );
};

export default SendMessage;
