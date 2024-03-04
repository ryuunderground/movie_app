import React from "react";
import { Link } from "react-router-dom";

function Navigaton() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navigaton;
