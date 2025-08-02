import React from "react";

function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffe0c3, #ffb6b9)",
        padding: "5rem 1rem",
        textAlign: "center",
        color: "#222",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          fontWeight: "700",
          letterSpacing: "-1px",
        }}
      >
        Welcome to <span style={{ color: "#ff4e50" }}>Anu's Blog</span>
      </h1>
      <p style={{ fontSize: "1.3rem", marginBottom: "2rem", color: "#444" }}>
        Explore tutorials, stories & insights on tech, coding, and creativity.
      </p>
      <a href="#blogs">
        <button
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#333")}
          onMouseOut={(e) => (e.target.style.background = "#111")}
        >
          ↓ Read Blogs
        </button>
      </a>
    </section>
  );
}

export default Hero;
