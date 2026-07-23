import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CopyIcon, CheckIcon } from "@phosphor-icons/react";

import { formatContent } from "@/shared/lib";

import Body from "./Body";
import Skeleton from "./Skeleton";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function AssistantMessage({ message }) {
  const loading = message.loading;
  const content = message.content;
  const isError = message.error === true || !content;

  const [copied, setCopied] = useState(false);

  async function handleCopy(e) {
    e.preventDefault();

    const text = formatContent(message.content);

    await navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article
      className={`${!isError ? "glass-10 text-text flex rounded-4xl p-5" : ""}`}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <Skeleton key="skeleton" />
        ) : isError ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-error text-surface rounded-4xl p-5"
          >
            <h2 className="mb-2 text-xl font-semibold">{content.title}</h2>
            <p>{content.sections[0].content}</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex h-full flex-1 flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <motion.h2
                variants={item}
                className="text-lg font-medium capitalize md:text-xl"
              >
                {content.title}
              </motion.h2>
              <button
                className="glass text-accent flex items-center justify-center rounded-2xl p-2"
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckIcon weight="bold" size={24} />
                ) : (
                  <CopyIcon weight="bold" size={24} />
                )}
              </button>
            </div>

            <Body content={content} />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default AssistantMessage;
