import { motion } from "motion/react";

import UserMessage from "./UserMessage.jsx";
import AssistantMessage from "./AssistantMessage.jsx";

function MessageList({ messages }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      exit={{
        opacity: 0,
        scaleY: 0,
      }}
      transition={{
        duration: 0.1,
      }}
      className="glass-40 flex-1 overflow-hidden rounded-4xl pr-2"
    >
      <div className="custom-scrollbar flex h-full flex-col gap-4 overflow-y-auto p-4 pr-2">
        {messages.map((message) =>
          message.role === "USER" ? (
            <UserMessage key={message.id} message={message} />
          ) : (
            <AssistantMessage key={message.id} message={message} />
          ),
        )}
      </div>
    </motion.div>
  );
}

export default MessageList;
