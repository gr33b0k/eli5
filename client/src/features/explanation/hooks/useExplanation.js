import { useState } from "react";

import { explain } from "../api/explain";

export function useExplanation() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [level, setLevel] = useState("eli5");
  const [loading, setLoading] = useState(false);

  const handleExplain = async (q) => {
    try {
      setQuery(q);
      setLoading(true);

      const data = await explain(q, level);

      setResponse(data);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    response,
    level,
    loading,
    setLevel,
    handleExplain,
  };
}
