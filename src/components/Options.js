import React, { useState } from "react";

function Options(props) {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handleLengthChange = (e) => {
    const value = e.target.value;
    setPasswordLength(value);
  };

  const handleCharacterTypeChange = (e) => {
    const { name, checked } = e.target;
    if (name === "includeUppercase") {
      setIncludeUppercase(checked);
    } else if (name === "includeLowercase") {
      setIncludeLowercase(checked);
    } else if (name === "includeNumbers") {
      setIncludeNumbers(checked);
    } else if (name === "includeSpecialChars") {
      setIncludeSpecialChars(checked);
    }
  };

  return (
    <div className="options">
      <div>
        <label>Character Length </label>
        <h5 style={{ display: "inline", float: "right", marginRight: "10px" }}>
          {passwordLength}
        </h5>
      </div>
      <div>
        <input
          type="range"
          min="1"
          max="12"
          value={passwordLength}
          className="w-100"
          onChange={handleLengthChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="includeUppercase"
            checked={includeUppercase}
            onChange={handleCharacterTypeChange}
          />{" "}
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="includeLowercase"
            checked={includeLowercase}
            onChange={handleCharacterTypeChange}
          />{" "}
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="includeNumbers"
            checked={includeNumbers}
            onChange={handleCharacterTypeChange}
          />{" "}
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="includeSpecialChars"
            checked={includeSpecialChars}
            onChange={handleCharacterTypeChange}
          />{" "}
          Include Symbols
        </label>
      </div>
      <button
        className="generate-button w-100 fw-bold my-3 fs-4"
        onClick={() =>
          props.onGeneratePassword(
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSpecialChars
          )
        }
      >
        Generate →
      </button>
    </div>
  );
}

export default Options;
