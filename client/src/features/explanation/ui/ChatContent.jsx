import { AnimatePresence, motion } from "motion/react";

import MessageList from "./MessageList";
import InputBox from "./InputBox";
import LevelSelector from "./LevelSelector";

import { useExplanation } from "../hooks/useExplanation";
import { TOPICS } from "../lib/constants";
import { useChatStore } from "@/entities/chat";

function ChatContent() {
  const { level, setLevel, handleExplain } = useExplanation();

  const chats = useChatStore((state) => state.chats);
  const activeChatId = useChatStore((state) => state.activeChatId);

  const currentChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <AnimatePresence>
      {currentChat?.messages?.length ? (
        <motion.div key="messages" className="flex h-full flex-col gap-4">
          <MessageList messages={currentChat.messages} />
          <motion.div
            layoutId="input-shell"
            layout
            transition={{
              duration: 0.1,
            }}
            className="glass rounded-4xl p-3"
          >
            <InputBox onSubmit={handleExplain} />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="text-text font-syne text-center text-4xl font-bold"
          >
            Understand{" "}
            <span className="from-primary-active to-primary relative bg-linear-to-r bg-clip-text text-transparent italic">
              anything
            </span>{" "}
            at your level
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="text-text flex flex-wrap justify-center gap-2"
          >
            {TOPICS.map((topic) => (
              <li
                key={topic}
                onClick={() => handleExplain(topic)}
                className="glass-40 cursor-pointer rounded-4xl px-3 py-2"
              >
                {topic}
              </li>
            ))}
          </motion.ul>

          <motion.div
            layoutId="input-shell"
            layout
            className="mx-auto w-full max-w-2xl"
          >
            <InputBox onSubmit={handleExplain} />
          </motion.div>

          <AnimatePresence>
            {!currentChat?.messages?.length && (
              <LevelSelector layout level={level} onChange={setLevel} />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ChatContent;
