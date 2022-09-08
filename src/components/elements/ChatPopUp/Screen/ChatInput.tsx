import React from "react";
import { FormControl } from "@chakra-ui/react";


const ChatInput = () => {
  return (
    <div className="mt-auto items-end border-t py-3 px-4 sticky bottom-0"> 
      <div className="flex">
        <FormControl>
          <input  name="message"
          placeholder="Enter your text..."/>
          <button className="bg-blue-100 rounded px-3 py-2 mx-2 text-white">Send</button>
        </FormControl>
      </div>
    </div>
  );
};

export default ChatInput;
