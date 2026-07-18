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
      className={`${!isError ? "glass-10 text-text flex h-full rounded-4xl p-5" : ""}`}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-full flex-1 flex-col gap-4"
          >
            <Skeleton />
          </motion.div>
        ) : isError ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-full flex-1 flex-col gap-4"
          >
            <div className="border-error/30 bg-error/20 text-error rounded-3xl border p-5">
              <h2 className="mb-2 text-xl font-semibold">{content.title}</h2>
              <p>{content.sections[0].content}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex h-full flex-1 flex-col gap-4"
          >
            <motion.div variants={item} className="flex justify-between">
              <h2 className="text-xl/loose font-medium capitalize">
                {content.title}
              </h2>
            </motion.div>

            <Body content={content} />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default AssistantMessage;
