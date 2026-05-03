import ContentSection from "./ContentSection";

function ContentCard({ content }) {
  return (
    <article className="glass text-text flex h-max max-h-max min-h-0 flex-1 flex-col rounded-4xl p-5 ease-in-out">
      <h2 className="mb-5 text-xl font-medium capitalize">{content.title}</h2>
      <div className="custom-scrollbar -mr-2.5 flex flex-col gap-5 overflow-y-auto pr-2.5">
        {content.sections.map(({ type, content }) => (
          <ContentSection key={type} type={type} content={content} />
        ))}
      </div>
    </article>
  );
}

export default ContentCard;
