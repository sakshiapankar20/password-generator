import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllow, setNumberAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const passwordRef = useRef(null);

  // Generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-={}[]`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    setCopied(false);

    setHistory((prev) => {
      const updated = [pass, ...prev];
      return updated.slice(0, 5); // Keep last 5
    });
  }, [length, numberAllow, charAllow]);

  // Copy to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  // Password strength
  const getStrength = () => {
    if (length < 8) return "Weak";
    if (length < 12) return "Medium";
    return "Strong";
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

return (
  <div
    className={`${
      darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
    } min-h-screen flex items-center justify-center px-4`}
  >
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } w-full max-w-xl shadow-lg rounded-xl px-8 py-8 border border-gray-200`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Password Generator</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-md text-sm border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Password Display */}
      <div className="flex shadow-sm rounded-lg overflow-hidden mb-4 border border-gray-300">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          className="outline-none w-full py-3 px-4 font-mono text-base bg-transparent"
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 px-5 text-white text-sm font-medium transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

        {/* Strength Indicator */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm">
            <span>Strength</span>
            <span
              className={`font-medium ${
                getStrength() === "Weak"
                  ? "text-red-500"
                  : getStrength() === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {getStrength()}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded mt-1">
            <div
              className={`h-2 rounded transition-all ${
                getStrength() === "Weak"
                  ? "bg-red-500 w-1/3"
                  : getStrength() === "Medium"
                  ? "bg-yellow-500 w-2/3"
                  : "bg-green-500 w-full"
              }`}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer w-2/3 accent-blue-600"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllow}
              onChange={() => setNumberAllow((prev) => !prev)}
              className="accent-blue-600"
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
              className="accent-blue-600"
            />
            <label>Include Symbols</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
              className="accent-blue-600"
            />
            <label>Show Password</label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={passwordGenerator}
            className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md font-medium text-sm transition w-1/2"
          >
            Regenerate
          </button>
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition w-1/2"
          >
            Copy
          </button>
        </div>

        {/* Password History */}
        {history.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-3">Recent Passwords</h2>
            <ul className="space-y-2 text-sm font-mono">
              {history.map((p, i) => (
                <li
                  key={i}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg border 
                    ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } hover:shadow-md transition`}
                >
                  <span className="truncate">{p}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(p);
                      setCopied(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                  >
                    Copy
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
