import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#f9f9f9",
        padding: "4rem 1rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Have questions or suggestions? Let's talk!
      </p>

      <form
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! I'll get back to you soon.");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          required
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            background: "#111",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
};

export default Contact;
