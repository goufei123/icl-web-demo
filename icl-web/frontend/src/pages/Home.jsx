import React, { useState } from "react";

const dummyExamples = [
  { id: 1, content: "Example 1: Print Hello World (for input <= 50)" },
  { id: 2, content: "Example 2: Compute Factorial (for input > 50)" }
];

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  // const handleRecommend = () => {
  //   const trimmed = prompt.trim();
  //   const num = parseFloat(trimmed);
  //
  //   if (isNaN(num)) {
  //     setResults([{ id: 0, content: "Please enter a valid number." }]);
  //     return;
  //   }
  //
  //   if (num > 50) {
  //     setResults([dummyExamples[1]]);
  //   } else {
  //     setResults([dummyExamples[0]]);
  //   }
  // };

  const handleRecommend = async () => {
  if (!prompt.trim()) {
    setResults([]);
    return;
  }

  const res = await fetch("http://localhost:5000/methods", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  setResults(data);
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-10">
      <h1 className="text-4xl font-bold mb-6">ICL Example Recommender</h1>

      <textarea
        placeholder="Enter a number (e.g., 42 or 99)"
        className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={handleRecommend}
      >
        Recommend Examples
      </button>

      {results.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recommended Example:</h2>
          <ul className="space-y-2">
            {results.map((ex) => (
              <li key={ex.id} className="p-3 border border-gray-200 rounded bg-gray-50">
                {ex.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;