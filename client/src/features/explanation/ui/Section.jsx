import {
  LightbulbIcon,
  TestTubeIcon,
  NotepadIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const ICONS = {
  Idea: LightbulbIcon,
  Example: TestTubeIcon,
  Summary: NotepadIcon,
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

function Section({ type, content }) {
  const Icon = ICONS[type];

  return (
    <motion.section
      variants={item}
      className="border-border flex flex-1 flex-col justify-center gap-2 border-b p-4 last:border-none"
    >
      <div className="flex items-center gap-2">
        <span className="text-accent rounded-2xl">
          {Icon && <Icon size={20} className="text-accent" weight="bold" />}
        </span>
        <h3 className="text-accent text-lg font-medium">{type}</h3>
      </div>
      <p className="">{content}</p>
    </motion.section>
  );
}
export default Section;
