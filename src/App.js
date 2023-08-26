import React, { useState } from "react";

function SustainableKit() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle email submission here
    alert(`Thank you for subscribing with email: ${email}`);
  };

  return (
    <div className="container">
      <h1>The Sustainable Kit</h1>
      <p>A kit to help you live a more sustainable lifestyle.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SustainableKit;