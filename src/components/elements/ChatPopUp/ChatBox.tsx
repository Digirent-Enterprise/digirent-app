import React, { useRef, useEffect, useState} from "react";
import BtnPopUp from "./BtnPopUp";
import ChatScreen from "./Screen/ChatScreen";

const Chatbox = () => {
    const ref = useRef<HTMLHeadingElement>(null);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if(ref.current && !ref.current.contains(event.target)){
                setVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref])
    return (
        <div ref={ref}>
            <ChatScreen visible={visible}/>
            <BtnPopUp onClick={() => setVisible(true)}/>
        </div>
    )
}

export default Chatbox;

