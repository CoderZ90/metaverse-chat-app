import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("username") === user.get("username");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative w-8 h-8 rounded-full ${
          isUserMessage && "order-last ml-2"
        }`}
      >
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-indigo-500 text-white font-medium"
            : "rounded-bl-none bg-gray-500 text-white font-medium"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      {/* Time stamp */}
      <TimeAgo
        datetime={message.get("createdAt")}
        className={`text-[12px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
      />

      <p
        className={`absolute -bottom-5 text-sm font-medium ${
          isUserMessage ? "text-blue-200" : "text-white"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
