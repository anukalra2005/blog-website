// src/components/BlogDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "How to Master JavaScript",
    description: "JavaScript is the most important language for web development...",
    image: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644309392998-Sorting%20image-25.png",
    content: `To master JavaScript, you need to:

1. Learn basics (variables, loops, functions).
2. Understand DOM manipulation.
3. Practice daily by building small projects.
4. Learn advanced topics like closures, promises, async/await.
5. Contribute to open source or build your own blogs and apps.

✨ Consistency is the key to becoming pro in JS.`,
    author: "Anu Kalra",
    date: "June 25, 2025",
  },
  {
    id: 2,
    title: "Top 10 React Tips",
    description: "React is a powerful UI library...",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    content: `Best practices for React:

✅ Use functional components  
✅ Keep components small and reusable  
✅ Use props and state wisely  
✅ Apply conditional rendering  
✅ Leverage useEffect and useMemo  
✅ Use React Router for navigation  
✅ Use context or Redux for state management  
✅ Optimize performance  
✅ Write clean and modular CSS  
✅ Deploy with Vite or CRA`,
    author: "Anu Kalra",
    date: "June 28, 2025",
  },
];

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <p style={{ textAlign: "center", padding: "2rem" }}>Blog not found! 😔</p>;

  return (
    <div style={{
      maxWidth: "900px",
      margin: "2rem auto",
      padding: "2rem",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      fontFamily: "'Inter', sans-serif"
    }}>
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "380px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h1 style={{
        fontSize: "2.5rem",
        margin: "1.5rem 0 0.5rem",
        color: "#1a1a1a"
      }}>{blog.title}</h1>

      <p style={{
        fontSize: "0.95rem",
        color: "#666",
        marginBottom: "1.5rem"
      }}>
        By <strong>{blog.author}</strong> | 📅 {blog.date}
      </p>

      <p style={{
        whiteSpace: "pre-line",
        lineHeight: "1.8",
        fontSize: "1.1rem",
        color: "#333",
        marginBottom: "2rem"
      }}>
        {blog.content}
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "0.7rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "500",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          ← Back to Home
        </button>

        <button
          onClick={() => alert("Share feature coming soon!")}
          style={{
            padding: "0.7rem 1.5rem",
            border: "2px solid #007bff",
            background: "transparent",
            borderRadius: "6px",
            color: "#007bff",
            fontWeight: "500",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          🔗 Share
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
