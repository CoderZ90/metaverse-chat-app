import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return alert("Please enter a message");

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethereumAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully.
          console.log("Message saved successfully", message);
        },
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-lg border-2 border-indigo-400">
      <input
        type="text"
        placeholder={`Enter a message ${user.getUsername()}...`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={sendMessage} className="font-medium text-indigo-200">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
