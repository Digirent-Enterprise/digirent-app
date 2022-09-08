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
  const x = 7;
  while (x - 1) text.push(words[Math.floor(Math.random() * words.length)]);
  return text.join(" ");
};

const ChatBox = ({mine, content}: {mine: boolean, content: string}) => {
  const messageEl = useRef(null);
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   if (messageEl) {
  //     // @ts-ignore
  //     messageEl.current.addEventListener("DOMNodeInserted", (event) => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top: target.scrollHeight, behavior: "smooth" });
  //     });
  //   }
  // }, []);

  return (
      <div className={`flex flex-row ${mine? 'justify-start': 'justify-end'}`}>
          <div className={`msg${!mine ? " dark" : ""}`}>
            {content}
          </div>
      </div>
  );
};

export default ChatBox;
