import React, { useEffect, useRef, useState } from "react";
import sendIcon from "./send.svg";
import "./ChatBox.css";

const generateMessage = () => {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  const text = [];
  let x = 7;
  while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
  return text.join(" ");
};

const ChatBox = () => {
  const messageEl = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messageEl) {
      // @ts-ignore
      messageEl.current.addEventListener("DOMNodeInserted", (event: any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    const generateDummyMessage = () => {
      setInterval(() => {
        //@ts-ignore
        setMessages((prevMsg) => [...prevMsg, generateMessage()]);
      }, 2000);
    };
    generateDummyMessage();
  }, []);

  return (
    <div className="chat">
      <div className="head">Chat</div>
      <div className="messages" ref={messageEl}>
        {messages.map((m, i) => (
          <div key={i} className={`msg${i % 2 !== 0 ? " dark" : ""}`}>
            {m}
          </div>
        ))}
      </div>
      <div className="footer">
        <input type="text" placeholder="Type here..." />
        <img src={sendIcon} alt="send" />
      </div>
    </div>
  );
};

export default ChatBox;
