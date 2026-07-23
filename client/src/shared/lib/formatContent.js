export function formatContent(content) {
  return [
    content.title,
    "",
    ...content.sections.flatMap((section) => [
      section.type,
      section.content,
      "",
    ]),
  ].join("\n");
}
