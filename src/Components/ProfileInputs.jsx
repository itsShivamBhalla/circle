import React, { useState } from "react";

export default function ProfileInputs({ fieldName, click, value }) {
  const [name, setName] = useState();

  const detailContainer = {
    display: "flex",
    justifyContent: "space-between",
    margin: "24px 24px 8px",
  };
  const inputField = {
    color: "#CECECE",
    fontSize: "12px",
    fontFamily: "Helvetica, Helvetica Neue",
  };

  const button = {
    backgroundColor: "Transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: "#3B88FD",
    fontSize: "12px",
  };

  const input = {
    border: "none",
    borderRadius: "8px",
    margin: "0 16px",
    width: "327px",
    height: "52px",
    outline: "none",
    backgroundColor: "#F7F7F7",
    paddingLeft:"16px"
  };

  function editName(e) {
    setName(e.target.value);
    console.log(name);
  }

  return (
    <div>
      <div style={detailContainer}>
        <span style={inputField}>{fieldName}</span>
        <button style={button} onClick={click}>
          Edit
        </button>
      </div>
      <input
        type="text"
        value={value}
        onChange={editName}
        style={input}
        disabled={true}
      />
    </div>
  );
}
