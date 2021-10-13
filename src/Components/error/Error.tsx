import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    // document.getElementById("header_sidemenu").style.display = "none";
    const output = document.getElementById("header_sidemenu");
    if (!output) return;
    output.style.display = "none".toString();
  }, []);

  return (
    <>
      <section className="main_Error_Wrapper">
        <div className="Error-Wrapper">
          <h2>Ooops!</h2>
          <h3>404 - page not found</h3>
          <p>
            The page you are looking for might have been removed & had its name{" "}
            <br />
            Changed or is temporarily unavailable.
          </p>
          <div className="BackBtn">
            <Link to="/">Go to Homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
