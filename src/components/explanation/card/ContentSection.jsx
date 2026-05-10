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
    <section className="border-border flex flex-1 flex-col justify-center gap-2 border-b p-4 last:border-none">
      <div className="flex items-center gap-2">
        <span className="text-accent rounded-2xl">
          {Icon && <Icon size={20} className="text-accent" weight="bold" />}
        </span>
        <h3 className="text-accent text-lg font-medium">{type}</h3>
      </div>
      <p className="">{content}</p>
    </section>
  );
}
export default ContentSection;
