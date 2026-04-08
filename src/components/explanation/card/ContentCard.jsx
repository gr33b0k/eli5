import ContentSection from "./ContentSection";

function ContentCard() {
  return (
    <article className="glass text-text max-h-fit flex-1 rounded-3xl p-5 ease-in-out">
      <h2 className="mb-5 text-xl font-medium">Artificial Intelligence</h2>
      <div className="flex flex-col gap-5">
        <ContentSection
          type="Idea"
          content="AI is the simulation of human intelligence in machines."
        />
        <ContentSection
          type="Example"
          content="AI is the simulation of human intelligence in machines."
        />
        <ContentSection
          type="Summary"
          content="AI is the simulation of human intelligence in machines."
        />
      </div>
    </article>
  );
}

export default ContentCard;
