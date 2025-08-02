// src/components/BlogCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1.2rem", color: "#111" }}>{title}</h3>
        <p style={{ fontSize: "0.95rem", color: "#666", margin: "1rem 0" }}>
          {description}
        </p>
        <button
          onClick={() => navigate(`/blogs/${id}`)}
          style={{
            padding: "0.5rem 1rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
