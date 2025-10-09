// UnderDevelopment.jsx
import React from "react";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        🚧 This Page is Under Development 🚧
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        We're working hard to bring something amazing here. Stay tuned!
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}
