// src/components/Hero.jsx
function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(to right, #fef6e4, #fcd5ce)',
        textAlign: 'center',
        padding: '6rem 2rem 7rem',
        position: 'relative',
      }}
    >
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#333',
        marginBottom: '1rem',
      }}>
        Welcome to <span style={{ color: '#007bff' }}>Anu's Blog</span>
      </h1>

      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Explore helpful tips, tech stories & student hacks 🚀
      </p>

      <button
        onClick={() =>
          window.scrollTo({ top: 600, behavior: 'smooth' })
        }
        style={{
          marginTop: '2rem',
          padding: '0.8rem 1.6rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#007bff',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        📚 Browse Blogs
      </button>
    </section>
  );
}

export default Hero;
