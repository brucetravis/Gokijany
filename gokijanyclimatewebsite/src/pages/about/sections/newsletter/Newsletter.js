import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section id="subscribe">
      <div className="container">
        <h2>Subscribe Newsletter & get latest news</h2>
        <div>
          <form action="">
            <input type="email" placeholder="Enter your email address" />
            <input type="submit" className="section_btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
