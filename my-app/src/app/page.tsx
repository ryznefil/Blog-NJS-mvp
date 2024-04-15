"use client";

import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Test App</h1>
      <p className="text-lg mb-8">Please enter what you are looking for below:</p>
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md"
        placeholder="Enter your input here"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <>
          <p className="mt-4 p-4 bg-white rounded-md w-full max-w-md">You have asked me: {inputValue}</p>
          <div className="mt-4 p-4 bg-gray-100 rounded-md w-full max-w-md">
            <p>My response to that question is: I dunno!</p>
          </div>
        </>
      )}
    </div>
  );
}