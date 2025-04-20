"use client"
import React, { useState } from "react"

const Calculator: React.FC = () => {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const handleOperation = (op: string) => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    if (isNaN(numA) || isNaN(numB)) return

    let res = 0
    switch (op) {
      case "+":
        res = numA + numB
        break
      case "-":
        res = numA - numB
        break
      case "*":
        res = numA * numB
        break
      case "/":
        res = numB !== 0 ? numA / numB : NaN
        break
    }
    setResult(res)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Calculator</h2>

      <div className="space-y-2">
        <input
          type="number"
          placeholder="Number A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <input
          type="number"
          placeholder="Number B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>

      <div className="flex justify-between">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => handleOperation(op)}
            className="flex-1 mx-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            {op}
          </button>
        ))}
      </div>

      {result !== null && (
        <p
          data-testid="result"
          className="text-center text-lg font-medium text-green-700"
        >
          Result: {result}
        </p>
      )}
    </div>
  )
}

export default Calculator
