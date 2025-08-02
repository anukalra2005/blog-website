// src/components/Footer.jsx
function Footer() {
  return (
    <footer style={{
      background: '#0e0e0e',
      color: '#f0f0f0',
      padding: '3rem 1rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {/* Left - Branding */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Anu’s Blog</h2>
          <p style={{ fontSize: '0.95rem', color: '#aaa' }}>
            © {new Date().getFullYear()} Anu Kalra. All rights reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="#blogs" style={linkStyle}>Blogs</a>
          <a href="#contact" style={linkStyle}>Contact</a>
          <a href="https://github.com/anukalra2005" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
        </div>

        {/* Right - Social Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/anukalra2005" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={iconStyle} />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Instagram" style={iconStyle} />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '0.95rem',
};

const iconStyle = {
  width: '24px',
  height: '24px',
  filter: 'brightness(0.9)',
  transition: 'transform 0.3s ease',
};

export default Footer;
