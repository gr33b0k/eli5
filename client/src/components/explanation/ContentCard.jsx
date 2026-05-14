import Explanation from "./Explanation";
import ExplanationSkeleton from "./ExplanationSkeleton";

import { CopyIcon, ShareIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

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

function ContentCard({ loading, content }) {
  return (
    <motion.article
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
        type: "spring",
        stiffness: 225,
        damping: 25,
      }}
      className="glass text-text h-full min-h-0 rounded-4xl p-5"
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
            <ExplanationSkeleton />
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
              <div className="flex items-center gap-2">
                <button className="glass text-text cursor-pointer rounded-2xl p-2">
                  <CopyIcon size={22} />
                </button>
                <button className="glass text-text cursor-pointer rounded-2xl p-2">
                  <ShareIcon size={22} />
                </button>
              </div>
            </motion.div>
            <Explanation content={content} />
            <motion.div variants={container} className="flex gap-4">
              <motion.button
                variants={item}
                className="glass cursor-pointer rounded-2xl px-3 py-2"
              >
                Simpler version
              </motion.button>
              <motion.button
                variants={item}
                className="glass cursor-pointer rounded-2xl p-2 px-3 py-2"
              >
                More technical
              </motion.button>
              <motion.button
                variants={item}
                className="glass cursor-pointer rounded-2xl p-2 px-3 py-2"
              >
                Real-world examples
              </motion.button>
              <motion.button
                variants={item}
                className="glass cursor-pointer rounded-2xl p-2 px-3 py-2"
              >
                Why does it matter?
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ContentCard;
