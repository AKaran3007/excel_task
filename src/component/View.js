import { Link } from "react-router-dom";
import React from "react";

function View() {
  const handleView = () => {
    var btnSave = JSON.parse(localStorage.getItem("btnSave") || "[]");
    console.log(btnSave);
  };

  return (
    <div>
      <h1>Hello</h1>
      <Link to="/">
        <button  onClick={() => handleView()}>Home</button>
      </Link>
      <button onClick={() => handleView()}>check</button>
    </div>
  );
}

export default View;
