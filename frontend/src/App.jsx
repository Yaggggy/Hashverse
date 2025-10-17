import { useState } from "react";
import HashCard from "./components/HashCard";
import { getHash } from "./api/hashAPI";
import "./styles/style.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const algorithms = ["MD5", "SHA1", "SHA224", "SHA256", "SHA512"];

  const handleSelect = async (algo) => {
    if (!input) return alert("Enter text to hash!");
    const result = await getHash(input, algo);
    setOutput(result);
  };

  return (
    <div className="container">
      <h1 className="title">HashVerse</h1>
      <p className="subtitle">Generate secure hashes instantly</p>

      <input
        className="input-box"
        type="text"
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="card-container">
        {algorithms.map((algo) => (
          <HashCard key={algo} title={algo} onSelect={handleSelect} />
        ))}
      </div>

      {output && (
        <div className="result">
          <h2>{output.algorithm}</h2>
          <p className="hash-value">{output.hash}</p>
          <p className="summary">{output.summary}</p>
        </div>
      )}
    </div>
  );
}
