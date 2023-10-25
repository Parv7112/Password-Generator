import React, { useState } from "react";
import Options from "./components/Options";
import GeneratedPassword from "./components/GeneratedPassword";
import StrengthRating from "./components/StrengthRating";
import CopyButton from "./components/CopyButton";
import zxcvbn from "zxcvbn";

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars
) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/';

  let allowedChars = "";

  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  if (includeNumbers) {
    allowedChars += numberChars;
  }
  if (includeSpecialChars) {
    allowedChars += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

function calculateStrength(password) {
  const result = zxcvbn(password);
  return result.score;
}

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleGeneratePassword = (
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars
  ) => {
    const newPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecialChars
    );
    setPassword(newPassword);

    const strengthRating = calculateStrength(newPassword);
    setStrength(strengthRating);
  };

  return (
    <div className="container bg-black mt-5">
      <h2 className="text-center">Password Generator</h2>
    <div className="container bg-dark text-white initial-container mt-3 py-2">
      <div className="d-flex justify-content-between align-items-center">
        <GeneratedPassword password={password} />
        <CopyButton password={password} />
      </div>
    </div>
      <div className="container bg-dark text-white initial-container mt-4 py-2">
      <Options onGeneratePassword={handleGeneratePassword} />
      <StrengthRating strength={strength} />
      </div>
    </div>
  );
}

export default App;
