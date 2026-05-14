import ContentSection from "./ContentSection";

import { motion } from "motion/react";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Explanation({ content }) {
  return (
    <>
      <motion.div
        layout
        variants={container}
        className="glass custom-scrollbar relative flex h-full flex-col overflow-y-auto rounded-3xl"
      >
        {content.sections.map(({ type, content }) => (
          <ContentSection key={type} type={type} content={content} />
        ))}
      </motion.div>
    </>
  );
}

export default Explanation;
