import ContentSection from "./ContentSection";
import { CopyIcon, ShareIcon } from "@phosphor-icons/react";

function ContentCard({ content }) {
  return (
    <article className="glass text-text flex h-full min-h-0 flex-1 flex-col gap-4 rounded-4xl p-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium capitalize">{content.title}</h2>
        <div className="flex items-center gap-2">
          <button className="glass text-text cursor-pointer rounded-2xl p-2">
            <CopyIcon size={22} />
          </button>
          <button className="glass text-text cursor-pointer rounded-2xl p-2">
            <ShareIcon size={22} />
          </button>
        </div>
      </div>
      <div className="glass custom-scrollbar relative flex h-full flex-col overflow-y-auto rounded-3xl">
        {content.sections.map(({ type, content }) => (
          <ContentSection key={type} type={type} content={content} />
        ))}
      </div>
      <div className="flex gap-4">
        <button className="glass cursor-pointer rounded-2xl px-3 py-2">
          Simpler version
        </button>
        <button className="glass cursor-pointer rounded-2xl p-2 px-3 py-2">
          More technical
        </button>
        <button className="glass cursor-pointer rounded-2xl p-2 px-3 py-2">
          Real-world examples
        </button>
        <button className="glass cursor-pointer rounded-2xl p-2 px-3 py-2">
          Why does it matter?
        </button>
      </div>
    </article>
  );
}

export default ContentCard;
