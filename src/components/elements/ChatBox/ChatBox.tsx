import "./ChatBox.css";

const ChatBox = ({ mine, content }: { mine: boolean; content: string }) => {
  return (
    <div
      className={`flex flex-row my-2 ${mine ? "justify-start" : "justify-end"}`}
    >
      <div className={`msg${!mine ? " dark" : ""}`}>{content}</div>
    </div>
  );
};

export default ChatBox;
