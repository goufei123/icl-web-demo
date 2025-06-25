import React from "react";

const Methods = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-4">In-Context Learning (ICL) Methods</h2>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li><strong>Semantic Similarity:</strong> Select examples most similar to the input.</li>
        <li><strong>Diversity-based:</strong> Select diverse prompts to improve generalization.</li>
        <li><strong>Task-aware:</strong> Leverage prior task structure.</li>
      </ul>
    </div>
  );
};

export default Methods;