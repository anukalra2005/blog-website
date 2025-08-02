// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        padding: '1rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#222' }}>
        <span style={{ color: '#007bff', fontWeight: 'bold' }}>Anu's</span> Blog
      </h1>
      <nav>
        <a href="/" style={navStyle}>Home</a>
        <a href="#blogs" style={navStyle}>Blogs</a>
        <a href="#contact" style={navStyle}>Contact</a>
      </nav>
    </header>
  );
}

const navStyle = {
  marginLeft: '1.5rem',
  color: '#555',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'color 0.2s',
};

export default Header;
