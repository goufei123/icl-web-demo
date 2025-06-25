import React from "react";

const Home = () => {
  return (
    <div className="w-full max-w-2xl bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">ICL Example Recommender</h1>
      <textarea
        className="w-full h-32 p-4 border border-gray-300 rounded mb-4"
        placeholder="Paste your prompt here..."
      />
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Recommend Examples
        </button>
      </div>
    </div>
  );
};

export default Home;