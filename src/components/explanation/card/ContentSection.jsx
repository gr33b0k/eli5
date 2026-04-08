import {
  LightbulbIcon,
  TestTubeIcon,
  NotepadIcon,
} from "@phosphor-icons/react";

const ICONS = {
  Idea: LightbulbIcon,
  Example: TestTubeIcon,
  Summary: NotepadIcon,
};

function ContentSection({ type, content }) {
  const Icon = ICONS[type];

  return (
    <section className="border-border flex items-center gap-5 border-b pb-5 last:border-none last:pb-0">
      <span className="glass text-accent rounded-2xl p-3">
        {Icon && <Icon size={24} className="text-accent" />}
      </span>
      <div>
        <h3 className="text-accent text-lg font-medium">{type}</h3>
        <p className="">{content}</p>
      </div>
    </section>
  );
}
export default ContentSection;
