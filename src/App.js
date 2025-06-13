import React, { useState } from "react";
import sha1 from "crypto-js/sha1";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkPassword = async () => {
    // Check if password is empty
    if (!password) {
      setError("Please enter a password.");
      setResult(null); // Clear result if password is empty
      return;
    }

    setLoading(true); // Set loading state
    setError(""); // Reset any previous error
    setResult(null); // Clear any previous result

    // Hash password with SHA1
    const hash = sha1(password).toString().toUpperCase();
    const prefix = hash.substring(0, 5); // First 5 characters
    const suffix = hash.substring(5); // Rest of the hash

    try {
      // Fetch data from the Pwned Passwords API
      const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`
      );
      const text = await response.text();
      const lines = text.split("\n");
      const match = lines.find((line) => line.startsWith(suffix));

      // If match is found, extract the breach count
      if (match) {
        const count = match.split(":")[1];
        setResult(
          `⚠️ This password has been found ${count.trim()} times in data breaches.`
        );
      } else {
        // If no match, password is safe
        setResult("✅ This password was NOT found in any known data breaches.");
      }
    } catch (err) {
      // If there's an error, show it
      setError("Failed to check password. Please try again.");
    } finally {
      // Stop loading when done
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <img
        src="https://i.pinimg.com/736x/3a/77/27/3a77277ddc737f982557108c8cd5aa93.jpg"
        alt="Third Eye Logo"
        className="logo"
      />
      <h1>THIRD EYE - My Pwned Password ? </h1>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="eye-toggle" onClick={toggleShowPassword}>
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
      <button class="name-btn" onClick={checkPassword}>
        Check
      </button>
      {loading && <p>Checking...</p>}
      {error && <p className="error">{error}</p>}
      {result && <p className="result">{result}</p>}

      <div className="footer">
        <p>
          Made by{" "}
          <a
            href="https://x.com/i_sam33r"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sameer
          </a>{" "}
          with ❤️
        </p>
      </div>
    </div>
  );
}

export default App;
