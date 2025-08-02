// src/components/BlogList.jsx
import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    title: "How to Master JavaScript",
    description: "JavaScript is the most important language for web development...",
    image: "https://web.dev/static/blog/introducing-learn-javascript/image/thumbnail.svg",
  },
  {
    id: 2,
    title: "Top 10 React Tips",
    description: "React is a powerful UI library...",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*l6s7ev65uD6otx9vV6A2AQ.png",
  },
];

const BlogList = () => {
  return (
    <section
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
        📝 Latest Blog Posts
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
