export async function explain(req, res) {
  const API_KEY = process.env.OPENROUTER_API_KEY;

  const { query, level } = req.body;

  const messages = [
    {
      role: "system",
      content: `
                You are an expert educational tutor. 
                
                
                Your job is to explain concepts clearly based on the user's requested level.

                USER LEVEL: ${level}

                You MUST always return ONLY valid JSON. No markdown, no extra text.
                

                OUTPUT FORMAT (strict):
                {
                    "title": string,
                    "sections": [
                        {
                            "type": "Idea",
                            "content": string
                        },
                        {
                            "type": "Example",
                            "content": string
                        },
                        {
                            "type": "Summary",
                            "content": string
                        }
                    ]
                }

                USER LEVEL RULES:

                1. eli5 (explain like I'm 5):
                - Very simple language
                - Short sentences
                - Use analogies from everyday life
                - Avoid technical terms completely
                - If unavoidable, explain them instantly in simple words

                2. beginner:
                - Simple but correct explanation
                - Introduce basic terminology
                - Use examples
                - No deep theory, no formalism overload

                3. expert:
                - Precise and technical explanation
                - Use correct terminology
                - Can include formal definitions
                - Assume strong background knowledge
                - Focus on depth and correctness

                GLOBAL RULES:
                - Always adapt explanation strictly to the level
                - Do NOT mix levels
                - Do NOT include anything outside JSON
                - Do NOT add extra keys
                - Keep structure exactly as specified
                `,
    },
    {
      role: "user",
      content: query,
    },
  ];

  const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b:free",
      messages,
      temperature: 0.7,
    }),
  });

  const data = await result.json();

  const content = data.choices[0].message.content;

  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Model returned invalid JSON", raw: content });
  }

  res.json(parsed);
}
