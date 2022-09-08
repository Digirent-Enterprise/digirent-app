import React, {useState} from "react";
import { FormControl } from "@chakra-ui/react";


const ChatInput = ({socket, from, to}: any) => {
    const [input, setInput] = useState('')
    const _onSendMessage = () => {
       if (socket.connected) {
           socket.emit("send-message", {content: input, from, to })
       }
    }
  return (
    <div className="mt-auto items-end border-t py-3 px-4 sticky bottom-0"> 
      <div className="flex">
        <FormControl>
          <input  name="message" onChange={e => setInput(e.target.value)}
          placeholder="Enter your text..."/>
          <button className="bg-blue-100 rounded px-3 py-2 mx-2 text-white" onClick={_onSendMessage}>Send</button>
        </FormControl>
      </div>
    </div>
  );
};

export default ChatInput;
