import React from "react";

function GeneratedPassword(props) {
  return (
    <div className="password">
      <input
        type="text"
        id="password"
        readOnly
        className="bg-dark text-white generated-section"
        value={props.password}
        style={{
          border: "none",
          width: "100%"
        }}
      />
    </div>
  );
}

export default GeneratedPassword;
