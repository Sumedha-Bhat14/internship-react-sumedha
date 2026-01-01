import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <h1> Home Page</h1>
        <li>
            <Link to="/about_us"> About_us</Link>
            <Link to="/contact"> Contact </Link>
        </li>
    </div>
  )
}

export default Home