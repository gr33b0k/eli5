import { AnimatePresence, motion } from "motion/react";

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
            <motion.h2
              variants={item}
              className="text-lg font-medium capitalize md:text-xl"
            >
              {content.title}
            </motion.h2>

            <Body content={content} />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default AssistantMessage;
