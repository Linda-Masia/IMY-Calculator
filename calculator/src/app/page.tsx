'use client';
import React, { useState } from "react";
import { calculateHex } from "@/lib/hexCalculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (val: string) => {
    if (input.length < 5) {
      setInput(prev => prev + val.toUpperCase());
    }
  };

  const clearInput = () => {
    setInput("");
    setOutput("");
  };

  const calculateResult = () => {
    try {
      const [hex1, operator, hex2] = parseInput(input);
      const result = calculateHex(hex1, hex2, operator as "+" | "-" | "*" | "/");
      setOutput(result);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setOutput("ERROR");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-800 rounded-xl shadow-lg text-white">
      <div className="mb-4 text-right text-2xl bg-black p-2 rounded">{output || input || "0"}</div>
      <div className="grid grid-cols-4 gap-2">
        {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"].map((char) => (
          <button
            key={char}
            onClick={() => handleInput(char)}
            className="bg-gray-700 hover:bg-gray-600 p-4 rounded text-lg"
          >
            {char}
          </button>
        ))}

        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => handleInput(op)}
            className="bg-blue-700 hover:bg-blue-600 p-4 rounded text-lg col-span-1"
          >
            {op}
          </button>
        ))}

        <button onClick={clearInput} className="bg-red-600 hover:bg-red-500 p-4 rounded col-span-2">
          C
        </button>
        <button onClick={calculateResult} className="bg-green-600 hover:bg-green-500 p-4 rounded col-span-2">
          =
        </button>
      </div>
    </div>
  );
}


function parseInput(input: string): [string, string, string] {
  const operatorMatch = input.match(/[+\-*/]/);
  if (!operatorMatch) throw new Error("Invalid input");

  const operator = operatorMatch[0];
  const [left, right] = input.split(operator);
  if (!left || !right) throw new Error("Invalid input");

  return [left, operator, right];
}
